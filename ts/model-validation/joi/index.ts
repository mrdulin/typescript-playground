import { Budget } from './models/Budget';

function test() {
  const budget = new Budget({ name: 'typescript', budgetId: 1 as any });
  if (!budget.isValid()) {
    return console.error(budget.getValidationError());
  }
  console.log('budget: ', budget);
}

test();
