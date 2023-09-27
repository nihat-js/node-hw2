import { v4 } from "uuid"

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

class Transaction   {
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


  // public addTransaction(amount: number, currency: CurrencyEnum) : string ;
  // public addTransaction( transaction :  ITransaction) :number;
  public addTransaction( transaction : ITransaction, amount : number ,currency : number) : number {
    let ts
    if (!transaction){
      ts = new Transaction(transaction) 
    }else{
      ts = new  Transaction({amount,currency}) 
    }
    this.transactions.push(ts)
    return ts.id    

  }


  getTransaction(id: number) {
    return this.transactions.find(el => el.id === id)
  }
  getBalance(currency : CurrencyEnum){
    return this.transactions.reduce((a,b) => b.currency === currency  ? a + b.amount  : a,0)
  }
}

module.exports = Card
