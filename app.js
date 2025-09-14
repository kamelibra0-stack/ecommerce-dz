// E-Commerce Application JavaScript with Enhanced Features

// Application Data with complete 58 wilayas
const appData = {
  wilayas: [
    {"id": 1, "name_fr": "Adrar", "name_ar": "أدرار", "code": "01", "shipping_cost": 1400, "communes": ["Adrar", "Tamest", "Charouine", "Reggane", "In Zghmir", "Tit", "Ksar Kaddour", "Tsabit", "Timimoun", "Ouled Saïd", "Zaouiet Kounta", "Aoulef", "Timekten", "Tamentit", "Fenoughil", "Tamantit", "Sali", "Akabli", "Metarfa", "Ouled Ahmed Timmi", "Bouda", "Aougrout", "Deldoul", "Sebaa", "Ouled Aissa", "Talmine", "Bordj Badji Mokhtar", "Timiaouine"]},
    {"id": 2, "name_fr": "Chlef", "name_ar": "الشلف", "code": "02", "shipping_cost": 850, "communes": ["Chlef", "Ténès", "Benairia", "El Karimia", "Tadjena", "Taougrite", "Beni Haoua", "Sobha", "Harchoun", "Ouled Fares", "Sendi", "Zeboudja", "Oued Goussine", "Dahra", "Ouled Abbes", "Boukadir", "Beni Rached", "Talassa", "Herenfa", "Labiod Medjadja", "El Marsa", "Chettia", "Sidi Akkacha", "Bouzeghaia", "Abou El Hassen", "El Hadjadj", "Moussadek", "El Abdellaoui", "Breira", "Sendjas", "Ouled Ben Abdelkader", "Oum Drou", "Beni Bouateb", "Ain Merane", "Oued Sidi Brahim"]},
    {"id": 3, "name_fr": "Laghouat", "name_ar": "الأغواط", "code": "03", "shipping_cost": 1000, "communes": ["Laghouat", "Ksar El Hirane", "Bennasser Benchohra", "Sidi Makhlouf", "Hassi Delaa", "Hassi R'Mel", "Ain Madhi", "Tadjmout", "Kheneg", "Gueltat Sidi Saad", "El Assafia", "Aflou", "El Ghicha", "Brida", "Sebgag", "Taouiala", "Tadjrouna", "Ain Sidi Ali", "Beidha", "El Haouaita", "Sidi Bouzid", "El Houamed", "Hadj Mechri", "Oued Morra"]},
    {"id": 4, "name_fr": "Oum El Bouaghi", "name_ar": "أم البواقي", "code": "04", "shipping_cost": 900, "communes": ["Oum El Bouaghi", "Ain Beida", "Ain M'lila", "Behir Chergui", "El Amiria", "Sigus", "El Belkhir", "Ain Babouche", "Berriche", "Ouled Hamla", "Dhala", "Ain Kercha", "Hanchir Toumghani", "El Djazia", "Ain Diss", "Fkirina", "Souk Naamane", "Zorg", "El Fedjoudj", "Ouled Zouai", "Bir Chouhada", "Ksar Sbahi", "Oued Nini", "Ain Fakroun", "Rahbat", "Ouled Gacem", "El Harmilia", "Meshta El Arbi", "Ain Zitoun"]},
    {"id": 5, "name_fr": "Batna", "name_ar": "باتنة", "code": "05", "shipping_cost": 900, "communes": ["Batna", "Ghassira", "Maafa", "Merouana", "Seriana", "Menaa", "El Madher", "Tazoult", "N'Gaous", "Guigba", "Inoughissen", "Ouyoun El Assafir", "Djerma", "Bitam", "Abdelkader", "Arris", "Kimmel", "Tilatou", "Ain Djasser", "Ouled Sellam", "Tigherghar", "Ain Yagout", "Fesdis", "Sefiane", "Rahbat", "Tighanimine", "Lemsane", "Ksar Bellezma", "Seggana", "Ichmoul", "Foum Toub", "Beni Foudhala El Hakania", "Oued El Ma", "Talkhamt", "Bouzina", "Chemora", "Oued Chaaba", "Taxlent", "Gosbat", "Ouled Aouf", "Boumagueur", "Barika", "Djezzar", "T'kout", "Ain Touta", "Hidoussa", "Teniet El Abed", "Oued Taga", "Ouled Si Slimane", "Zanet El Beida", "M'doukal", "Ouled Fadel", "Timgad", "Ras El Aioun", "Chir", "Ouled Ammar", "El Hassi", "Lazrou", "Boumia", "Boulhilat"]},
    {"id": 16, "name_fr": "Alger", "name_ar": "الجزائر", "code": "16", "shipping_cost": 400, "communes": ["Alger Centre", "Sidi M'Hamed", "El Madania", "Hamma El Annasser", "Bab El Oued", "Bologhine", "Casbah", "Oued Koriche", "Bir Mourad Rais", "El Biar", "Bouzareah", "Birkhadem", "El Harrach", "Baraki", "Oued Smar", "Bourouba", "Hussein Dey", "Kouba", "Bachdjerah", "Dar El Beida", "Bab Ezzouar", "Ben Aknoun", "Dely Ibrahim", "Hammamet", "Rais Hamidou", "Djasr Kasentina", "El Mouradia", "Hydra", "Mohammadia", "Bordj El Kiffan", "El Magharia", "Beni Messous", "Les Eucalyptus", "Birtouta", "Tessala El Merdja", "Ouled Chebel", "Sidi Moussa", "Ain Taya", "Bordj El Bahri", "Marsa", "Heraoua", "Rouiba", "Reghaia", "Ain Benian", "Staoueli", "Zeralda", "Mahelma", "Rahmania", "Souidania", "Cheraga", "Ouled Fayet", "El Achour", "Draria", "Douera", "Baba Hassen", "Khraicia", "Saoula"]},
    {"id": 31, "name_fr": "Oran", "name_ar": "وهران", "code": "31", "shipping_cost": 600, "communes": ["Oran", "Gdyel", "Bir El Djir", "Hassi Bounif", "Es Senia", "Arzew", "Bethioua", "Marsat El Hadjadj", "Ain El Turk", "El Ancar", "Oued Tlelat", "Tafraoui", "Sidi Chami", "Boufatis", "Mers El Kebir", "Bousfer", "El Karma", "Ben Freha", "Hassi Ben Okba", "Hassi Mefsoukh", "Sidi Ben Yabka", "Ain El Kerma", "Ain Franin", "El Braya", "Nourdjiss", "Boutlelis"]},
    {"id": 49, "name_fr": "Timimoun", "name_ar": "تيميمون", "code": "49", "shipping_cost": 1600, "communes": ["Timimoun", "Ouled Saïd", "Tinerkouk", "Deldoul", "Charouine", "Aougrout", "Ksar Kaddour", "Metarfa", "Tamentit", "Kali"]},
    {"id": 50, "name_fr": "Bordj Badji Mokhtar", "name_ar": "برج باجي مختار", "code": "50", "shipping_cost": 2000, "communes": ["Bordj Badji Mokhtar", "Timiaouine"]},
    {"id": 51, "name_fr": "Ouled Djellal", "name_ar": "أولاد جلال", "code": "51", "shipping_cost": 1200, "communes": ["Ouled Djellal", "Sidi Khaled", "Ras El Miaad", "Doucen", "Chaiba", "Messaad"]},
    {"id": 52, "name_fr": "Béni Abbès", "name_ar": "بني عباس", "code": "52", "shipping_cost": 1800, "communes": ["Béni Abbès", "Tabelbala", "El Ouata", "Kerzaz", "Timoudi", "Ouled Khoudir", "Ksabi", "Tamtert", "Beni Ikhlef", "Mellah"]},
    {"id": 53, "name_fr": "In Salah", "name_ar": "عين صالح", "code": "53", "shipping_cost": 1900, "communes": ["In Salah", "In Ghar", "Foggaret Ezzoua"]},
    {"id": 54, "name_fr": "In Guezzam", "name_ar": "عين قزام", "code": "54", "shipping_cost": 2200, "communes": ["In Guezzam", "Tin Zaouatine"]},
    {"id": 55, "name_fr": "Touggourt", "name_ar": "تقرت", "code": "55", "shipping_cost": 1300, "communes": ["Touggourt", "Tebesbest", "Nezla", "El Allia", "Bellida", "Sidi Slimane", "Zaouia El Abidia", "Taibet", "Mnaguer", "Blidat Amor", "Megarine", "Temacine", "Bender Rigua"]},
    {"id": 56, "name_fr": "Djanet", "name_ar": "جانت", "code": "56", "shipping_cost": 2100, "communes": ["Djanet", "Bordj El Houasse"]},
    {"id": 57, "name_fr": "El M'Ghair", "name_ar": "المغير", "code": "57", "shipping_cost": 1400, "communes": ["El M'Ghair", "Djamaa", "Sidi Amrane", "Still", "Oum Touyour", "Tenedla", "Merara", "Sidi Khellil"]},
    {"id": 58, "name_fr": "El Meniaa", "name_ar": "المنيعة", "code": "58", "shipping_cost": 1500, "communes": ["El Meniaa", "Hassi Gara", "Hassi Fehal"]}
  ],
  products: [
    {
      "id": 1,
      "name_fr": "Smartphone Samsung Galaxy A54",
      "name_ar": "هاتف سامسونج جالاكسي أ54",
      "price": 45000,
      "discount": 10,
      "category": "Électronique",
      "description_fr": "Smartphone Samsung Galaxy A54 5G avec écran Super AMOLED 6.4 pouces, processeur Exynos 1380, appareil photo 50MP, batterie 5000mAh et stockage 128GB.",
      "description_ar": "هاتف سامسونج جالاكسي أ54 5جي بشاشة سوبر أموليد 6.4 بوصة، معالج إكسينوس 1380، كاميرا 50 ميجابكسل، بطارية 5000 مللي أمبير وذاكرة 128 جيجابايت.",
      "images": [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop"
      ],
      "stock": 25,
      "colors": [
        {"id": "black", "name_fr": "Noir", "name_ar": "أسود", "hex": "#000000", "stock": 10, "price_adjustment": 0},
        {"id": "white", "name_fr": "Blanc", "name_ar": "أبيض", "hex": "#FFFFFF", "stock": 8, "price_adjustment": 0},
        {"id": "blue", "name_fr": "Bleu", "name_ar": "أزرق", "hex": "#1E3A8A", "stock": 7, "price_adjustment": 500}
      ]
    },
    {
      "id": 2,
      "name_fr": "Laptop Lenovo IdeaPad 3",
      "name_ar": "حاسوب محمول لينوفو آيديا باد 3",
      "price": 85000,
      "discount": 15,
      "category": "Informatique",
      "description_fr": "Ordinateur portable Lenovo IdeaPad 3 avec processeur Intel Core i5, 8GB RAM, SSD 256GB, écran 15.6 pouces Full HD et carte graphique intégrée.",
      "description_ar": "حاسوب محمول لينوفو آيديا باد 3 بمعالج إنتل كور آي5، رام 8 جيجابايت، قرص صلب إس إس دي 256 جيجابايت، شاشة 15.6 بوصة فول أتش دي وكارت رسوميات مدمج.",
      "images": [
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop"
      ],
      "stock": 15,
      "colors": [
        {"id": "silver", "name_fr": "Argent", "name_ar": "فضي", "hex": "#C0C0C0", "stock": 8, "price_adjustment": 0},
        {"id": "black", "name_fr": "Noir", "name_ar": "أسود", "hex": "#000000", "stock": 7, "price_adjustment": 0}
      ]
    },
    {
      "id": 3,
      "name_fr": "Montre connectée Apple Watch SE",
      "name_ar": "ساعة آبل ووتش إس إي",
      "price": 32000,
      "discount": 0,
      "category": "Électronique",
      "description_fr": "Apple Watch SE avec GPS, écran Retina 40mm, suivi de l'activité, notifications intelligentes, résistante à l'eau jusqu'à 50 mètres.",
      "description_ar": "ساعة آبل ووتش إس إي مع جي بي إس، شاشة ريتنا 40 مم، تتبع النشاط، إشعارات ذكية، مقاومة للماء حتى 50 متر.",
      "images": [
        "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop"
      ],
      "stock": 30,
      "colors": [
        {"id": "midnight", "name_fr": "Minuit", "name_ar": "منتصف الليل", "hex": "#1D1D1F", "stock": 12, "price_adjustment": 0},
        {"id": "starlight", "name_fr": "Lumière stellaire", "name_ar": "ضوء النجوم", "hex": "#F9F6E8", "stock": 10, "price_adjustment": 0},
        {"id": "silver", "name_fr": "Argent", "name_ar": "فضي", "hex": "#E3E4E6", "stock": 8, "price_adjustment": 0}
      ]
    }
  ],
  orders: [
    {"id": "CMD001", "customer_name": "Ahmed Benali", "phone": "0555123456", "wilaya": "Alger", "commune": "Bab Ezzouar", "products": [{"id": 1, "name": "Smartphone Samsung Galaxy A54", "price": 45000, "quantity": 1, "color": "Noir"}], "shipping_cost": 400, "total": 45400, "status": "confirmée", "date": "2024-09-01"},
    {"id": "CMD002", "customer_name": "Fatima Kadi", "phone": "0666789012", "wilaya": "Oran", "commune": "Es Senia", "products": [{"id": 2, "name": "Laptop Lenovo IdeaPad 3", "price": 85000, "quantity": 1, "color": "Argent"}], "shipping_cost": 600, "total": 85600, "status": "en attente", "date": "2024-09-03"},
    {"id": "CMD003", "customer_name": "Omar Meziani", "phone": "0777345678", "wilaya": "Timimoun", "commune": "Timimoun", "products": [{"id": 3, "name": "Montre Apple Watch SE", "price": 32000, "quantity": 2, "color": "Minuit"}], "shipping_cost": 1600, "total": 65600, "status": "expédiée", "date": "2024-08-30"}
  ],
  settings: {
    logo: null,
    default_logo: "E-Commerce DZ"
  }
};

