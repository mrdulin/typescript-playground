interface Accountable{
  getIncome(): number;
}

class Firm implements Accountable{
  getIncome(): number {
    return 2222;
  }
}

class Individual implements Accountable{
  getIncome(): number{
    return 3333;
  }
}

/**
 * [ts]
  Class 'FxxkZxm' incorrectly implements interface 'Accountable'.
  Property 'getIncome' is missing in type 'FxxkZxm'.
 */
class FxxkZxm implements Accountable{
  
}
