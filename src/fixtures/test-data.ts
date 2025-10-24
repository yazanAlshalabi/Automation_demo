export const Users = {
  valid: { username: 'standard_user', password: 'secret_sauce' },
  locked: { username: 'locked_out_user', password: 'secret_sauce' },
  problem: { username: 'problem_user', password: 'secret_sauce' }
} as const;

export const Checkout = {
  firstName: 'John',
  lastName: 'Doe',
  postalCode: '90210'
} as const;