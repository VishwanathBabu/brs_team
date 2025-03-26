const Request = require('../models/requestModel');
const nodemailer = require('nodemailer');
require('dotenv').config();

exports.createRequest = async (req, res) => {
    try {
        const requestData = req.body;
        const existingRequest=await Request.findOne({reg_no: requestData.reg_no})
        if(existingRequest){
            res.json({message: "User already present. Failed to add"})
            return
        }
        const newRequest = new Request(requestData);
        await newRequest.save();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: requestData.faculty_email,
            subject: 'LOR Request Notification',
            text: `A new LOR request has been submitted by ${requestData.name}.`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error){
                console.error(error)
            }else{
                console.log(`Mail sent to : ${info.envelope.to}`)
            }
        });

        res.status(201).json({ message: 'Request submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getRequests = async (req, res) => {
    try {
        const requests = await Request.find();
        res.json(requests);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateRequestStatus = async (req, res) => {
    try {
        const { status } = req.body;
        await Request.findByIdAndUpdate(req.params.id, { status });
        res.json({ message: `Request ${status}` });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
