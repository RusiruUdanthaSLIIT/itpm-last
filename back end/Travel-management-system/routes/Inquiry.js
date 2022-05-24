const express = require('express');
const router = express.Router();

const Inquiry = require('./../models/Inquiry');

router.post('/add', (req, res) => {  // inserting inquaries

    const inquiry = new Inquiry({
        name : req.body.name,
        nic : req.body.nic,
        phone : req.body.phone,
        email : req.body.email,
        inquiry : req.body.inquiry
    });

    inquiry
    .save()
    .then(() => res.json("Inquiry Added Successfully..."))
    .catch((err) => res.json(err.message));
});

router.get('/view', (req, res) => { // retrieving all data from DB
    Inquiry
    .find()
    .then(response => res.json(response))
    .catch((err) => res.json(err.message));
});

router.get('/view/:id', (req, res) => { // retrieving 1 inquaery data from database
    Inquiry
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => res.json(err.message));
});

router.put('/edit/:id', (req, res) => { // update an inquarie
    Inquiry
    .findById(req.params.id)
    .then(response => {
        response.name = req.body.name,
        response.nic =  req.body.nic,
        response.phone =  req.body.phone,
        response.email =  req.body.email,
        response.inquiry =  req.body.inquiry

        response
        .save()
        .then(() => res.json("Updated Successfully..."))
        .catch((err) => res.json(err.message));
    })
    .catch((err) => res.json(err.message));
});

router.delete('/delete/:id', (req, res) => { // removing an inquary
    Inquiry
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("Inquiry deleted successfully..."))
    .catch((err) => res.json(err.message));
});

module.exports = router;