// Application State
const appState = {
  currentLanguage: 'fr',
  currentPage: 'home',
  selectedProduct: null,
  selectedColor: null,
  cart: [],
  currentOrderItems: [],
  selectedWilaya: null,
  selectedCommune: null,
  shippingCost: 0,
  currentAdminTab: 'dashboard',
  editingProduct: null,
  pendingAction: null,
  pendingProductId: null,
  pendingQuantity: null
};

// Utility Functions
function formatPrice(price) {
  return new Intl.NumberFormat('fr-DZ', {
    style: 'currency',
    currency: 'DZD',
    minimumFractionDigits: 0
  }).format(price).replace('DZD', 'DA');
}

function calculateDiscountedPrice(price, discount) {
  return price - (price * discount / 100);
}

function generateOrderId() {
  return 'CMD' + String(appData.orders.length + 1).padStart(3, '0');
}

function getTranslatedText(element) {
  const lang = appState.currentLanguage;
  const key = `data-${lang}`;
  return element.getAttribute(key) || element.textContent;
}

// Language Management
function toggleLanguage() {
  appState.currentLanguage = appState.currentLanguage === 'fr' ? 'ar' : 'fr';
  updateLanguageDisplay();
  renderCurrentPage();
}

function updateLanguageDisplay() {
  const elements = document.querySelectorAll('[data-fr][data-ar]');
  elements.forEach(element => {
    const text = getTranslatedText(element);
    element.textContent = text;
  });

  document.documentElement.dir = appState.currentLanguage === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = appState.currentLanguage;

  const langToggle = document.getElementById('langToggle');
  langToggle.textContent = appState.currentLanguage === 'fr' ? 'عربي' : 'Français';
}

