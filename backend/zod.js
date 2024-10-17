const zod = require('zod');

const signupSchema = zod.object({
    username: zod
        .string()
        .min(3, { message: "Username must be at least 3 characters long" })
        .max(30, { message: "Username must be at most 30 characters long" })
        .trim()
        .transform((val) => val.toLowerCase()),

    password: zod
        .string()
        .min(6, { message: "Password must be at least 6 characters long" }),

    firstName: zod
        .string()
        .max(50, { message: "First name must be at most 50 characters long" })
        .trim(),

    lastName: zod
        .string()
        .max(50, { message: "Last name must be at most 50 characters long" })
        .trim()
})

module.exports = { signupSchema }