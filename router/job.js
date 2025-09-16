const express = require("express")
const router = express.Router()
const Job = require('../modal/job')
const path = require("path")
const cloudinary = require('cloudinary').v2;

router.get('/job', async (req, res) => {
    try {
        const job = await Job.find()
        res.status(201).send({
            "message": "Jobs",
            jobs: job
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({
            error: err
        })
    }
})

router.post('/job/post', async (req, res) => {
    try {
        if (!req.files || !req.files.resume) {
            return res.status(400).json({
                error: "No file uploaded",
                file: req.files
            });
        }

        const file = req.files.resume;
        console.log(file, "file//");

        cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Failed to upload resume" });
            }

            const {
                name,
                email,
                phone,
                qualification,
                experience,
                current_ctc,
                expected_ctc,
                position,
                message
            } = req.body;

            const newJob = new Job({
                name,
                email,
                phone,
                qualification,
                experience,
                current_ctc,
                expected_ctc,
                position,
                message,
                resume: result.secure_url
            });

            await newJob.save();

            res.status(201).json({
                message: "Application submitted successfully",
                newJob
            });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
});

router.delete('/job/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const isExitingJob = await Job.findById(id)
        if (!isExitingJob) {
            res.status(404).send({
                message: "job not found"
            })
        }
        const job = await Job.findByIdAndDelete(id)
        res.status(201).send({
            message: "Job deleted successfully!",
            deleted: job
        })

    }
    catch (err) {
        console.log(err)
        res.status(500).send({
            error: err
        })
    }
})

module.exports = router