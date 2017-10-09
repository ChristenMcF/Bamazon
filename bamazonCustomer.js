var inquirer = require('inquirer');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: '  ',
  database: "Bamazon_db"
})
connection.connect(function(err) {
  if (err) throw err;
  verifyBuy();
});

var verifyBuy = function() {
  connection.query('SELECT * FROM Products', function(err, res) {
    // var Products = new Products({
    // head: ['id', 'product_name', 'department_name', 'price', 'stock_quantity']
    //     });
    // console.log('Items For Sale: ');
    // console.log("======");
    //   for (var i = 0; i < res.length; i++) {
    //     Products.push([res[i].id, res[i].product_name, res[i].department_name, res[i].price.toFixed(2), res[i].stock_quantity]);
    //     }
    console.log("======");
    console.log(res);
      inquirer
      .prompt([{
        name: 'id',
        type: "input",
        message: 'What is the ID of the item you would like to purchase?',
         validate: function(value) {
          if (isNaN(value) == false) {
            return true;
        } else {
            return false;
          }
        }
      }, {
        
        name: 'quantity',
          type: "input",
          message: 'How many would you like to purchase?',
            validate: function(value) {
              if (isNaN(value) == false) {
                return true;
            } else {
                return false;
              }
            }
 }]).then(function(answer) {
  var customerId = answer.id - 1
  var customerProduct = res[customerId]
  var customerQuantity = answer.quantity
    if (customerQuantity < res[customerId].stock_quantity) {
     console.log('Your total for ' + answer.quantity + ' - ' + res[customerId].product_name + 'is: ' + res[customerId].price.toFixed(2) * customerQuantity);
     
      connection.query("UPDATE Products SET ? WHERE ?", [{
      stock_quantity: res[customerId].stock_quantity - customerQuantity
        }, {
         id: res[customerId].id
        }], function(err, res) {
              verifyBuy();
      });

  } else {
    console.log('Insufficiant amount. We have ' + res[customerId].stock_quantity + ' in stock currently.');
      verifyBuy();
    }
 })
})
}

verifyBuy();