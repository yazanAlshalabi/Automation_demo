export const ids = {
  // Login
  username: '#user-name',
  password: '#password',
  loginButton: '#login-button',
  errorMessage: '[data-test=\"error\"]',

  // Common
  title: '.title',
  cartLink: '.shopping_cart_link',
  cartBadge: '.shopping_cart_badge',
  menuButton: '#react-burger-menu-btn',
  logoutLink: '#logout_sidebar_link',

  // Inventory
  inventoryItem: '.inventory_item',
  addToCartButtonText: 'text=Add to cart',
  removeButtonText: 'text=Remove',
  sortSelect: '[data-test=\"product-sort-container\"]',

  // Cart
  cartItem: '.cart_item',
  checkoutButton: '[data-test=\"checkout\"]',

  // Checkout Step One
  firstName: '[data-test=\"firstName\"]',
  lastName: '[data-test=\"lastName\"]',
  postalCode: '[data-test=\"postalCode\"]',
  continueButton: '[data-test=\"continue\"]',

  // Checkout Step Two
  finishButton: '[data-test=\"finish\"]',
  summaryTotal: '.summary_total_label',

  // Complete
  completeHeader: '.complete-header'
} as const;