// Logo Management
function initLogoManagement() {
  const logoUploadArea = document.getElementById('logoUploadArea');
  const logoInput = document.getElementById('logoInput');
  const saveLogo = document.getElementById('saveLogo');
  const resetLogo = document.getElementById('resetLogo');

  if (!logoUploadArea || !logoInput || !saveLogo || !resetLogo) return;

  // Click to select file
  logoUploadArea.addEventListener('click', () => logoInput.click());

  // Drag and drop
  logoUploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    logoUploadArea.classList.add('dragover');
  });

  logoUploadArea.addEventListener('dragleave', () => {
    logoUploadArea.classList.remove('dragover');
  });

  logoUploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    logoUploadArea.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if (files.length > 0) handleLogoFile(files[0]);
  });

  // File input change
  logoInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) handleLogoFile(e.target.files[0]);
  });

  // Save logo
  saveLogo.addEventListener('click', saveCurrentLogo);

  // Reset logo
  resetLogo.addEventListener('click', resetToDefaultLogo);
}

function handleLogoFile(file) {
  if (file.size > 2 * 1024 * 1024) {
    alert('Le fichier est trop volumineux. Taille maximale: 2MB');
    return;
  }

  const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml'];
  if (!validTypes.includes(file.type)) {
    alert('Format non supporté. Utilisez PNG, JPG, JPEG ou SVG');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    updateLogoPreview(dataUrl);
    const saveBtn = document.getElementById('saveLogo');
    if (saveBtn) saveBtn.disabled = false;
  };
  reader.readAsDataURL(file);
}

function updateLogoPreview(logoData) {
  const previewText = document.getElementById('previewLogoText');
  const previewImage = document.getElementById('previewLogoImage');

  if (!previewText || !previewImage) return;

  if (logoData) {
    previewText.classList.add('hidden');
    previewImage.classList.remove('hidden');
    previewImage.src = logoData;
  } else {
    previewText.classList.remove('hidden');
    previewImage.classList.add('hidden');
    previewText.textContent = appData.settings.default_logo;
  }
}

function saveCurrentLogo() {
  const previewImage = document.getElementById('previewLogoImage');
  if (previewImage && !previewImage.classList.contains('hidden')) {
    appData.settings.logo = previewImage.src;
    updateHeaderLogo();
    const saveBtn = document.getElementById('saveLogo');
    if (saveBtn) saveBtn.disabled = true;
    alert('Logo sauvegardé avec succès!');
  }
}

function resetToDefaultLogo() {
  appData.settings.logo = null;
  updateLogoPreview(null);
  updateHeaderLogo();
  const saveBtn = document.getElementById('saveLogo');
  if (saveBtn) saveBtn.disabled = true;
  alert('Logo restauré par défaut');
}

function updateHeaderLogo() {
  const logoText = document.getElementById('logoText');
  const logoImage = document.getElementById('logoImage');

  if (!logoText || !logoImage) return;

  if (appData.settings.logo) {
    logoText.classList.add('hidden');
    logoImage.classList.remove('hidden');
    logoImage.src = appData.settings.logo;
  } else {
    logoText.classList.remove('hidden');
    logoImage.classList.add('hidden');
    logoText.textContent = appData.settings.default_logo;
  }
}

// Navigation
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
    appState.currentPage = pageId.replace('Page', '');
  }
}

function renderCurrentPage() {
  switch(appState.currentPage) {
    case 'home':
      renderHomePage();
      break;
    case 'product':
      renderProductPage();
      break;
    case 'cart':
      renderCartPage();
      break;
    case 'order':
      renderOrderPage();
      break;
    case 'adminPanel':
      renderAdminPanel();
      break;
  }
}

