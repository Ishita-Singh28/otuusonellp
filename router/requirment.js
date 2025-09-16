const express = require('express');
const router = express.Router();
const Requirment = require('../modal/requirment')

router.get('/requirment', async (req, res) => {
    try {
        const requirment = await Requirment.find()
        res.status(200).send({
            message: "Requirments",
            requirment: requirment
        })
    }
    catch (err) {
        console.log(err)
    }
});
router.post('/requirment/create', async (req, res) => {
    try {
        const { name, email, service, plan, message } = req.body;
        const createRequirment = new Requirment({ name, email, service, plan, message })
        const requirment = await createRequirment.save()
        res.status(201).send({
            message: "Requirment submitted successfully!",
            new_requirment: requirment
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({
            error: err
        })
    }
})
router.delete('/requirment/delete/:id', async (req, res) => {
    try {
        const { id } = req.params
        const isExitRequirment = await Requirment.findById(id)
        if (!isExitRequirment) {
            res.status(404).send({
                message: "Requirment not found"
            })
        }
        const requirment = await Requirment.findByIdAndDelete(id)
        res.status(201).send({
            message: "Requirment deleted successfully!",
            deleted_requirment: requirment
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
