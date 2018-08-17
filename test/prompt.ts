var inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'checkbox',
      message: 'Select toppings',
      name: 'toppings',
      pageSize: 25,
      choices: [
        new inquirer.Separator(' = The Meats = '),
        {
          name: 'Pepperoni'
        },
        {
          name: 'Ham'
        },
        {
          name: 'Ground Meat'
        },
        {
          name: 'Bacon'
        },
        new inquirer.Separator(' = The Cheeses = '),
        {
          name: 'Mozzarella',
          checked: true
        },
        {
          name: 'Cheddar'
        },
        {
          name: 'Parmesan'
        },
        new inquirer.Separator(' = The usual ='),
        {
          name: 'Mushroom'
        },
        {
          name: 'Tomato'
        },
        new inquirer.Separator(' = The extras = '),
        {
          name: 'Pineapple'
        },
        {
          name: 'Olives',
          disabled: 'out of stock'
        },
        {
          name: 'Extra cheese'
        },
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'},
        {name: 'foo'}
      ],
      validate: function(answer) {
        if (answer.length < 1) {
          return 'You must choose at least one topping.';
        }
        return true;
      }
    }
  ])
  .then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
  });
