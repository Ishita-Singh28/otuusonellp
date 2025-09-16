const express = require('express')
const router = express.Router()
const Admin = require('../modal/admin')
const bcript = require('bcrypt')
const jwt = require('jsonwebtoken');



router.get("/admin", async (req, res) => {
    try {
        const admin = await Admin.find()
        res.status(201).send({
            message: "admin",
            admin: admin
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({
            error: err
        })
    }
})
router.post("/admin/sign-up", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hachedPassword = await bcript.hash(password, 10)
        const signUp = new Admin({
            name,
            email,
            password: hachedPassword
        })
        await signUp.save()
        res.status(201).send({
            message: "Admin registed successfully!",
            admin: signUp
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).send(
            {
                error: err
            }
        )
    }
})
router.post("/admin/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        const passwordMatch = await bcript.compare(password, admin.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ adminId: admin._id }, 'your_secret_key', { expiresIn: '1h' });

        res.status(200).json({
            message: "Login successful",
            token: token
        });
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
module.exports = router