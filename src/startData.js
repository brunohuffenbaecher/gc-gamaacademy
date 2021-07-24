const clientList = [
  {
    name: "Robson Santos",
    email: "rob@email.com",
    phone: "11985698544",
    address: "229 2nd St, New York",
  },
  {
    name: "Angel Crystal",
    email: "ag@email.com",
    phone: "11985698322",
    address: "Updown Road 23, Kansas",
  },
  {
    name: "Solenidad Estran",
    email: "solomas@email.com",
    phone: "119856977744",
    address: "911 Last Hope Boulevard, Miami",
  },
  {
    name: "Kid Little",
    email: "notakid@email.com",
    phone: "11745698544",
    address: "Behind that road House 5, Atlanta",
  },
];

const productsList = [
  {
    name: "Essential package",
    description:
      "Even basics should be luxurious. Included standard meals and spacious seats",
    price: 2.374,
    stock: 20,
  },
  {
    name: "Deluxe package",
    description:
      "Travel with style. Private cabins and special menu. Pickup included.",
    price: 3.799,
    stock: 17,
  },
  {
    name: "Exclusive package",
    description:
      "You are unique. And so is this package. Everything included, only the best",
    price: 5.374,
    stock: 5,
  },
];

function loadData() {
  let temp = [];

  temp = JSON.parse(localStorage.getItem("clients"));

  if (temp === null) {
    localStorage.setItem("clients", JSON.stringify(clientList));
  }

  temp = JSON.parse(localStorage.getItem("products"));

  if (temp === null) {
    localStorage.setItem("products", JSON.stringify(productsList));
  }
}

export { loadData };
