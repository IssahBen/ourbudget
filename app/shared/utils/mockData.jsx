export const mockExpenses = [
  {
    id: "1",
    amount: 45.99,
    merchant: "Grocery Store",
    description: "Weekly groceries",
    date: "2025-07-15",
    category: "Food",
  },
  {
    id: "2",
    amount: 12.5,
    merchant: "Coffee Shop",
    description: "Morning coffee",
    date: "2025-07-14",
    category: "Food",
  },
  {
    id: "3",
    amount: 35.0,
    merchant: "Gas Station",
    description: "Fuel",
    date: "2025-07-12",
    category: "Transportation",
  },
  {
    id: "4",
    amount: 1500.0,
    merchant: "Rent",
    description: "Monthly rent payment",
    date: "2025-07-01",
    category: "Housing",
  },
  {
    id: "5",
    amount: 65.99,
    merchant: "Internet Provider",
    description: "Monthly internet bill",
    date: "2025-07-05",
    category: "Utilities",
  },
  {
    id: "6",
    amount: 120.0,
    merchant: "Movie Theater",
    description: "IMAX tickets and snacks",
    date: "2025-07-08",
    category: "Entertainment",
  },
];

export const mockBudgets = [
  {
    id: "1",
    category: "Food",
    limit: 500.0,
    spent: 320.45,
    endDate: null, // Monthly budget
  },
  {
    id: "2",
    category: "Transportation",
    limit: 200.0,
    spent: 135.5,
    endDate: null,
  },
  {
    id: "3",
    category: "Housing",
    limit: 1800.0,
    spent: 1800.0, // Fully spent
    endDate: null,
  },
  {
    id: "4",
    category: "Entertainment",
    limit: 150.0,
    spent: 142.5, // Almost full
    endDate: null,
  },
  {
    id: "5",
    category: "Utilities",
    limit: 300.0,
    spent: 165.99,
    endDate: null,
  },
  {
    id: "6",
    category: "Shopping",
    limit: 200.0,
    spent: 250.0, // Over budget
    endDate: null,
  },
];

export const mockIncomes = [
  {
    id: "1",
    amount: 4200.0,
    source: "Employer Inc.",
    description: "Monthly salary",
    date: "2025-07-01",
    category: "Salary",
    recurring: true,
  },
  {
    id: "2",
    amount: 850.0,
    source: "Freelance Client",
    description: "Website design project",
    date: "2025-07-10",
    category: "Freelance",
    recurring: false,
  },
  {
    id: "3",
    amount: 200.0,
    source: "Investment Account",
    description: "Dividend payment",
    date: "2025-07-15",
    category: "Investments",
    recurring: false,
  },
];
