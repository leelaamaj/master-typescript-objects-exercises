interface CustomerData {
  [key: string]: {
    visits: number
  }
};

let customerData: CustomerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName: string): string {
 const customer=customerData[firstName];if(!customer) return "Welcome! Is this your first time?";if(customer.visits===1)return "Welcome back, "+firstName+"! We're glad you liked us the first time!";return "Welcome back, "+firstName+"! So glad to see you again!";
}
export {};