// Home Page
function renderHomePage() {
  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;
  
  productsGrid.innerHTML = '';

  appData.products.forEach(product => {
    const discountedPrice = calculateDiscountedPrice(product.price, product.discount);
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.style.cursor = 'pointer';
    
    // Add click event listener
    productCard.addEventListener('click', () => viewProduct(product.id));

    const lang = appState.currentLanguage;
    const name = lang === 'ar' ? product.name_ar : product.name_fr;

    productCard.innerHTML = `
      <img src="${product.images[0]}" alt="${name}" class="product-image">
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h3 class="product-name">${name}</h3>
        <div class="product-price">
          <span class="price-current">${formatPrice(discountedPrice)}</span>
          ${product.discount > 0 ? `
            <span class="price-original">${formatPrice(product.price)}</span>
            <span class="discount-badge">-${product.discount}%</span>
          ` : ''}
        </div>
        ${product.colors && product.colors.length > 0 ? `
          <div class="product-colors">
            <span>${lang === 'ar' ? 'الألوان:' : 'Couleurs:'}</span>
            <div class="color-preview">
              ${product.colors.slice(0, 3).map(color => `
                <div class="color-dot" style="background-color: ${color.hex}" title="${lang === 'ar' ? color.name_ar : color.name_fr}"></div>
              `).join('')}
              ${product.colors.length > 3 ? `<span>+${product.colors.length - 3}</span>` : ''}
            </div>
          </div>
        ` : ''}
      </div>
    `;

    productsGrid.appendChild(productCard);
  });
}

// Product Detail Page
function viewProduct(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;

  appState.selectedProduct = product;
  appState.selectedColor = null;
  showPage('productPage');
  renderProductPage();
}

function renderProductPage() {
  const product = appState.selectedProduct;
  if (!product) return;

  const productDetail = document.getElementById('productDetail');
  if (!productDetail) return;

  const lang = appState.currentLanguage;
  const name = lang === 'ar' ? product.name_ar : product.name_fr;
  const description = lang === 'ar' ? product.description_ar : product.description_fr;
  const basePrice = calculateDiscountedPrice(product.price, product.discount);

  productDetail.innerHTML = `
    <div class="product-images">
      <img src="${product.images[0]}" alt="${name}" class="main-image" id="mainImage">
      <div class="thumbnail-images">
        ${product.images.map((img, index) => `
          <img src="${img}" alt="${name}" class="thumbnail ${index === 0 ? 'active' : ''}" 
               data-src="${img}">
        `).join('')}
      </div>
    </div>
    <div class="product-details">
      <div class="product-category">${product.category}</div>
      <h1>${name}</h1>
      <div class="product-price">
        <span class="price-current" id="currentPrice">${formatPrice(basePrice)}</span>
        ${product.discount > 0 ? `
          <span class="price-original">${formatPrice(product.price)}</span>
          <span class="discount-badge">-${product.discount}%</span>
        ` : ''}
      </div>
      <p class="product-description">${description}</p>
      
      ${product.colors && product.colors.length > 0 ? `
        <div class="color-selection">
          <h4>${lang === 'ar' ? 'اختر اللون:' : 'Sélectionner une couleur:'} <span style="color: var(--color-error);">*</span></h4>
          <div class="color-options" id="colorOptions">
            ${product.colors.map(color => `
              <div class="color-option" data-color-id="${color.id}">
                <div class="color-circle" style="background-color: ${color.hex}"></div>
                <div class="color-name">${lang === 'ar' ? color.name_ar : color.name_fr}</div>
                <div class="color-stock">${lang === 'ar' ? 'المخزون:' : 'Stock:'} ${color.stock}</div>
                ${color.price_adjustment !== 0 ? `
                  <div class="color-price-adj">${color.price_adjustment > 0 ? '+' : ''}${formatPrice(color.price_adjustment)}</div>
                ` : ''}
              </div>
            `).join('')}
          </div>
          <div id="colorWarning" class="color-required-warning" style="display: none;">
            ${lang === 'ar' ? 'يرجى اختيار لون قبل إضافة المنتج للسلة' : 'Veuillez sélectionner une couleur avant d\'ajouter au panier'}
          </div>
        </div>
      ` : ''}
      
      <div class="product-actions">
        <button class="btn btn--outline" id="addToCartBtn">
          ${lang === 'ar' ? 'أضف للسلة' : 'Ajouter au panier'}
        </button>
        <button class="btn btn--primary" id="buyNowBtn">
          ${lang === 'ar' ? 'اشتري الآن' : 'Acheter maintenant'}
        </button>
      </div>
    </div>
  `;

  // Add event listeners
  const addToCartBtn = document.getElementById('addToCartBtn');
  const buyNowBtn = document.getElementById('buyNowBtn');
  
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => handleProductAction('addToCart', product.id));
  }
  
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => handleProductAction('buyNow', product.id));
  }
  
  document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      changeMainImage(this.dataset.src, this);
    });
  });

  // Color selection listeners
  if (product.colors && product.colors.length > 0) {
    document.querySelectorAll('.color-option').forEach(option => {
      option.addEventListener('click', function() {
        selectColor(this.dataset.colorId);
      });
    });
  }
}

function selectColor(colorId) {
  const product = appState.selectedProduct;
  const color = product.colors.find(c => c.id === colorId);
  if (!color) return;

  appState.selectedColor = color;

  // Update UI
  document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
  const selectedOption = document.querySelector(`[data-color-id="${colorId}"]`);
  if (selectedOption) selectedOption.classList.add('selected');

  // Update price
  const basePrice = calculateDiscountedPrice(product.price, product.discount);
  const finalPrice = basePrice + color.price_adjustment;
  const priceElement = document.getElementById('currentPrice');
  if (priceElement) priceElement.textContent = formatPrice(finalPrice);

  // Hide warning
  const warningElement = document.getElementById('colorWarning');
  if (warningElement) warningElement.style.display = 'none';
}

function handleProductAction(action, productId, quantity = 1) {
  const product = appData.products.find(p => p.id === productId);
  
  // Check if color selection is required
  if (product.colors && product.colors.length > 0 && !appState.selectedColor) {
    const warningElement = document.getElementById('colorWarning');
    if (warningElement) warningElement.style.display = 'block';
    return;
  }

  if (action === 'addToCart') {
    addToCart(productId, quantity);
  } else if (action === 'buyNow') {
    buyNow(productId, quantity);
  }
}

