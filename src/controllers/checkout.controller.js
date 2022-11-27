import {
  stockCollection,
  checkoutCollection,
  cartCollection,
} from "../database/db.js";

export async function CloseOrder(req, res) {
  const { email, cpf, cardNumber, order, price } = req.body;
  let orderSerial = [];

  for (let i = 0; i < order.length; i++) {
    let item = order[i].serial;
    orderSerial.push(item);
  }

  try {
    await checkoutCollection.insertOne({
      email,
      cpf,
      cardNumber,
      order,
      price,
    });

    for (let i = 0; i < orderSerial.length; i++) {
      let item = orderSerial[i];
      await stockCollection.deleteOne({ serial: item });
    }

    await cartCollection.drop();
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
