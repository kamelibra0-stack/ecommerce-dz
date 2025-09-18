const SHEET_API_URL = 'https://api.sheetbest.com/sheets/693e0e0f-ef44-4df1-84b2-9514f5c17991';

let appData = {
  products: [
    { id: 1, name: 'Produit A', price: 1000, stock: 10 },
    { id: 2, name: 'Produit B', price: 2000, stock: 5 },
  ],
  cart: [],
  orders: []
};

function displayProducts() {
  const productsEl = document.getElementById('products');
  productsEl.innerHTML = '';
  appData.products.forEach(p => {
    const div = document.createElement('div');
    div.innerHTML = `
      <strong>${p.name}</strong> - ${p.price} DA - Stock: ${p.stock}
      <button onclick="addToCart(${p.id})">Ajouter au panier</button>`;
    productsEl.appendChild(div);
  });
}

function addToCart(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product || product.stock <= 0) {
    alert('Produit indisponible');
    return;
  }
  const cartItem = appData.cart.find(c => c.id === productId);
  if (cartItem) cartItem.quantity++;
  else appData.cart.push({ ...product, quantity: 1 });
  alert('Produit ajouté au panier');
  displayCart();
}

function displayCart() {
  const cartItemsEl = document.getElementById('cart-items');
  cartItemsEl.innerHTML = '';
  appData.cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} x ${item.quantity}`;
    cartItemsEl.appendChild(li);
  });
}

function submitOrder() {
  if (appData.cart.length === 0) {
    alert('Votre panier est vide');
    return;
  }
  // Créer la commande
  const order = {
    id: `CMD-${Date.now()}`,
    customer_name: 'Client Test',
    total: appData.cart.reduce((sum, c) => sum + c.price * c.quantity, 0),
    status: 'En attente',
    products: appData.cart,
    created_at: new Date().toISOString().slice(0, 10)
  };
  appData.orders.push(order);

  // Envoyer vers Google Sheets
  fetch(SHEET_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  })
  .then(res => {
    if (res.ok) alert('Commande passée et synchronisée !');
    else alert('Erreur lors de la commande');
  })
  .catch(() => alert('Problème réseau'));

  // Réinitialiser panier
  appData.cart = [];
  displayCart();
}

function refreshOrders() {
  fetch(SHEET_API_URL)
    .then(res => res.json())
    .then(data => {
      appData.orders = data;
      displayOrders();
    })
    .catch(() => alert('Erreur de chargement des commandes'));
}

function displayOrders() {
  const ordersListEl = document.getElementById('orders-list');
  ordersListEl.innerHTML = '';
  appData.orders.forEach(o => {
    const li = document.createElement('li');
    li.textContent = `Commande ${o.id} - Total: ${o.total} DA - Status: ${o.status}`;
    ordersListEl.appendChild(li);
  });
}

document.getElementById('checkout-btn').addEventListener('click', submitOrder);
document.getElementById('refresh-orders-btn').addEventListener('click', refreshOrders);
document.getElementById('admin-toggle').addEventListener('click', () => {
  const adminEl = document.getElementById('admin');
  adminEl.style.display = adminEl.style.display === 'none' ? 'block' : 'none';
  if (adminEl.style.display === 'block') refreshOrders();
});

displayProducts();
displayCart();
