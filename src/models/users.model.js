import joi from "joi";

const userSchema = joi.object({
  name: joi.string().min(3).required(),
  email: joi
    .string()
    .email({ tlds: { allow: ["com", "net"] } })
    .min(3)
    .required(),
  password: joi.string().min(6).required(),
  repeat_password: joi.ref("password"),
});

export default userSchema;
