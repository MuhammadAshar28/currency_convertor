#! /usr/bin/env node

import inquirer from "inquirer"

const currency :any = {
    USE: 1,  //Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let user_answer = await inquirer.prompt(
  
    [
        {
         
          name:'from',
          message: "Enter from currency",
          type:"list",
          choices:['USD','EUR','GBP','IND','PKR']
         
    },
        
{
             
              name:'to',
              message: "Enter to currency",
              type:"list",
              choices:['USD','EUR','GBP','IND','PKR']
             
        },
        
            {
             
              name:'amount',
              message: "Enter your amount",
              type:"number",
              
             
        },


    ]
)
//console.log(user_answer);
let userFromCurrency = user_answer.from
let userToCurrency =user_answer.to
let fromAmount = currency[userFromCurrency]
let toAmount = currency[userToCurrency]
//let fromAmount = currency[user_answer.from]
//let toAmount = currency[user_answer.to]
let amount =user_answer.amount
let baseAmount = amount / fromAmount //USE base currency  // 4 doller
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);
