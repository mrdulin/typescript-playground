interface IBudget {
  amount: number;
  name: string;
}

class Budget {
  private state: IBudget = {
    name: '',
    amount: 0
  };
  constructor(budget: IBudget) {
    this.state = Object.assign(this.state, budget);
  }
}