function changeMainImage(src, thumbnail) {
  const mainImage = document.getElementById('mainImage');
  if (mainImage) mainImage.src = src;
  
  document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
  thumbnail.classList.add('active');
}

// Cart Management
function addToCart(productId, quantity = 1) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;

  const selectedColor = appState.selectedColor;
  const colorInfo = selectedColor ? {
    id: selectedColor.id,
    name_fr: selectedColor.name_fr,
    name_ar: selectedColor.name_ar,
    hex: selectedColor.hex,
    price_adjustment: selectedColor.price_adjustment
  } : null;

  const basePrice = calculateDiscountedPrice(product.price, product.discount);
  const finalPrice = basePrice + (selectedColor ? selectedColor.price_adjustment : 0);

  const cartItemKey = `${productId}_${selectedColor ? selectedColor.id : 'default'}`;
  const existingItem = appState.cart.find(item => item.cartKey === cartItemKey);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    appState.cart.push({
      cartKey: cartItemKey,
      id: productId,
      name: appState.currentLanguage === 'ar' ? product.name_ar : product.name_fr,
      price: finalPrice,
      image: product.images[0],
      quantity: quantity,
      color: colorInfo
    });
  }

  updateCartCount();
  
  const lang = appState.currentLanguage;
  alert(lang === 'ar' ? 'تم إضافة المنتج للسلة' : 'Produit ajouté au panier');
}

function buyNow(productId, quantity = 1) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;

  const selectedColor = appState.selectedColor;
  const colorInfo = selectedColor ? {
    id: selectedColor.id,
    name_fr: selectedColor.name_fr,
    name_ar: selectedColor.name_ar,
    hex: selectedColor.hex,
    price_adjustment: selectedColor.price_adjustment
  } : null;

  const basePrice = calculateDiscountedPrice(product.price, product.discount);
  const finalPrice = basePrice + (selectedColor ? selectedColor.price_adjustment : 0);

  appState.currentOrderItems = [{
    id: productId,
    name: appState.currentLanguage === 'ar' ? product.name_ar : product.name_fr,
    price: finalPrice,
    quantity: quantity,
    color: colorInfo
  }];

  showPage('orderPage');
  renderOrderPage();
}

function updateCartCount() {
  const count = appState.cart.reduce((total, item) => total + item.quantity, 0);
  const cartCountElement = document.querySelector('.cart-count');
  if (cartCountElement) cartCountElement.textContent = count;
}

function showCart() {
  showPage('cartPage');
  renderCartPage();
}

