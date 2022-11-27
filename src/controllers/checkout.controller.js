
export async function CloseOrder(req, res) {


    //delete na stockCollection (do serial dos produtos escolhidos)
}

/*
[
  {
    "_id": "6380fe395eaf65d57aacffff",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oU4Sf-xRWkn3erlk6HhGXG-8uqv4PWlYWA&usqp=CAU",
    "description": "Blusa Azul",
    "serial": "1001",
    "value": 10
  },
  {
    "_id": "6380fe3a5eaf65d57aad0000",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oU4Sf-xRWkn3erlk6HhGXG-8uqv4PWlYWA&usqp=CAU",
    "description": "Blusa Azul",
    "serial": "1001",
    "value": 10
  }
*/

/*
Checkout: deve ser possível o cliente concluir a compra (porém não é necessário utilizar nenhum serviço de pagamento, pode só dar a compra como concluída e salvar no banco a venda realizada, contendo os dados de pagamento do usuário e dos produtos comprados.)
Importante: Não salvem dados sensíveis. Então, ao invés de salvar no banco os dados de um cartão, salvem apenas que o usuário escolheu pagar com cartão. 
*/