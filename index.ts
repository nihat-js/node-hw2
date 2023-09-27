const { v4 } = require("uuid")

enum CurrencyEnum {
  USD,
  UAH
}

interface ITransaction {
  amount: number
  currency: CurrencyEnum
}
interface ITransactionWithId extends ITransaction {
  id: number,
}

class Transaction {
  id: number
  amount: number
  currency: CurrencyEnum

  constructor({ amount, currency }: ITransaction) {
    this.id = +v4()
    this.amount = amount
    this.currency = currency

  }
}

class Card {
  transactions: ITransactionWithId[]

  constructor() {
    this.transactions = []
  }


  public addTransaction(amount: number, currency: CurrencyEnum): number;
  public addTransaction(transaction: ITransaction): number;
  public addTransaction(arg1: number | ITransaction, arg2?: CurrencyEnum, arg3?: number): number {
    let ts;

    if (typeof arg1 === 'number' && arg2 !== undefined) {
      ts = new Transaction({ amount: arg1, currency: arg2 });
    } else if (typeof arg1 !== 'number' && arg2 === undefined) {
      ts = new Transaction(arg1);
    } else {
      throw Error("error happened")
    }

    this.transactions.push(ts);
    return ts.id;
  }



  getTransaction(id: number) {
    return this.transactions.find(el => el.id === id)
  }
  getBalance(currency: CurrencyEnum) {
    return this.transactions.reduce((a, b) => b.currency === currency ? a + b.amount : a, 0)
  }
}

module.exports = {
  Card
}