function renderCartPage() {
  const cartContent = document.getElementById('cartContent');
  const cartSummary = document.getElementById('cartSummary');

  if (!cartContent || !cartSummary) return;

  if (appState.cart.length === 0) {
    cartContent.innerHTML = `
      <div class="empty-state">
        <h3>${appState.currentLanguage === 'ar' ? 'السلة فارغة' : 'Panier vide'}</h3>
        <p>${appState.currentLanguage === 'ar' ? 'لم تقم بإضافة أي منتجات بعد' : 'Vous n\'avez pas encore ajouté de produits'}</p>
      </div>
    `;
    cartSummary.innerHTML = '';
    return;
  }

  const lang = appState.currentLanguage;

  cartContent.innerHTML = appState.cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-info">
        <h4 class="cart-item-name">${item.name}</h4>
        ${item.color ? `
          <div class="cart-item-color">
            <div class="color-dot" style="background-color: ${item.color.hex}"></div>
            <span>${lang === 'ar' ? item.color.name_ar : item.color.name_fr}</span>
          </div>
        ` : ''}
        <div class="cart-item-price">${formatPrice(item.price)}</div>
      </div>
      <div class="quantity-controls">
        <button class="quantity-btn" data-action="decrease" data-key="${item.cartKey}">-</button>
        <input type="number" class="quantity-input" value="${item.quantity}" 
               data-key="${item.cartKey}" min="1">
        <button class="quantity-btn" data-action="increase" data-key="${item.cartKey}">+</button>
      </div>
      <button class="remove-item" data-key="${item.cartKey}">&times;</button>
    </div>
  `).join('');

  // Add event listeners
  document.querySelectorAll('.quantity-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const key = this.dataset.key;
      const item = appState.cart.find(item => item.cartKey === key);
      if (item) {
        if (this.dataset.action === 'increase') {
          updateCartQuantity(key, item.quantity + 1);
        } else {
          updateCartQuantity(key, item.quantity - 1);
        }
      }
    });
  });

  document.querySelectorAll('.quantity-input').forEach(input => {
    input.addEventListener('change', function() {
      const key = this.dataset.key;
      updateCartQuantity(key, parseInt(this.value));
    });
  });

  document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', function() {
      const key = this.dataset.key;
      removeFromCart(key);
    });
  });

  // Render cart summary
  const subtotal = appState.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  cartSummary.innerHTML = `
    <div class="summary-row">
      <span>${appState.currentLanguage === 'ar' ? 'المجموع الفرعي' : 'Sous-total'}</span>
      <span>${formatPrice(subtotal)}</span>
    </div>
    <button class="btn btn--primary btn--full-width" id="checkoutBtn">
      ${appState.currentLanguage === 'ar' ? 'متابعة الطلب' : 'Passer la commande'}
    </button>
  `;

  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', proceedToCheckout);
  }
}

function updateCartQuantity(cartKey, newQuantity) {
  if (newQuantity < 1) {
    removeFromCart(cartKey);
    return;
  }

  const item = appState.cart.find(item => item.cartKey === cartKey);
  if (item) {
    item.quantity = parseInt(newQuantity);
    updateCartCount();
    renderCartPage();
  }
}

function removeFromCart(cartKey) {
  appState.cart = appState.cart.filter(item => item.cartKey !== cartKey);
  updateCartCount();
  renderCartPage();
}

function proceedToCheckout() {
  appState.currentOrderItems = [...appState.cart];
  showPage('orderPage');
  renderOrderPage();
}

// Order Page
function renderOrderPage() {
  populateWilayaSelect();
  updateOrderSummary();
}

function populateWilayaSelect() {
  const wilayaSelect = document.getElementById('wilayaSelect');
  if (!wilayaSelect) return;
  
  const lang = appState.currentLanguage;
  
  wilayaSelect.innerHTML = `
    <option value="">${lang === 'ar' ? 'اختر ولاية' : 'Sélectionner une wilaya'}</option>
    ${appData.wilayas.map(wilaya => `
      <option value="${wilaya.id}" data-shipping="${wilaya.shipping_cost}">
        ${lang === 'ar' ? wilaya.name_ar : wilaya.name_fr}
      </option>
    `).join('')}
  `;
}

function onWilayaChange() {
  const wilayaSelect = document.getElementById('wilayaSelect');
  const communeSelect = document.getElementById('communeSelect');
  
  if (!wilayaSelect || !communeSelect) return;
  
  const selectedWilayaId = parseInt(wilayaSelect.value);
  const selectedWilaya = appData.wilayas.find(w => w.id === selectedWilayaId);
  
  if (selectedWilaya) {
    appState.selectedWilaya = selectedWilaya;
    appState.shippingCost = selectedWilaya.shipping_cost;
    
    communeSelect.innerHTML = `
      <option value="">${appState.currentLanguage === 'ar' ? 'اختر بلدية' : 'Sélectionner une commune'}</option>
      ${selectedWilaya.communes.map(commune => `
        <option value="${commune}">${commune}</option>
      `).join('')}
    `;
    communeSelect.disabled = false;
    
    updateShippingInfo();
    updateOrderSummary();
  } else {
    communeSelect.innerHTML = `<option value="">${appState.currentLanguage === 'ar' ? 'اختر الولاية أولا' : 'Sélectionner d\'abord une wilaya'}</option>`;
    communeSelect.disabled = true;
    appState.shippingCost = 0;
    updateShippingInfo();
    updateOrderSummary();
  }
}

function updateShippingInfo() {
  const shippingInfo = document.getElementById('shippingInfo');
  if (!shippingInfo) return;
  
  if (appState.shippingCost > 0) {
    shippingInfo.innerHTML = `
      <h4>${appState.currentLanguage === 'ar' ? 'تكلفة التوصيل' : 'Frais de livraison'}</h4>
      <p><strong>${formatPrice(appState.shippingCost)}</strong></p>
    `;
  } else {
    shippingInfo.innerHTML = '';
  }
}

function updateOrderSummary() {
  const orderSummary = document.getElementById('orderSummary');
  if (!orderSummary) return;
  
  if (appState.currentOrderItems.length === 0) return;
  
  const subtotal = appState.currentOrderItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const total = subtotal + appState.shippingCost;
  
  orderSummary.innerHTML = `
    <h4>${appState.currentLanguage === 'ar' ? 'ملخص الطلب' : 'Résumé de la commande'}</h4>
    <div class="summary-row">
      <span>${appState.currentLanguage === 'ar' ? 'المجموع الفرعي' : 'Sous-total'}</span>
      <span>${formatPrice(subtotal)}</span>
    </div>
    <div class="summary-row">
      <span>${appState.currentLanguage === 'ar' ? 'التوصيل' : 'Livraison'}</span>
      <span>${formatPrice(appState.shippingCost)}</span>
    </div>
    <div class="summary-row total">
      <span>${appState.currentLanguage === 'ar' ? 'المجموع الإجمالي' : 'Total'}</span>
      <span>${formatPrice(total)}</span>
    </div>
  `;
}

function submitOrder(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const orderData = {
    id: generateOrderId(),
    customer_name: `${formData.get('firstName')} ${formData.get('lastName')}`,
    phone: formData.get('phone'),
    wilaya: appState.selectedWilaya ? appState.selectedWilaya.name_fr : '',
    commune: formData.get('commune'),
    products: appState.currentOrderItems.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      color: item.color ? (appState.currentLanguage === 'ar' ? item.color.name_ar : item.color.name_fr) : null
    })),
    shipping_cost: appState.shippingCost,
    total: appState.currentOrderItems.reduce((total, item) => total + (item.price * item.quantity), 0) + appState.shippingCost,
    status: 'en attente',
    date: new Date().toISOString().split('T')[0]
  };
  
  appData.orders.push(orderData);
  
  if (appState.cart.length > 0 && appState.currentOrderItems.length > 0) {
    appState.cart = [];
    updateCartCount();
  }
  
  showOrderConfirmation(orderData);
}

function showOrderConfirmation(orderData) {
  const modal = document.getElementById('orderModal');
  const orderDetails = document.getElementById('orderDetails');
  
  if (!modal || !orderDetails) return;
  
  orderDetails.innerHTML = `
    <p><strong>${appState.currentLanguage === 'ar' ? 'رقم الطلب' : 'Numéro de commande'}:</strong> ${orderData.id}</p>
    <p><strong>${appState.currentLanguage === 'ar' ? 'المجموع الإجمالي' : 'Total'}:</strong> ${formatPrice(orderData.total)}</p>
  `;
  
  modal.classList.remove('hidden');
}

// Admin Panel
function showAdmin() {
  showPage('adminPanel');
  appState.currentPage = 'adminPanel';
  renderAdminPanel();
}

function renderAdminPanel() {
  renderDashboard();
  renderOrdersTable();
  renderProductsTable();
  renderShippingSettings();
  updateLogoPreview(appData.settings.logo);
}

function renderDashboard() {
  const totalRevenue = appData.orders.reduce((sum, order) => sum + order.total, 0);
  const totalOrders = appData.orders.length;
  const pendingOrders = appData.orders.filter(order => order.status === 'en attente').length;
  const confirmedOrders = appData.orders.filter(order => order.status === 'confirmée').length;
  
  const totalRevenueEl = document.getElementById('totalRevenue');
  const totalOrdersEl = document.getElementById('totalOrders');
  const pendingOrdersEl = document.getElementById('pendingOrders');
  const confirmedOrdersEl = document.getElementById('confirmedOrders');
  
  if (totalRevenueEl) totalRevenueEl.textContent = formatPrice(totalRevenue);
  if (totalOrdersEl) totalOrdersEl.textContent = totalOrders;
  if (pendingOrdersEl) pendingOrdersEl.textContent = pendingOrders;
  if (confirmedOrdersEl) confirmedOrdersEl.textContent = confirmedOrders;
  
  renderRevenueChart();
  renderOrdersChart();
}

function renderRevenueChart() {
  const ctx = document.getElementById('revenueChart');
  if (!ctx) return;
  
  const monthlyRevenue = {};
  appData.orders.forEach(order => {
    const month = order.date.substring(0, 7);
    monthlyRevenue[month] = (monthlyRevenue[month] || 0) + order.total;
  });
  
  const labels = Object.keys(monthlyRevenue).sort();
  const data = labels.map(month => monthlyRevenue[month]);
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Chiffre d\'affaires (DA)',
        data: data,
        borderColor: '#1FB8CD',
        backgroundColor: 'rgba(31, 184, 205, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return formatPrice(value);
            }
          }
        }
      }
    }
  });
}

function renderOrdersChart() {
  const ctx = document.getElementById('ordersChart');
  if (!ctx) return;
  
  const statusCounts = {};
  const statuses = ['en attente', 'confirmée', 'expédiée', 'livrée', 'annulée', 'retour'];
  
  statuses.forEach(status => {
    statusCounts[status] = appData.orders.filter(order => order.status === status).length;
  });
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(statusCounts),
      datasets: [{
        label: 'Nombre de commandes',
        data: Object.values(statusCounts),
        backgroundColor: ['#FFC185', '#1FB8CD', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
}

function renderOrdersTable() {
  const ordersTable = document.getElementById('ordersTable');
  if (!ordersTable) return;
  
  ordersTable.innerHTML = `
    <div class="data-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Client</th>
            <th>Téléphone</th>
            <th>Wilaya</th>
            <th>Total</th>
            <th>Statut</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${appData.orders.map(order => `
            <tr>
              <td>${order.id}</td>
              <td>${order.customer_name}</td>
              <td>${order.phone}</td>
              <td>${order.wilaya}</td>
              <td>${formatPrice(order.total)}</td>
              <td><span class="status-badge status-${order.status.replace(' ', '')}">${order.status}</span></td>
              <td>${new Date(order.date).toLocaleDateString('fr-FR')}</td>
              <td>
                <select data-order-id="${order.id}" class="form-control status-select" style="width: auto;">
                  <option value="en attente" ${order.status === 'en attente' ? 'selected' : ''}>En attente</option>
                  <option value="confirmée" ${order.status === 'confirmée' ? 'selected' : ''}>Confirmée</option>
                  <option value="expédiée" ${order.status === 'expédiée' ? 'selected' : ''}>Expédiée</option>
                  <option value="livrée" ${order.status === 'livrée' ? 'selected' : ''}>Livrée</option>
                  <option value="annulée" ${order.status === 'annulée' ? 'selected' : ''}>Annulée</option>
                  <option value="retour" ${order.status === 'retour' ? 'selected' : ''}>Retour</option>
                </select>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  document.querySelectorAll('.status-select').forEach(select => {
    select.addEventListener('change', function() {
      updateOrderStatus(this.dataset.orderId, this.value);
    });
  });
}

function renderProductsTable() {
  const productsTable = document.getElementById('productsTable');
  if (!productsTable) return;
  
  productsTable.innerHTML = `
    <div class="data-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prix</th>
            <th>Réduction</th>
            <th>Catégorie</th>
            <th>Couleurs</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${appData.products.map(product => `
            <tr>
              <td>${product.id}</td>
              <td>${product.name_fr}</td>
              <td>${formatPrice(product.price)}</td>
              <td>${product.discount}%</td>
              <td>${product.category}</td>
              <td>
                ${product.colors ? `
                  <div style="display: flex; gap: 4px;">
                    ${product.colors.slice(0, 3).map(color => `
                      <div class="color-dot" style="background-color: ${color.hex}" title="${color.name_fr}"></div>
                    `).join('')}
                    ${product.colors.length > 3 ? `<span>+${product.colors.length - 3}</span>` : ''}
                  </div>
                ` : 'Aucune'}
              </td>
              <td>${product.stock}</td>
              <td>
                <div class="action-buttons">
                  <button class="btn btn--outline btn--sm edit-product" data-id="${product.id}">Modifier</button>
                  <button class="btn btn--outline btn--sm delete-product" data-id="${product.id}" style="color: var(--color-error);">Supprimer</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  document.querySelectorAll('.edit-product').forEach(btn => {
    btn.addEventListener('click', function() {
      editProduct(parseInt(this.dataset.id));
    });
  });

  document.querySelectorAll('.delete-product').forEach(btn => {
    btn.addEventListener('click', function() {
      deleteProduct(parseInt(this.dataset.id));
    });
  });
}

function renderShippingSettings() {
  const shippingSettings = document.getElementById('shippingSettings');
  if (!shippingSettings) return;
  
  shippingSettings.innerHTML = appData.wilayas.map(wilaya => `
    <div class="shipping-row">
      <span>${wilaya.name_fr} (${wilaya.name_ar})</span>
      <input type="number" value="${wilaya.shipping_cost}" 
             data-wilaya-id="${wilaya.id}"
             class="form-control shipping-cost-input">
    </div>
  `).join('');

  document.querySelectorAll('.shipping-cost-input').forEach(input => {
    input.addEventListener('change', function() {
      updateShippingCost(parseInt(this.dataset.wilayaId), this.value);
    });
  });
}

function switchAdminTab(tabName) {
  document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
  if (activeTab) activeTab.classList.add('active');
  
  document.querySelectorAll('.admin-content').forEach(content => {
    content.classList.remove('active');
  });
  const activeContent = document.getElementById(`${tabName}Tab`);
  if (activeContent) activeContent.classList.add('active');
  
  appState.currentAdminTab = tabName;
}

function updateOrderStatus(orderId, newStatus) {
  const order = appData.orders.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    renderDashboard();
    renderOrdersTable();
  }
}

function updateShippingCost(wilayaId, newCost) {
  const wilaya = appData.wilayas.find(w => w.id === wilayaId);
  if (wilaya) {
    wilaya.shipping_cost = parseInt(newCost);
  }
}

function editProduct(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (product) {
    appState.editingProduct = product;
    showProductModal(product);
  }
}

function deleteProduct(productId) {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
    appData.products = appData.products.filter(p => p.id !== productId);
    renderProductsTable();
    renderHomePage();
  }
}

function showProductModal(product = null) {
  const modal = document.getElementById('productModal');
  const form = document.getElementById('productForm');
  const title = document.getElementById('productModalTitle');
  
  if (!modal || !form || !title) return;
  
  title.textContent = product ? 'Modifier le produit' : 'Ajouter un produit';
  
  if (product) {
    form.name_fr.value = product.name_fr;
    form.name_ar.value = product.name_ar;
    form.price.value = product.price;
    form.discount.value = product.discount;
    form.category.value = product.category;
    form.description_fr.value = product.description_fr;
    form.description_ar.value = product.description_ar;
    form.stock.value = product.stock;
    
    // Load colors
    loadProductColors(product.colors || []);
  } else {
    form.reset();
    loadProductColors([]);
  }
  
  modal.classList.remove('hidden');
}

function loadProductColors(colors) {
  const container = document.getElementById('colorsContainer');
  if (!container) return;
  
  container.innerHTML = '';
  
  if (colors.length === 0) {
    addColorRow();
  } else {
    colors.forEach(color => addColorRow(color));
  }
}

function addColorRow(color = null) {
  const container = document.getElementById('colorsContainer');
  if (!container) return;
  
  const colorItem = document.createElement('div');
  colorItem.className = 'color-item';
  
  colorItem.innerHTML = `
    <div class="color-inputs">
      <input type="text" placeholder="Nom français" name="color_name_fr[]" class="form-control color-name" value="${color ? color.name_fr : ''}">
      <input type="text" placeholder="Nom arabe" name="color_name_ar[]" class="form-control color-name" value="${color ? color.name_ar : ''}">
      <input type="color" name="color_hex[]" class="form-control color-picker" value="${color ? color.hex : '#000000'}">
      <input type="number" placeholder="Stock" name="color_stock[]" class="form-control color-stock" min="0" value="${color ? color.stock : 0}">
      <input type="number" placeholder="Ajustement prix" name="color_price_adj[]" class="form-control color-price" value="${color ? color.price_adjustment : 0}">
      <button type="button" class="btn btn--outline btn--sm remove-color">×</button>
    </div>
  `;
  
  container.appendChild(colorItem);
  
  // Add remove functionality
  colorItem.querySelector('.remove-color').addEventListener('click', () => {
    if (container.children.length > 1) {
      colorItem.remove();
    }
  });
}

function submitProductForm(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  
  // Collect colors
  const colors = [];
  const colorNamesFr = formData.getAll('color_name_fr[]');
  const colorNamesAr = formData.getAll('color_name_ar[]');
  const colorHexes = formData.getAll('color_hex[]');
  const colorStocks = formData.getAll('color_stock[]');
  const colorPriceAdjs = formData.getAll('color_price_adj[]');
  
  for (let i = 0; i < colorNamesFr.length; i++) {
    if (colorNamesFr[i].trim()) {
      colors.push({
        id: colorNamesFr[i].toLowerCase().replace(/\s+/g, '_'),
        name_fr: colorNamesFr[i],
        name_ar: colorNamesAr[i],
        hex: colorHexes[i],
        stock: parseInt(colorStocks[i]) || 0,
        price_adjustment: parseInt(colorPriceAdjs[i]) || 0
      });
    }
  }
  
  const productData = {
    id: appState.editingProduct ? appState.editingProduct.id : (Math.max(...appData.products.map(p => p.id)) + 1),
    name_fr: formData.get('name_fr'),
    name_ar: formData.get('name_ar'),
    price: parseInt(formData.get('price')),
    discount: parseInt(formData.get('discount')),
    category: formData.get('category'),
    description_fr: formData.get('description_fr'),
    description_ar: formData.get('description_ar'),
    stock: parseInt(formData.get('stock')),
    colors: colors,
    images: appState.editingProduct ? appState.editingProduct.images : [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop"
    ]
  };
  
  if (appState.editingProduct) {
    const index = appData.products.findIndex(p => p.id === appState.editingProduct.id);
    appData.products[index] = productData;
  } else {
    appData.products.push(productData);
  }
  
  hideProductModal();
  renderProductsTable();
  renderHomePage();
}

function hideProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) modal.classList.add('hidden');
  appState.editingProduct = null;
}

// Event Listeners Setup
document.addEventListener('DOMContentLoaded', function() {
  // Initialize logo management
  initLogoManagement();
  
  // Language toggle
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }
  
  // Navigation buttons
  const cartBtn = document.getElementById('cartBtn');
  if (cartBtn) {
    cartBtn.addEventListener('click', showCart);
  }
  
  const adminBtn = document.getElementById('adminBtn');
  if (adminBtn) {
    adminBtn.addEventListener('click', showAdmin);
  }
  
  // Back buttons
  const backToHome = document.getElementById('backToHome');
  if (backToHome) {
    backToHome.addEventListener('click', () => {
      showPage('homePage');
      appState.currentPage = 'home';
    });
  }
  
  const backFromCart = document.getElementById('backFromCart');
  if (backFromCart) {
    backFromCart.addEventListener('click', () => {
      showPage('homePage');
      appState.currentPage = 'home';
    });
  }
  
  const backFromOrder = document.getElementById('backFromOrder');
  if (backFromOrder) {
    backFromOrder.addEventListener('click', () => {
      if (appState.cart.length > 0) {
        showCart();
      } else {
        showPage('homePage');
        appState.currentPage = 'home';
      }
    });
  }
  
  const backToClient = document.getElementById('backToClient');
  if (backToClient) {
    backToClient.addEventListener('click', () => {
      showPage('homePage');
      appState.currentPage = 'home';
    });
  }
  
  // Form submissions
  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', submitOrder);
  }
  
  const productForm = document.getElementById('productForm');
  if (productForm) {
    productForm.addEventListener('submit', submitProductForm);
  }
  
  // Modal controls
  const closeOrderModal = document.getElementById('closeOrderModal');
  if (closeOrderModal) {
    closeOrderModal.addEventListener('click', () => {
      const modal = document.getElementById('orderModal');
      if (modal) modal.classList.add('hidden');
      showPage('homePage');
      appState.currentPage = 'home';
    });
  }
  
  const closeProductModal = document.getElementById('closeProductModal');
  if (closeProductModal) {
    closeProductModal.addEventListener('click', hideProductModal);
  }
  
  const cancelProductForm = document.getElementById('cancelProductForm');
  if (cancelProductForm) {
    cancelProductForm.addEventListener('click', hideProductModal);
  }
  
  const addProductBtn = document.getElementById('addProductBtn');
  if (addProductBtn) {
    addProductBtn.addEventListener('click', () => showProductModal());
  }
  
  // Color management
  const addColorBtn = document.getElementById('addColorBtn');
  if (addColorBtn) {
    addColorBtn.addEventListener('click', () => addColorRow());
  }
  
  // Admin tabs
  document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      switchAdminTab(tab.dataset.tab);
    });
  });
  
  // Wilaya selection
  const wilayaSelect = document.getElementById('wilayaSelect');
  if (wilayaSelect) {
    wilayaSelect.addEventListener('change', onWilayaChange);
  }
  
  // Status filter
  const statusFilter = document.getElementById('statusFilter');
  if (statusFilter) {
    statusFilter.addEventListener('change', function() {
      renderOrdersTable();
    });
  }
  
  // Initialize the application
  renderHomePage();
  updateLanguageDisplay();
  updateHeaderLogo();
});