"use strict";
const { v4 } = require("uuid");
var CurrencyEnum;
(function (CurrencyEnum) {
    CurrencyEnum[CurrencyEnum["USD"] = 0] = "USD";
    CurrencyEnum[CurrencyEnum["UAH"] = 1] = "UAH";
})(CurrencyEnum || (CurrencyEnum = {}));
class Transaction {
    constructor({ amount, currency }) {
        this.id = +v4();
        this.amount = amount;
        this.currency = currency;
    }
}
class Card {
    constructor() {
        this.transactions = [];
    }
    addTransaction(arg1, arg2, arg3) {
        let ts;
        if (typeof arg1 === 'number' && arg2 !== undefined) {
            ts = new Transaction({ amount: arg1, currency: arg2 });
        }
        else if (typeof arg1 !== 'number' && arg2 === undefined) {
            ts = new Transaction(arg1);
        }
        else {
            throw Error("error happened");
        }
        this.transactions.push(ts);
        return ts.id;
    }
    getTransaction(id) {
        return this.transactions.find(el => el.id === id);
    }
    getBalance(currency) {
        return this.transactions.reduce((a, b) => b.currency === currency ? a + b.amount : a, 0);
    }
}
module.exports = {
    Card
};
