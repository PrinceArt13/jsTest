fetch('https://raw.githubusercontent.com/jakiichu/data/main/data.json')
  .then(response => response.json())
  .then(data => {
    const { address, person, productsOrder } = data;
    const { city, street, house } = address;
    const { lastName, firstName } = person;
    const { count, product } = productsOrder;
    const { name } = product

    console.log('Город: ' + city + ' Улица: ' + street + ' Дом: ' + house);
    console.log(lastName + ' ' + firstName + ' купил ' + count + ' штук товаров ' + name);
  })