let matchingCustomer = {};

export async function useAuth(customerEmail, customerPassword) {
  try {
    const data = await getCustomerInfo();
    const customersArray = Object.values(data);

    matchingCustomer = customersArray.find((customer) => {
      return (
        customer.email === customerEmail &&
        customer.password === customerPassword
      );
    });
    return matchingCustomer;
  } catch (error) {
    console.error("Error fetching customer data:", error);
    throw error;
  }
}

export function customerLogginIn() {
  return matchingCustomer;
}

async function getCustomerInfo() {
  const apiUrl =
    "https://gassed-api-practice-default-rtdb.europe-west1.firebasedatabase.app/customer.json";

  const res = await fetch(apiUrl);

  if (!res.ok) {
    throw new Error("Failed to fetch customer information");
  }

  const data = await res.json();
  return data;
}
