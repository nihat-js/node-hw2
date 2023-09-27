"use strict";
const { Card } = require("./index");
let card = new Card();
card.addTransaction({ amount: 100, currency: "USD" });
card.addTransaction({ amount: 500, currency: "USD" });
card.addTransaction({ amount: 360, currency: "UAH" });
card.addTransaction({ amount: 140, currency: "UAH" });
card.addTransaction({ amount: 600, currency: "UAH" });
console.log(card.getBalance("USD"));
