const fs = require("fs");
const express = require("express");

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE");

  next();
});

app.get("/products", (req, res) => {
  let body = [];

  try {
    const rawProduct = fs.readFileSync("./data/products.json");
    const products = JSON.parse(rawProduct);

    const values = Object.values(req.query);
    const firstValue = values[0];

    const keys = Object.keys(req.query);
    const firstKey = keys[0];

    if (firstValue !== undefined) {
      const queryProduct = firstValue.toLowerCase();

      products.forEach((product) => {
        const productName = product[firstKey].toLowerCase();
        if (productName.includes(queryProduct)) {
          body.push(product);
        }
      });
    } else {
      body = products;
    }
  } catch (e) {
    body = { error: "SOMETHING WENT WRONG" };
  }

  res.send(body);
});

app.patch("/products/:id", (req, res) => {
  const id = req.params.id;
  const { quantity } = req.body;

  const rawProduct = fs.readFileSync("./data/products.json");
  const products = JSON.parse(rawProduct);

  let productToUpdate = null;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      productToUpdate = products[i];
    }
  }

  if (productToUpdate) {
    productToUpdate.quantity -= quantity;

    fs.writeFileSync("./data/products.json", JSON.stringify(products));

    res.json({ message: "product quantity updated" });
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

app.listen(3100, () => {
  console.log("Example app listening on port 3100!");
});
