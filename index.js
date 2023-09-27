"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
var CurrencyEnum;
(function (CurrencyEnum) {
    CurrencyEnum[CurrencyEnum["USD"] = 0] = "USD";
    CurrencyEnum[CurrencyEnum["UAH"] = 1] = "UAH";
})(CurrencyEnum || (CurrencyEnum = {}));
class Transaction {
    constructor({ amount, currency }) {
        this.id = +(0, uuid_1.v4)();
        this.amount = amount;
        this.currency = currency;
    }
}
class Card {
    constructor() {
        this.transactions = [];
    }
    // public addTransaction(amount: number, currency: CurrencyEnum) : string ;
    // public addTransaction( transaction :  ITransaction) :number;
    addTransaction(transaction, amount, currency) {
        let ts;
        if (!transaction) {
            ts = new Transaction(transaction);
        }
        else {
            ts = new Transaction({ amount, currency });
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
module.exports = Card;
