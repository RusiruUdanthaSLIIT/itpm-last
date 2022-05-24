const router = require("express").Router();

const User = require('../models/Register');

// User add route (creating user to DB)
router.post('/add', (req, res) => {
    const user = new User({
        Name : req.body.name,
        Email : req.body.email,
        Password : req.body.password,
        Num : req.body.phone
    });

    user
    .save()
    .then(() => res.json("User Added Successfully..."))
    .catch((err) => res.json(err.message));
});

// users view route
router.get('/view', (req, res) => {
    User
    .find()
    .then(response => res.json(response))
    .catch((err) => res.json(err.message));
});

// user view route
router.get('/view/:id', (req, res) => {

    User

    .findById(req.params.id)

    .then(response => res.json(response))

    .catch((err) => res.json(err.message));

})

// user loging route
router.post('/log', async(req, res) => {
    try{
        const user = await User.findOne({ Email: req.body.email }) ; // search user by email

        if(!user) {
            return res.send({message: "Invalid Email"}) // cheking a valid user
        }else if(user.Password != req.body.password) {
            return res.send({message: "Invalid Password "}) // checking password is correct
        }else{
            return res.send({ data: user._id, message: "logged in successfully" })
        }
    }catch(err){

    }
   // return res.send(user);
});

router.put('/edit/:id', (req, res) => {
    User
    .findById(req.params.id)
    .then((response) => {
        response.Name = req.body.Name,
        response.Email =  req.body.Email,
        response.Password =  req.body.Password,
        response.Num =  req.body.Num

        response
        .save()
        .then(() => res.json("User Updated Successfully..."))
        .catch((err) => res.json(err.message));
    })
    .catch((err) => res.json(err.message));
});

router.delete('/delete/:id', (req, res) => {
    User
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted successfully..."))
    .catch((err) => resjson(err.message));
});

module.exports = router;