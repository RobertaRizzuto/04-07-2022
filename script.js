(function () {
  const studentName = {
    name1: "roberta",
    name2: "luca",
    name3: "richard",
    name4: "marco",
  };

  const studentOrder = {
    number1: 1,
    number2: 2,
    number3: 3,
    number4: 4,
  };

  const studentList = { ...studentName, ...studentOrder };
  console.log(studentList);
  console.log(Object.values(studentList));
  // secondo esercizio

  const classroom = ["A", "B", "C", "D"];

  const studentClass = classroom.map(function (lettera) {
    const studentNick = { ...studentList, lettera };

    studentNick.lettera = lettera;

    return studentNick;
  });

  console.log(studentClass);

  /// Destructuring

  const array = ["nonsocosascrivere", "Lucia", "Lorena", "ignotissimo"].filter(
    (el) => el.length > 10
  );
  console.log(array);
})();


(() => {
  const shop = {
    _products: [
    ],
    get products() {
      return this._products;
    },
    set products(value) {
      this._products = value;
      document.body.innerHTML = `
<ul class="product-list">
<li>Id: ${shop.products[0].id}</li>
<li>Name: ${shop.products[0].name}</li>
<li>Price: ${shop.products[0].price}€</li>
</ul>
<ul class="product-list">
<li>Id: ${shop.products[1].id}</li>
<li>Name: ${shop.products[1].name}</li>
<li>Price: ${shop.products[1].price}€</li>
</ul>

`;
    },
  };

  console.log(shop._products);
  shop.products= [
    { id: 1, name: "TV", price: 40 },
    { id: 2, name: "PC", price: 30 },
  ],
  console.log(shop._products);
})();



