import joi from "joi";

const checkoutSchema = joi.object({
  email: joi
    .string()
    .email({ tlds: { allow: ["com", "net"] } })
    .min(3)
    .required(),
  cpf: joi.number().required(),
  cardName: joi.string().min(3).required(),
  cardNumber: joi.number().min(3).required(),
  securityNumber: joi.number().min(3).required(),
  expirationDate: joi.string().required(),
  order: joi.array().required(),
  price: joi.number().required(),
});

export default checkoutSchema;
