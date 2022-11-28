import checkoutSchema from "../models/checkout.model.js";

export function checkoutValidation(req, res, next) {
  const checkout = req.body;

  const { error } = checkoutSchema.validate(checkout, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    console.log(checkout);
    console.log(errors);
    return res.status(400).send(errors);
  }

  res.locals.user = checkout;

  next();
}
