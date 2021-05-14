class account {
  id: number;
  name: string;
  balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.balance = balance;
    this.name = name;
  }
}
class savings extends account {
  interest: number = this.balance * 0.05;
}
class current extends savings {
  cashCredit: number = this.balance + 1000;
}

var sav1 = new savings(101, "joey", 100000);
console.log(sav1);
var curr1 = new current(101, "joey", 120000);
console.log(curr1);
