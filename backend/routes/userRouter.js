const express = require("express");
const { signupSchema } = require("../zod");
const { User, Account } = require("../db");
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const JWT_SECRET = require("../config");
const { isLogin } = require("../middleware");

userRouter.get('/', (req, res) => {
    res.send("User route")
})

//signup
userRouter.post('/signup', async (req, res) => {
    const body = req.body
    console.log(body);

    const { success } = signupSchema.safeParse(req.body)

    if (!success) {
        return res.status(411).json({
            msg: "Email already taken || incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username,
    })

    if (existingUser) {
        return res.status(411).json({
            msg: "user already registered"
        })
    }

    const user = await User.create(body)
    const userId = user._id;

    //create new account
    const account = await Account.create({
        userId,
        balance:1 + Math.random() * 10000
    })

    //jwt token
    const token = jwt.sign({
        userId
    }, JWT_SECRET)

    res.json({
        msg: "User created successfully",
        token: token
    })
})

//signin
userRouter.post('/signin', async (req, res) => {
    const body = req.body;
    // console.log(body)
    const user = await User.findOne(body)
    // console.log(user);

    if (!user) {
        return res.status(411).json({
            msg: "user not registered"
        })
    }
    const userId = user._id;
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        const token = jwt.sign({
            userId
        }, JWT_SECRET)

        res.json({
            msg: "User signedIn successfully",
            token: token
        })
    } else {
        res.json({
            msg: "User signedIn successfully",
            token: authHeader
        })
    }


})

//update
userRouter.put('/', isLogin, async (req, res) => {
    const body = req.body;
    const userId = req.userId;
    const updated_user = await User.findByIdAndUpdate(userId, body)


    if (!updated_user) {
        res.status(500).json({
            msg: "There was an error while updating"
        })
    } else {
        res.status(201).json({
            msg: "User updated successfully",
            Id: userId,
        })
    }
})

//all users
userRouter.get('/bulk',async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [
            {
                firstName: {
                    "$regex": filter
                }
            }, {
                firstName: {
                    "$regex": filter
                }
            }
        ]
    })

    res.json({
        users:users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }))
    })
})

module.exports = userRouter