export async function patchProd(product) {
  url = `http://localhost:3100/products/${product.id}`;

  const newQty = {
    quantity: product.quantity,
  };

  const options = {
    method: "PATCH",
    body: JSON.stringify(newQty),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

export async function postNewCustomer(customerDetails) {
  const url =
    "https://gassed-api-practice-default-rtdb.europe-west1.firebasedatabase.app/customer.json";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customerDetails),
  };

  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
}
