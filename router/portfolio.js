const express = require("express")
const router = express.Router()
const Portfolio = require('../modal/portfolio')
const cloudinary = require('cloudinary').v2;


router.use(express.json({ limit: '10mb' }));
router.use(express.urlencoded({ limit: '10mb', extended: true }));

router.get('/portfolio', async (req, res) => {
    try {
        const portfolio = await Portfolio.find();
        res.status(200).json({
            message: "Portfolio",
            portfolio: portfolio
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Internal server error"
        });
    }
});



router.get('/portfolio-details', async (req, res) => {
    try {
        const formattedHeading = req.query.heading;

        if (!formattedHeading) {
            return res.status(400).json({
                error: "Missing heading parameter"
            });
        }
        const portfolio = await Portfolio.findOne({ heading: formattedHeading });
        if (!portfolio) {
            return res.status(404).json({
                error: "Portfolio not found"
            });
        }

        res.status(200).json({
            message: "Portfolio found",
            portfolio: portfolio
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Internal server error"
        });
    }
});


router.post('/portfolio/post', async (req, res) => {
    try {
        if (!req.files || !req.files.image || !req.files.post_image) {
            return res.status(400).json({ error: "Both 'image' and 'post_image' files must be uploaded" });
        }

        const imageFile = req.files.image;
        const postImageFile = req.files.post_image;


        cloudinary.uploader.upload(imageFile.tempFilePath, async (err1, result1) => {
            if (err1) {
                console.error(err1);
                return res.status(500).json({ error: "Failed to upload image" });
            }


            cloudinary.uploader.upload(postImageFile.tempFilePath, async (err2, result2) => {
                if (err2) {
                    console.error(err2);
                    return res.status(500).json({ error: "Failed to upload post_image" });
                }

                const { heading, desc, frontend, backend, database, cloud_server } = req.body;
                const newPortfolio = new Portfolio({
                    heading,
                    desc,
                    image: result1.secure_url,
                    post_image: result2.secure_url,
                    frontend,
                    backend,
                    database,
                    cloud_server
                });

                await newPortfolio.save();
                res.status(201).json({
                    message: "Portfolio item added successfully",
                    newPortfolio: newPortfolio
                });
            });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});


router.delete('/portfolio/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const portfolio = await Portfolio.findById(id);

        if (!portfolio) {
            return res.status(404).json({
                message: "Portfolio not found"
            });
        }

        const { image, post_image } = portfolio;

        if (image) {
            const imagePublicId = extractPublicId(image);
            await cloudinary.uploader.destroy(imagePublicId);
        }

        if (post_image) {
            const postImagePublicId = extractPublicId(post_image);
            await cloudinary.uploader.destroy(postImagePublicId);
        }

        await Portfolio.findByIdAndDelete(id);

        res.status(200).json({
            message: "Portfolio and associated images deleted successfully",
            portfolio
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Internal server error"
        });
    }
});

const extractPublicId = (url) => {
    const parts = url.split('/');
    const lastPart = parts[parts.length - 1];
    const publicId = lastPart.split('.')[0];
    return publicId;
};



router.patch('/portfolio/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const existingPortfolio = await Portfolio.findById(id);

        if (!existingPortfolio) {
            return res.status(404).json({ error: 'Portfolio not found' });
        }

        const {
            heading,
            desc,
            frontend,
            backend,
            database,
            cloud_server
        } = req.body;

        let updatedFields = {
            heading,
            desc,
            frontend,
            backend,
            database,
            cloud_server
        };


        if (req.files?.image) {
            const oldImagePublicId = extractPublicId(existingPortfolio.image);
            await cloudinary.uploader.destroy(oldImagePublicId);

            const uploadedImage = await cloudinary.uploader.upload(req.files.image.tempFilePath);
            updatedFields.image = uploadedImage.secure_url;
        }

        if (req.files?.post_image) {
            const oldPostImagePublicId = extractPublicId(existingPortfolio.post_image);
            await cloudinary.uploader.destroy(oldPostImagePublicId);

            const uploadedPostImage = await cloudinary.uploader.upload(req.files.post_image.tempFilePath);
            updatedFields.post_image = uploadedPostImage.secure_url;
        }

        const updatedPortfolio = await Portfolio.findByIdAndUpdate(
            id,
            updatedFields,
            { new: true }
        );

        res.status(200).json({
            message: "Portfolio updated successfully",
            portfolio: updatedPortfolio
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});


module.exports = router