// Application Data with full dataset
const appData = {
  "wilayas": [
    {"id": 1, "name_fr": "Adrar", "name_ar": "أدرار", "code": "01", "shipping_cost": 500, "communes": ["Adrar", "Tamest", "Charouine", "Reggane", "In Salah"]},
    {"id": 2, "name_fr": "Chlef", "name_ar": "الشلف", "code": "02", "shipping_cost": 400, "communes": ["Chlef", "Tenes", "Benairia", "El Karimia", "Tadjena"]},
    {"id": 3, "name_fr": "Laghouat", "name_ar": "الأغواط", "code": "03", "shipping_cost": 450, "communes": ["Laghouat", "Aflou", "Ksar El Hirane", "Bennasser Benchohra", "Sidi Makhlouf"]},
    {"id": 4, "name_fr": "Oum El Bouaghi", "name_ar": "أم البواقي", "code": "04", "shipping_cost": 400, "communes": ["Oum El Bouaghi", "Ain Beida", "Ain M'Lila", "Behir Chergui", "El Amiria"]},
    {"id": 5, "name_fr": "Batna", "name_ar": "باتنة", "code": "05", "shipping_cost": 400, "communes": ["Batna", "Barika", "Arris", "Biskra", "Merouana"]},
    {"id": 6, "name_fr": "Béjaïa", "name_ar": "بجاية", "code": "06", "shipping_cost": 350, "communes": ["Béjaïa", "Akbou", "El Kseur", "Sidi Aich", "Amizour"]},
    {"id": 16, "name_fr": "Alger", "name_ar": "الجزائر", "code": "16", "shipping_cost": 250, "communes": ["Alger Centre", "Sidi M'Hamed", "El Madania", "Bab El Oued", "Bologhine", "Casbah", "El Harrach", "Baraki", "Hussein Dey", "Kouba", "Bachdjerrah", "Dar El Beida", "Bab Ezzouar"]},
    {"id": 25, "name_fr": "Constantine", "name_ar": "قسنطينة", "code": "25", "shipping_cost": 350, "communes": ["Constantine", "Hamma Bouziane", "Didouche Mourad", "El Khroub", "Ain Abid", "Ibn Ziad"]},
    {"id": 31, "name_fr": "Oran", "name_ar": "وهران", "code": "31", "shipping_cost": 400, "communes": ["Oran", "Gdyel", "Bir El Djir", "Hassi Bounif", "Es Senia", "Arzew", "Bethioua", "Ain El Turck"]},
    {"id": 19, "name_fr": "Sétif", "name_ar": "سطيف", "code": "19", "shipping_cost": 350, "communes": ["Sétif", "El Eulma", "Bougaa", "Ain Oulmene", "Djemila"]}
  ],
  "products": [
    {
      "id": 1,
      "name_fr": "Smartphone Galaxy Ultra",
      "name_ar": "هاتف ذكي جالاكسي ألترا",
      "description_fr": "Smartphone dernière génération avec écran AMOLED 6.8 pouces, appareil photo 108MP, 5G, et batterie longue durée de 5000mAh. Parfait pour les professionnels et les amateurs de technologie qui exigent performance et qualité.",
      "description_ar": "هاتف ذكي بأحدث جيل مع شاشة AMOLED 6.8 بوصة، كاميرا 108 ميجابكسل، 5G، وبطارية طويلة المدى 5000 مللي أمبير. مثالي للمحترفين وعشاق التكنولوجيا الذين يتطلبون الأداء والجودة.",
      "price": 85000,
      "promotion": 15,
      "colors": ["Noir", "Blanc", "Bleu", "Rose"],
      "colors_ar": ["أسود", "أبيض", "أزرق", "وردي"],
      "images": [
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop"
      ],
      "category": "Électronique",
      "category_ar": "إلكترونيات",
      "stock": 25,
      "featured": true
    },
    {
      "id": 2,
      "name_fr": "Laptop Gaming Pro",
      "name_ar": "لابتوب للألعاب برو",
      "description_fr": "Ordinateur portable gaming haute performance équipé d'un processeur Intel i7 dernière génération, carte graphique RTX 3080, 32GB RAM DDR4, SSD NVMe 1TB. Écran 15.6 pouces 144Hz pour une expérience gaming exceptionnelle.",
      "description_ar": "كمبيوتر محمول للألعاب عالي الأداء مجهز بمعالج Intel i7 من الجيل الأحدث، كارت رسوميات RTX 3080، ذاكرة وصول عشوائي 32GB DDR4، قرص صلب SSD NVMe 1TB. شاشة 15.6 بوصة 144Hz لتجربة ألعاب استثنائية.",
      "price": 195000,
      "promotion": 10,
      "colors": ["Noir Gaming", "Rouge Gaming"],
      "colors_ar": ["أسود للألعاب", "أحمر للألعاب"],
      "images": [
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=500&h=500&fit=crop"
      ],
      "category": "Informatique",
      "category_ar": "حاسوب",
      "stock": 8,
      "featured": true
    },
    {
      "id": 3,
      "name_fr": "Montre Connectée Sport",
      "name_ar": "ساعة ذكية رياضية",
      "description_fr": "Montre connectée étanche IP68 avec suivi GPS intégré, moniteur cardiaque 24h/24, notifications smartphone, plus de 50 modes sportifs. Autonomie jusqu'à 10 jours. Compatible iOS et Android.",
      "description_ar": "ساعة ذكية مقاومة للماء IP68 مع تتبع GPS مدمج، مراقب معدل ضربات القلب 24/7، إشعارات الهاتف الذكي، أكثر من 50 وضع رياضي. عمر البطارية حتى 10 أيام. متوافقة مع iOS و Android.",
      "price": 18500,
      "promotion": 20,
      "colors": ["Noir", "Bleu", "Blanc", "Vert"],
      "colors_ar": ["أسود", "أزرق", "أبيض", "أخضر"],
      "images": [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop",
        "https://images.unsplash.com/photo-1434493651900-23773ce3d85a?w=500&h=500&fit=crop"
      ],
      "category": "Accessoires",
      "category_ar": "إكسسوارات",
      "stock": 45,
      "featured": false
    }
  ],
  "orders": [
    {
      "id": "CMD-001",
      "customer_name": "Ahmed Benali",
      "phone": "0555123456",
      "email": "ahmed.benali@email.com",
      "address": "Rue des Martyrs, Cité El Badr, Bâtiment A, Appartement 12",
      "wilaya": "Alger",
      "commune": "Bab Ezzouar",
      "total": 72250,
      "shipping_cost": 250,
      "status": "En attente",
      "status_ar": "في الانتظار",
      "created_at": "2025-01-14",
      "products": [
        {"id": 1, "name": "Smartphone Galaxy Ultra", "quantity": 1, "price": 72250, "color": "Noir"}
      ]
    }
  ],
  "admin_credentials": [
    {"code": "08119512", "type": "principal", "description": "Code principal administrateur"},
    {"code": "08119599", "type": "secours", "description": "Code de secours administrateur"}
  ],
  "app_settings": {
    "app_name_fr": "BazarDZ",
    "app_name_ar": "بازار الجزائر",
    "logo_url": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200",
    "logo_custom": null,
    "primary_color": "#3B82F6",
    "secondary_color": "#6B7280",
    "default_language": "fr",
    "enable_rtl": true,
    "site_description_fr": "Votre boutique en ligne en Algérie",
    "site_description_ar": "متجركم الإلكتروني في الجزائر"
  },
  "sample_images": [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    "https://images.unsplash.com/photo-1524678714210-9917a6c619c2?w=500",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
    "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500",
    "https://images.unsplash.com/photo-1560810714-84b040b8600e?w=500",
    "https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=500"
  ]
};

// Application State
let currentLanguage = 'fr';
let currentPage = 'home';
let cart = [];
let isAdminAuthenticated = false;
let currentProduct = null;
let filteredProducts = [...appData.products];
let currentOrder = null;
let currentAdminSection = 'dashboard';
let tempLogoUrl = null;
let currentProductPhotos = [];
let draggedPhotoIndex = null;
let tempCommunes = [];

// Language Management
const translations = {
  fr: {
    'search_placeholder': 'Rechercher un produit...',
    'add_to_cart': 'Ajouter au panier',
    'buy_now': 'Acheter maintenant',
    'out_of_stock': 'Rupture de stock',
    'price': 'Prix',
    'description': 'Description',
    'colors': 'Couleurs',
    'quantity': 'Quantité',
    'subtotal': 'Sous-total',
    'shipping': 'Livraison',
    'total': 'Total',
    'proceed_checkout': 'Finaliser la commande',
    'empty_cart': 'Votre panier est vide',
    'continue_shopping': 'Continuer mes achats',
    'order_placed': 'Commande passée avec succès !',
    'product_added': 'Produit ajouté au panier',
    'product_removed': 'Produit retiré du panier',
    'login_success': 'Connexion réussie',
    'login_failed': 'Code d\'accès invalide',
    'logout_success': 'Déconnexion réussie',
    'logo_updated': 'Logo mis à jour',
    'wilaya_added': 'Wilaya ajoutée avec succès',
    'wilaya_updated': 'Wilaya mise à jour',
    'wilaya_deleted': 'Wilaya supprimée',
    'commune_added': 'Commune ajoutée',
    'commune_removed': 'Commune supprimée',
    'product_created': 'Produit créé avec succès'
  },
  ar: {
    'search_placeholder': 'البحث عن منتج...',
    'add_to_cart': 'أضف للعربة',
    'buy_now': 'اشتر الآن',
    'out_of_stock': 'غير متوفر',
    'price': 'السعر',
    'description': 'الوصف',
    'colors': 'الألوان',
    'quantity': 'الكمية',
    'subtotal': 'المجموع الفرعي',
    'shipping': 'التوصيل',
    'total': 'المجموع',
    'proceed_checkout': 'إتمام الطلب',
    'empty_cart': 'عربة التسوق فارغة',
    'continue_shopping': 'متابعة التسوق',
    'order_placed': 'تم تقديم الطلب بنجاح!',
    'product_added': 'تمت إضافة المنتج للعربة',
    'product_removed': 'تم إزالة المنتج من العربة',
    'login_success': 'تم تسجيل الدخول بنجاح',
    'login_failed': 'رمز الوصول غير صحيح',
    'logout_success': 'تم تسجيل الخروج بنجاح',
    'logo_updated': 'تم تحديث الشعار',
    'wilaya_added': 'تمت إضافة الولاية بنجاح',
    'wilaya_updated': 'تم تحديث الولاية',
    'wilaya_deleted': 'تم حذف الولاية',
    'commune_added': 'تمت إضافة البلدية',
    'commune_removed': 'تم إزالة البلدية',
    'product_created': 'تم إنشاء المنتج بنجاح'
  }
};

function t(key) {
  return translations[currentLanguage][key] || key;
}

// Utility Functions
function formatPrice(price) {
  return new Intl.NumberFormat('fr-DZ', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price) + ' DA';
}

function calculateDiscountedPrice(price, promotion) {
  return Math.round(price * (1 - promotion / 100));
}

function showToast(message, type = 'success') {
  console.log(`Toast: ${message} (${type})`);
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  
  const container = document.getElementById('toast-container');
  if (container) {
    container.appendChild(toast);
    
    setTimeout(() => {
      if (toast.parentNode) {
        toast.remove();
      }
    }, 3000);
  }
}

function showLoading() {
  const loadingEl = document.getElementById('loading');
  if (loadingEl) {
    loadingEl.classList.remove('hidden');
  }
}

function hideLoading() {
  const loadingEl = document.getElementById('loading');
  if (loadingEl) {
    loadingEl.classList.add('hidden');
  }
}

function showModal(title, content, footer = '') {
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalFooter = document.getElementById('modal-footer');
  const modalOverlay = document.getElementById('modal-overlay');
  
  if (modalTitle) modalTitle.textContent = title;
  if (modalBody) modalBody.innerHTML = content;
  if (modalFooter) modalFooter.innerHTML = footer;
  if (modalOverlay) modalOverlay.classList.remove('hidden');
}

function hideModal() {
  const modalOverlay = document.getElementById('modal-overlay');
  if (modalOverlay) {
    modalOverlay.classList.add('hidden');
  }
}

// File handling utilities
function simulateFileUpload(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = function(e) {
      // Simulate upload delay
      setTimeout(() => {
        resolve(e.target.result);
      }, 1000);
    };
    reader.readAsDataURL(file);
  });
}

function generateId() {
  return Math.max(...appData.products.map(p => p.id), 0) + 1;
}

function generateWilayaId() {
  return Math.max(...appData.wilayas.map(w => w.id), 0) + 1;
}


// Fonction pour charger les commandes depuis Google Sheets
async function loadOrdersFromSheet() {
    try {
        const response = await fetch('https://api.sheetbest.com/sheets/693e0e0f-ef44-4df1-84b2-9514f5c17991');
        if (response.ok) {
            const data = await response.json();
            console.log('Données reçues de Google Sheets:', data);

            // Convertir les données et fusionner avec les commandes locales
            const sheetOrders = data.map(order => ({
                id: order.id || order.ID || `CMD-${Date.now()}`,
                customer_name: order.customer_name,
                phone: order.phone,
                email: order.email || '',
                address: order.address,
                wilaya: order.wilaya,
                commune: order.commune,
                total: parseInt(order.total) || 0,
                shipping_cost: parseInt(order.shipping_cost || order.shipping) || 0,
                status: order.status || 'En attente',
                created_at: order.created_at || order.created || new Date().toISOString().split('T')[0],
                products: order.products ? JSON.parse(order.products) : []
            }));

            // Mettre à jour la liste des commandes
            appData.orders = sheetOrders;
            console.log('Commandes chargées:', appData.orders.length);
            return true;
        }
    } catch (error) {
        console.error('Erreur chargement commandes:', error);
    }
    return false;
}

// Fonction pour mettre à jour le statut d'une commande
async function updateOrderStatusInSheet(orderId, newStatus) {
    try {
        // D'abord mettre à jour localement
        const order = appData.orders.find(o => o.id === orderId);
        if (order) {
            order.status = newStatus;
        }

        // Puis synchroniser avec Google Sheets (méthode PUT ou POST selon SheetBest)
        const response = await fetch(`https://api.sheetbest.com/sheets/693e0e0f-ef44-4df1-84b2-9514f5c17991/${orderId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: newStatus })
        });

        if (response.ok) {
            console.log('Statut mis à jour dans Google Sheets');
            return true;
        } else {
            console.log('Erreur mise à jour statut:', response.status);
            return false;
        }
    } catch (error) {
        console.error('Erreur update statut:', error);
        return false;
    }
}

// Fonction pour supprimer une commande
async function deleteOrderFromSheet(orderId) {
    try {
        // Supprimer localement
        appData.orders = appData.orders.filter(order => order.id !== orderId);

        // Supprimer de Google Sheets
        const response = await fetch(`https://api.sheetbest.com/sheets/693e0e0f-ef44-4df1-84b2-9514f5c17991/${orderId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('Commande supprimée de Google Sheets');
            return true;
        } else {
            console.log('Erreur suppression:', response.status);
            return false;
        }
    } catch (error) {
        console.error('Erreur delete:', error);
        return false;
    }
}

// Navigation Functions
function navigateToPage(pageName) {
  console.log('Navigating to:', pageName);
  
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Show target page
  const targetPage = document.getElementById(pageName + '-page');
  if (targetPage) {
    targetPage.classList.add('active');
    currentPage = pageName;
    
    // Update nav buttons active state
    updateNavigation(pageName);
    
    // Render page content if needed
    renderCurrentPage();
  } else {
    console.error('Page not found:', pageName + '-page');
  }
}

function updateNavigation(activePage) {
  // Update nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  const activeBtn = document.querySelector(`.nav-btn[data-page="${activePage}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
}

function renderCurrentPage() {
  switch (currentPage) {
    case 'home':
      renderHomePage();
      break;
    case 'product':
      if (currentProduct) renderProductPage(currentProduct);
      break;
    case 'cart':
      renderCartPage();
      break;
    case 'checkout':
      renderCheckoutPage();
      break;
    case 'admin-dashboard':
      if (isAdminAuthenticated) renderAdminDashboard();
      break;
  }
}

// Language Functions
function updateLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  
  // Update language selector
  const langSelect = document.getElementById('language-select');
  if (langSelect) {
    langSelect.value = lang;
  }
  
  // Update all elements with data-fr and data-ar attributes
  document.querySelectorAll('[data-fr]').forEach(element => {
    const text = element.getAttribute('data-' + lang) || element.getAttribute('data-fr');
    
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      if (element.placeholder !== undefined) {
        element.placeholder = text;
      }
    } else if (element.tagName === 'OPTION') {
      element.textContent = text;
    } else {
      element.textContent = text;
    }
  });
  
  // Update app name in header
  const logoText = document.querySelector('.logo-text');
  if (logoText) {
    logoText.textContent = lang === 'ar' ? appData.app_settings.app_name_ar : appData.app_settings.app_name_fr;
  }
  
  // Update page title
  document.title = lang === 'ar' ? 'بازار الجزائر - متجر إلكتروني' : 'BazarDZ - Boutique en ligne';
  
  // Re-render current page content
  renderCurrentPage();
}

// Logo Management Functions
function setupLogoUpload() {
  const uploadZone = document.getElementById('logo-upload-zone');
  const fileInput = document.getElementById('logo-file-input');
  
  if (!uploadZone || !fileInput) return;
  
  // Remove any existing listeners
  uploadZone.replaceWith(uploadZone.cloneNode(true));
  const newUploadZone = document.getElementById('logo-upload-zone');
  const newFileInput = document.getElementById('logo-file-input');
  
  // Click to upload
  newUploadZone.addEventListener('click', () => {
    newFileInput.click();
  });
  
  // File input change
  newFileInput.addEventListener('change', handleLogoFileSelect);
  
  // Drag and drop
  newUploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    newUploadZone.classList.add('dragover');
  });
  
  newUploadZone.addEventListener('dragleave', () => {
    newUploadZone.classList.remove('dragover');
  });
  
  newUploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    newUploadZone.classList.remove('dragover');
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleLogoFile(files[0]);
    }
  });
}

function handleLogoFileSelect(e) {
  const file = e.target.files[0];
  if (file) {
    handleLogoFile(file);
  }
}

async function handleLogoFile(file) {
  // Validate file
  if (!file.type.startsWith('image/')) {
    showToast('Veuillez sélectionner un fichier image', 'error');
    return;
  }
  
  if (file.size > 2 * 1024 * 1024) { // 2MB limit
    showToast('Le fichier est trop volumineux (max 2MB)', 'error');
    return;
  }
  
  try {
    showLoading();
    
    // Simulate upload
    const dataUrl = await simulateFileUpload(file);
    
    // Store temporarily
    tempLogoUrl = dataUrl;
    
    // Show preview
    const newPreview = document.getElementById('logo-new-preview');
    const newImg = document.getElementById('new-logo-img');
    const placeholder = document.querySelector('.upload-placeholder');
    
    if (newPreview && newImg && placeholder) {
      newImg.src = dataUrl;
      placeholder.style.display = 'none';
      newPreview.classList.remove('hidden');
    }
    
    hideLoading();
  } catch (error) {
    hideLoading();
    showToast('Erreur lors du chargement de l\'image', 'error');
  }
}

function saveLogo() {
  if (!tempLogoUrl) {
    showToast('Aucune image sélectionnée', 'error');
    return;
  }
  
  // Update app settings
  appData.app_settings.logo_custom = tempLogoUrl;
  appData.app_settings.logo_url = tempLogoUrl;
  
  // Update logo in header and preview
  const headerLogo = document.getElementById('logo-img');
  const currentPreview = document.getElementById('current-logo-preview');
  
  if (headerLogo) headerLogo.src = tempLogoUrl;
  if (currentPreview) currentPreview.src = tempLogoUrl;
  
  // Reset upload state
  cancelLogoUpload();
  
  showToast(t('logo_updated'));
}

function cancelLogoUpload() {
  tempLogoUrl = null;
  
  const newPreview = document.getElementById('logo-new-preview');
  const placeholder = document.querySelector('.upload-placeholder');
  const fileInput = document.getElementById('logo-file-input');
  
  if (newPreview) newPreview.classList.add('hidden');
  if (placeholder) placeholder.style.display = 'flex';
  if (fileInput) fileInput.value = '';
}

function resetToDefaultLogo() {
  const defaultLogo = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200";
  
  // Update app settings
  appData.app_settings.logo_custom = null;
  appData.app_settings.logo_url = defaultLogo;
  
  // Update logo in header and preview
  const headerLogo = document.getElementById('logo-img');
  const currentPreview = document.getElementById('current-logo-preview');
  
  if (headerLogo) headerLogo.src = defaultLogo;
  if (currentPreview) currentPreview.src = defaultLogo;
  
  // Reset upload state
  cancelLogoUpload();
  
  showToast(t('logo_updated'));
}

// Wilaya Management Functions
function addWilaya() {
  tempCommunes = [];
  
  const modalContent = `
    <form id="add-wilaya-form">
      <div class="wilaya-form-grid">
        <div class="form-group">
          <label class="form-label">Nom français *</label>
          <input type="text" id="wilaya-name-fr" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label">Nom arabe *</label>
          <input type="text" id="wilaya-name-ar" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label">Code *</label>
          <input type="text" id="wilaya-code" class="form-control" maxlength="2" required>
        </div>
        <div class="form-group">
          <label class="form-label">Frais de livraison (DA) *</label>
          <input type="number" id="wilaya-shipping" class="form-control" min="0" required>
        </div>
      </div>
      
      <div class="form-group">
        <label class="form-label">Communes</label>
        <div class="add-commune-section">
          <input type="text" id="new-commune-input" class="form-control" placeholder="Nom de la commune...">
          <button type="button" class="btn btn--outline" onclick="addCommune()">Ajouter</button>
        </div>
        <div id="communes-list" class="commune-list">
          <!-- Communes will be added here -->
        </div>
      </div>
    </form>
  `;
  
  const modalFooter = `
    <button class="btn btn--outline" onclick="hideModal()">Annuler</button>
    <button class="btn btn--primary" onclick="saveNewWilaya()">Créer la wilaya</button>
  `;
  
  showModal('Ajouter une nouvelle wilaya', modalContent, modalFooter);
  
  // Setup commune input enter key
  setTimeout(() => {
    const communeInput = document.getElementById('new-commune-input');
    if (communeInput) {
      communeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          addCommune();
        }
      });
    }
  }, 100);
}

function addCommune() {
  const input = document.getElementById('new-commune-input') || document.getElementById('edit-commune-input');
  if (!input) return;
  
  const communeName = input.value.trim();
  if (!communeName) return;
  
  if (tempCommunes.includes(communeName)) {
    showToast('Cette commune existe déjà', 'error');
    return;
  }
  
  tempCommunes.push(communeName);
  input.value = '';
  
  renderTempCommunes();
  showToast(t('commune_added'));
}

function removeCommune(index) {
  tempCommunes.splice(index, 1);
  renderTempCommunes();
  showToast(t('commune_removed'));
}

function renderTempCommunes() {
  const container = document.getElementById('communes-list');
  if (!container) return;
  
  container.innerHTML = tempCommunes.map((commune, index) => `
    <div class="commune-item">
      <span>${commune}</span>
      <button type="button" class="btn btn-sm btn--outline" onclick="removeCommune(${index})">Supprimer</button>
    </div>
  `).join('');
}

function saveNewWilaya() {
  const nameFr = document.getElementById('wilaya-name-fr')?.value.trim();
  const nameAr = document.getElementById('wilaya-name-ar')?.value.trim();
  const code = document.getElementById('wilaya-code')?.value.trim();
  const shipping = parseInt(document.getElementById('wilaya-shipping')?.value || 0);
  
  if (!nameFr || !nameAr || !code || !shipping) {
    showToast('Veuillez remplir tous les champs obligatoires', 'error');
    return;
  }
  
  // Check if code already exists
  if (appData.wilayas.find(w => w.code === code)) {
    showToast('Ce code de wilaya existe déjà', 'error');
    return;
  }
  
  const newWilaya = {
    id: generateWilayaId(),
    name_fr: nameFr,
    name_ar: nameAr,
    code: code.padStart(2, '0'),
    shipping_cost: shipping,
    communes: [...tempCommunes]
  };
  
  appData.wilayas.push(newWilaya);
  tempCommunes = [];
  
  hideModal();
  renderGeographyTable();
  showToast(t('wilaya_added'));
}

function editWilaya(wilayaId) {
  const wilaya = appData.wilayas.find(w => w.id === wilayaId);
  if (!wilaya) return;
  
  // Set temp communes for editing
  tempCommunes = [...wilaya.communes];
  
  const modalContent = `
    <form id="edit-wilaya-form">
      <div class="wilaya-form-grid">
        <div class="form-group">
          <label class="form-label">Nom français *</label>
          <input type="text" id="edit-wilaya-name-fr" class="form-control" value="${wilaya.name_fr}" required>
        </div>
        <div class="form-group">
          <label class="form-label">Nom arabe *</label>
          <input type="text" id="edit-wilaya-name-ar" class="form-control" value="${wilaya.name_ar}" required>
        </div>
        <div class="form-group">
          <label class="form-label">Code *</label>
          <input type="text" id="edit-wilaya-code" class="form-control" value="${wilaya.code}" maxlength="2" required>
        </div>
        <div class="form-group">
          <label class="form-label">Frais de livraison (DA) *</label>
          <input type="number" id="edit-wilaya-shipping" class="form-control" value="${wilaya.shipping_cost}" min="0" required>
        </div>
      </div>
      
      <div class="form-group">
        <label class="form-label">Communes</label>
        <div class="add-commune-section">
          <input type="text" id="edit-commune-input" class="form-control" placeholder="Nom de la commune...">
          <button type="button" class="btn btn--outline" onclick="addCommune()">Ajouter</button>
        </div>
        <div id="communes-list" class="commune-list">
          <!-- Communes will be populated -->
        </div>
      </div>
    </form>
  `;
  
  const modalFooter = `
    <button class="btn btn--outline" onclick="hideModal()">Annuler</button>
    <button class="btn btn--primary" onclick="saveEditedWilaya(${wilayaId})">Enregistrer</button>
  `;
  
  showModal(`Modifier ${wilaya.name_fr}`, modalContent, modalFooter);
  
  // Render existing communes
  setTimeout(() => {
    renderTempCommunes();
    
    const communeInput = document.getElementById('edit-commune-input');
    if (communeInput) {
      communeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          addCommune();
        }
      });
    }
  }, 100);
}

function saveEditedWilaya(wilayaId) {
  const wilaya = appData.wilayas.find(w => w.id === wilayaId);
  if (!wilaya) return;
  
  const nameFr = document.getElementById('edit-wilaya-name-fr')?.value.trim();
  const nameAr = document.getElementById('edit-wilaya-name-ar')?.value.trim();
  const code = document.getElementById('edit-wilaya-code')?.value.trim();
  const shipping = parseInt(document.getElementById('edit-wilaya-shipping')?.value || 0);
  
  if (!nameFr || !nameAr || !code || !shipping) {
    showToast('Veuillez remplir tous les champs obligatoires', 'error');
    return;
  }
  
  // Check if code conflicts with other wilayas
  if (appData.wilayas.find(w => w.code === code && w.id !== wilayaId)) {
    showToast('Ce code de wilaya existe déjà', 'error');
    return;
  }
  
  // Update wilaya
  wilaya.name_fr = nameFr;
  wilaya.name_ar = nameAr;
  wilaya.code = code.padStart(2, '0');
  wilaya.shipping_cost = shipping;
  wilaya.communes = [...tempCommunes];
  
  tempCommunes = [];
  
  hideModal();
  renderGeographyTable();
  showToast(t('wilaya_updated'));
}

function deleteWilaya(wilayaId) {
  const wilaya = appData.wilayas.find(w => w.id === wilayaId);
  if (!wilaya) return;
  
  if (confirm(`Êtes-vous sûr de vouloir supprimer la wilaya "${wilaya.name_fr}" ?`)) {
    const index = appData.wilayas.findIndex(w => w.id === wilayaId);
    if (index > -1) {
      appData.wilayas.splice(index, 1);
      renderGeographyTable();
      showToast(t('wilaya_deleted'));
    }
  }
}

// Product Photo Management Functions
function setupProductPhotos() {
  currentProductPhotos = [];
  
  const photoGrid = document.getElementById('product-photo-grid');
  if (!photoGrid) return;
  
  renderPhotoGrid();
}

function renderPhotoGrid() {
  const photoGrid = document.getElementById('product-photo-grid');
  if (!photoGrid) return;
  
  const maxPhotos = 6;
  const slots = [];
  
  // Add existing photos
  for (let i = 0; i < maxPhotos; i++) {
    const photo = currentProductPhotos[i];
    if (photo) {
      slots.push(`
        <div class="photo-slot has-image" data-index="${i}">
          <img src="${photo}" alt="Photo ${i + 1}">
          <button type="button" class="photo-remove" onclick="removeProductPhoto(${i})">✕</button>
          <div class="photo-drag-indicator">↔️</div>
        </div>
      `);
    } else {
      slots.push(`
        <div class="photo-slot" data-index="${i}" onclick="selectProductPhoto(${i})">
          <div class="photo-slot-placeholder">
            <div style="font-size: 1.5rem; margin-bottom: 4px;">📷</div>
            <div>Ajouter une photo</div>
          </div>
        </div>
      `);
    }
  }
  
  photoGrid.innerHTML = slots.join('');
  setupPhotoDragAndDrop();
}

function selectProductPhoto(index) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.style.display = 'none';
  
  input.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        showLoading();
        const dataUrl = await simulateFileUpload(file);
        currentProductPhotos[index] = dataUrl;
        renderPhotoGrid();
        hideLoading();
      } catch (error) {
        hideLoading();
        showToast('Erreur lors du chargement de l\'image', 'error');
      }
    }
  });
  
  document.body.appendChild(input);
  input.click();
  document.body.removeChild(input);
}

function removeProductPhoto(index) {
  currentProductPhotos.splice(index, 1);
  renderPhotoGrid();
}

function setupPhotoDragAndDrop() {
  const photoGrid = document.getElementById('product-photo-grid');
  if (!photoGrid) return;
  
  const slots = photoGrid.querySelectorAll('.photo-slot.has-image');
  
  slots.forEach((slot) => {
    slot.draggable = true;
    
    slot.addEventListener('dragstart', (e) => {
      draggedPhotoIndex = parseInt(slot.dataset.index);
      photoGrid.classList.add('dragging');
    });
    
    slot.addEventListener('dragover', (e) => {
      e.preventDefault();
      slot.classList.add('drag-over');
    });
    
    slot.addEventListener('dragleave', () => {
      slot.classList.remove('drag-over');
    });
    
    slot.addEventListener('drop', (e) => {
      e.preventDefault();
      slot.classList.remove('drag-over');
      
      const targetIndex = parseInt(slot.dataset.index);
      if (draggedPhotoIndex !== null && draggedPhotoIndex !== targetIndex) {
        // Swap photos
        const temp = currentProductPhotos[draggedPhotoIndex];
        currentProductPhotos[draggedPhotoIndex] = currentProductPhotos[targetIndex];
        currentProductPhotos[targetIndex] = temp;
        
        renderPhotoGrid();
      }
      
      photoGrid.classList.remove('dragging');
      draggedPhotoIndex = null;
    });
    
    slot.addEventListener('dragend', () => {
      photoGrid.classList.remove('dragging');
      slots.forEach(s => s.classList.remove('drag-over'));
      draggedPhotoIndex = null;
    });
  });
}

// Product Management Functions
function addProduct() {
  currentProductPhotos = [];
  
  const modalContent = `
    <form id="add-product-form">
      <div class="photo-upload-section">
        <label class="form-label">Photos du produit (max 6)</label>
        <div id="product-photo-grid" class="photo-grid">
          <!-- Photo slots will be rendered here -->
        </div>
      </div>
      
      <div class="wilaya-form-grid">
        <div class="form-group">
          <label class="form-label">Nom français *</label>
          <input type="text" id="product-name-fr" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label">Nom arabe *</label>
          <input type="text" id="product-name-ar" class="form-control" required>
        </div>
      </div>
      
      <div class="form-group">
        <label class="form-label">Description française *</label>
        <textarea id="product-desc-fr" class="form-control" rows="3" required></textarea>
      </div>
      
      <div class="form-group">
        <label class="form-label">Description arabe *</label>
        <textarea id="product-desc-ar" class="form-control" rows="3" required></textarea>
      </div>
      
      <div class="wilaya-form-grid">
        <div class="form-group">
          <label class="form-label">Prix (DA) *</label>
          <input type="number" id="product-price" class="form-control" min="0" required>
        </div>
        <div class="form-group">
          <label class="form-label">Promotion (%)</label>
          <input type="number" id="product-promotion" class="form-control" min="0" max="100" value="0">
        </div>
        <div class="form-group">
          <label class="form-label">Stock *</label>
          <input type="number" id="product-stock" class="form-control" min="0" required>
        </div>
        <div class="form-group">
          <label class="form-label">Catégorie française *</label>
          <input type="text" id="product-category-fr" class="form-control" required>
        </div>
      </div>
      
      <div class="form-group">
        <label class="form-label">Catégorie arabe *</label>
        <input type="text" id="product-category-ar" class="form-control" required>
      </div>
      
      <div class="form-group">
        <label class="form-label">Couleurs disponibles (français)</label>
        <input type="text" id="product-colors-fr" class="form-control" placeholder="Noir, Blanc, Bleu (séparés par des virgules)">
      </div>
      
      <div class="form-group">
        <label class="form-label">Couleurs disponibles (arabe)</label>
        <input type="text" id="product-colors-ar" class="form-control" placeholder="أسود, أبيض, أزرق (séparés par des virgules)">
      </div>
    </form>
  `;
  
  const modalFooter = `
    <button class="btn btn--outline" onclick="hideModal()">Annuler</button>
    <button class="btn btn--primary" onclick="saveNewProduct()">Créer le produit</button>
  `;
  
  showModal('Ajouter un nouveau produit', modalContent, modalFooter);
  
  // Setup photo grid after modal is shown
  setTimeout(() => {
    setupProductPhotos();
  }, 100);
}

function saveNewProduct() {
  const nameFr = document.getElementById('product-name-fr')?.value.trim();
  const nameAr = document.getElementById('product-name-ar')?.value.trim();
  const descFr = document.getElementById('product-desc-fr')?.value.trim();
  const descAr = document.getElementById('product-desc-ar')?.value.trim();
  const price = parseInt(document.getElementById('product-price')?.value || 0);
  const promotion = parseInt(document.getElementById('product-promotion')?.value || 0);
  const stock = parseInt(document.getElementById('product-stock')?.value || 0);
  const categoryFr = document.getElementById('product-category-fr')?.value.trim();
  const categoryAr = document.getElementById('product-category-ar')?.value.trim();
  const colorsFr = document.getElementById('product-colors-fr')?.value.trim();
  const colorsAr = document.getElementById('product-colors-ar')?.value.trim();
  
  if (!nameFr || !nameAr || !descFr || !descAr || !price || !stock || !categoryFr || !categoryAr) {
    showToast('Veuillez remplir tous les champs obligatoires', 'error');
    return;
  }
  
  if (currentProductPhotos.length === 0) {
    showToast('Veuillez ajouter au moins une photo', 'error');
    return;
  }
  
  const newProduct = {
    id: generateId(),
    name_fr: nameFr,
    name_ar: nameAr,
    description_fr: descFr,
    description_ar: descAr,
    price: price,
    promotion: promotion,
    colors: colorsFr.split(',').map(c => c.trim()).filter(c => c),
    colors_ar: colorsAr.split(',').map(c => c.trim()).filter(c => c),
    images: currentProductPhotos.filter(photo => photo),
    category: categoryFr,
    category_ar: categoryAr,
    stock: stock,
    featured: false
  };
  
  appData.products.push(newProduct);
  currentProductPhotos = [];
  
  hideModal();
  renderProductsTable();
  
  // Update home page
  filteredProducts = [...appData.products];
  if (currentPage === 'home') {
    renderHomePage();
  }
  
  showToast(t('product_created'));
}

// Home Page Functions
function renderHomePage() {
  const productsGrid = document.getElementById('products-grid');
  if (!productsGrid) return;
  
  productsGrid.innerHTML = '';
  
  filteredProducts.forEach(product => {
    const productCard = createProductCard(product);
    productsGrid.appendChild(productCard);
  });
}

function createProductCard(product) {
  const discountedPrice = product.promotion > 0 ? 
    calculateDiscountedPrice(product.price, product.promotion) : 
    product.price;
    
  const card = document.createElement('div');
  card.className = 'product-card';
  
  const colors = currentLanguage === 'ar' ? product.colors_ar : product.colors;
  const name = currentLanguage === 'ar' ? product.name_ar : product.name_fr;
  const description = currentLanguage === 'ar' ? product.description_ar : product.description_fr;
  
  card.innerHTML = `
    <img src="${product.images[0]}" alt="${name}" class="product-image">
    <div class="product-info">
      <h3 class="product-name">${name}</h3>
      <div class="product-price">
        <span class="price-current">${formatPrice(discountedPrice)}</span>
        ${product.promotion > 0 ? `<span class="price-original">${formatPrice(product.price)}</span>` : ''}
        ${product.promotion > 0 ? `<span class="promotion-badge">-${product.promotion}%</span>` : ''}
      </div>
      <p class="product-description">${description}</p>
      <div class="product-colors">
        ${colors.slice(0, 3).map(color => 
          `<div class="color-dot" title="${color}" style="background: ${getColorCode(color)}"></div>`
        ).join('')}
      </div>
      <div class="product-actions">
        <button class="btn btn--primary btn-icon add-to-cart-btn">
          <span>🛒</span>
          <span>${t('add_to_cart')}</span>
        </button>
      </div>
    </div>
  `;
  
  // Add event listeners
  card.addEventListener('click', (e) => {
    if (!e.target.closest('.add-to-cart-btn')) {
      showProductDetail(product);
    }
  });
  
  const addToCartBtn = card.querySelector('.add-to-cart-btn');
  addToCartBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product.id);
  });
  
  return card;
}

function getColorCode(colorName) {
  const colorMap = {
    'Noir': '#2C2C2C', 'أسود': '#2C2C2C',
    'Blanc': '#F8F8F8', 'أبيض': '#F8F8F8',
    'Bleu': '#1E40AF', 'أزرق': '#1E40AF',
    'Rose': '#EC4899', 'وردي': '#EC4899',
    'Rouge Gaming': '#DC2626', 'أحمر للألعاب': '#DC2626',
    'Noir Gaming': '#1F2937', 'أسود للألعاب': '#1F2937',
    'Argent': '#94A3B8', 'فضي': '#94A3B8',
    'Or Rose': '#F59E0B', 'ذهبي وردي': '#F59E0B',
    'Or': '#FBBF24', 'ذهبي': '#FBBF24',
    'Vert': '#059669', 'أخضر': '#059669',
    'Gris Sidéral': '#475569', 'رمادي فضائي': '#475569'
  };
  
  return colorMap[colorName] || '#6B7280';
}

function searchProducts() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;
  
  const searchTerm = searchInput.value.toLowerCase().trim();
  
  if (!searchTerm) {
    filteredProducts = [...appData.products];
  } else {
    filteredProducts = appData.products.filter(product => {
      const name_fr = product.name_fr.toLowerCase();
      const name_ar = product.name_ar.toLowerCase();
      const desc_fr = product.description_fr.toLowerCase();
      const desc_ar = product.description_ar.toLowerCase();
      
      return name_fr.includes(searchTerm) ||
             name_ar.includes(searchTerm) ||
             desc_fr.includes(searchTerm) ||
             desc_ar.includes(searchTerm) ||
             product.category.toLowerCase().includes(searchTerm) ||
             product.category_ar.toLowerCase().includes(searchTerm);
    });
  }
  
  renderHomePage();
}

// Product Detail Functions
function showProductDetail(product) {
  currentProduct = product;
  navigateToPage('product');
}

function renderProductPage(product) {
  const productDetail = document.getElementById('product-detail');
  if (!productDetail) return;
  
  const discountedPrice = product.promotion > 0 ? 
    calculateDiscountedPrice(product.price, product.promotion) : 
    product.price;
  
  const colors = currentLanguage === 'ar' ? product.colors_ar : product.colors;
  const name = currentLanguage === 'ar' ? product.name_ar : product.name_fr;
  const description = currentLanguage === 'ar' ? product.description_ar : product.description_fr;
  
  productDetail.innerHTML = `
    <div class="product-gallery">
      <img src="${product.images[0]}" alt="${name}" class="gallery-main" id="gallery-main">
      <div class="gallery-thumbs">
        ${product.images.map((img, index) => 
          `<img src="${img}" alt="${name}" class="gallery-thumb ${index === 0 ? 'active' : ''}" data-src="${img}">`
        ).join('')}
      </div>
    </div>
    
    <div class="product-details">
      <h1>${name}</h1>
      
      <div class="product-price">
        <span class="price-current">${formatPrice(discountedPrice)}</span>
        ${product.promotion > 0 ? `<span class="price-original">${formatPrice(product.price)}</span>` : ''}
        ${product.promotion > 0 ? `<span class="promotion-badge">-${product.promotion}%</span>` : ''}
      </div>
      
      <p class="product-description">${description}</p>
      
      <div class="detail-colors">
        <h4>${t('colors')}</h4>
        <div class="color-options">
          ${colors.map((color, index) => 
            `<div class="color-option ${index === 0 ? 'selected' : ''}" data-color="${color}">${color}</div>`
          ).join('')}
        </div>
      </div>
      
      <div class="quantity-selector">
        <label><strong>${t('quantity')}</strong></label>
        <div class="quantity-controls">
          <button class="quantity-btn" id="qty-decrease">-</button>
          <input type="number" id="product-quantity" class="quantity-input" value="1" min="1" max="${product.stock}">
          <button class="quantity-btn" id="qty-increase">+</button>
        </div>
        <span class="stock-info">${product.stock} en stock</span>
      </div>
      
      <div class="product-actions">
        <button class="btn btn--outline btn--full-width" id="add-to-cart-detail">${t('add_to_cart')}</button>
        <button class="btn btn--primary btn--full-width mt-8" id="buy-now-btn">${t('buy_now')}</button>
      </div>
    </div>
  `;
  
  // Add event listeners
  setupProductDetailEventListeners(product);
}

function setupProductDetailEventListeners(product) {
  // Gallery thumbnails
  document.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', function() {
      const mainImg = document.getElementById('gallery-main');
      if (mainImg) {
        mainImg.src = this.dataset.src;
      }
      
      document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Color selection
  document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function() {
      document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
      this.classList.add('selected');
    });
  });
  
  // Quantity controls
  const qtyDecrease = document.getElementById('qty-decrease');
  const qtyIncrease = document.getElementById('qty-increase');
  const quantityInput = document.getElementById('product-quantity');
  
  if (qtyDecrease) {
    qtyDecrease.addEventListener('click', () => {
      const currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });
  }
  
  if (qtyIncrease) {
    qtyIncrease.addEventListener('click', () => {
      const currentValue = parseInt(quantityInput.value);
      if (currentValue < product.stock) {
        quantityInput.value = currentValue + 1;
      }
    });
  }
  
  // Action buttons
  const addToCartBtn = document.getElementById('add-to-cart-detail');
  const buyNowBtn = document.getElementById('buy-now-btn');
  
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      addToCartFromDetail(product.id);
    });
  }
  
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', (e) => {
      e.preventDefault();
      addToCartFromDetail(product.id);
      navigateToPage('checkout');
    });
  }
}

// Cart Functions
function addToCart(productId, quantity = 1) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) {
    console.error('Product not found:', productId);
    return;
  }
  
  const existingItem = cart.find(item => item.product.id === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    const colors = currentLanguage === 'ar' ? product.colors_ar : product.colors;
    cart.push({
      product: product,
      quantity: quantity,
      selectedColor: colors[0] || 'Non spécifié'
    });
  }
  
  updateCartCount();
  showToast(t('product_added'));
  console.log('Cart updated:', cart);
}

function addToCartFromDetail(productId) {
  const quantityInput = document.getElementById('product-quantity');
  const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;
  
  const selectedColorElement = document.querySelector('.color-option.selected');
  const selectedColor = selectedColorElement ? selectedColorElement.textContent : null;
  
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.product.id === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
    if (selectedColor) existingItem.selectedColor = selectedColor;
  } else {
    const colors = currentLanguage === 'ar' ? product.colors_ar : product.colors;
    cart.push({
      product: product,
      quantity: quantity,
      selectedColor: selectedColor || colors[0] || 'Non spécifié'
    });
  }
  
  updateCartCount();
  showToast(t('product_added'));
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.product.id !== productId);
  updateCartCount();
  renderCartPage();
  showToast(t('product_removed'));
}

function updateCartQuantity(productId, newQuantity) {
  const item = cart.find(item => item.product.id === productId);
  if (item) {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = newQuantity;
      updateCartCount();
      renderCartPage();
    }
  }
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountElement = document.getElementById('cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = totalItems;
  }
}

function renderCartPage() {
  const cartContent = document.getElementById('cart-content');
  if (!cartContent) return;
  
  if (cart.length === 0) {
    cartContent.innerHTML = `
      <div class="cart-empty">
        <h3>${t('empty_cart')}</h3>
        <button class="btn btn--primary mt-16" onclick="navigateToPage('home')">${t('continue_shopping')}</button>
      </div>
    `;
    return;
  }
  
  const cartItems = cart.map(item => {
    const discountedPrice = item.product.promotion > 0 ? 
      calculateDiscountedPrice(item.product.price, item.product.promotion) : 
      item.product.price;
    const itemTotal = discountedPrice * item.quantity;
    const productName = currentLanguage === 'ar' ? item.product.name_ar : item.product.name_fr;
    
    return `
      <div class="cart-item">
        <img src="${item.product.images[0]}" alt="${productName}" class="cart-item-image">
        <div class="cart-item-details">
          <h4 class="cart-item-name">${productName}</h4>
          <p class="cart-item-color">${t('colors')}: ${item.selectedColor}</p>
          <p class="cart-item-price">${formatPrice(discountedPrice)}</p>
          <div class="cart-item-controls">
            <div class="quantity-controls">
              <button class="quantity-btn" onclick="updateCartQuantity(${item.product.id}, ${item.quantity - 1})">-</button>
              <span class="quantity-display">${item.quantity}</span>
              <button class="quantity-btn" onclick="updateCartQuantity(${item.product.id}, ${item.quantity + 1})">+</button>
            </div>
            <button class="btn btn--outline btn-sm" onclick="removeFromCart(${item.product.id})">Supprimer</button>
          </div>
          <p class="cart-item-total"><strong>${formatPrice(itemTotal)}</strong></p>
        </div>
      </div>
    `;
  }).join('');
  
  const subtotal = cart.reduce((sum, item) => {
    const discountedPrice = item.product.promotion > 0 ? 
      calculateDiscountedPrice(item.product.price, item.product.promotion) : 
      item.product.price;
    return sum + (discountedPrice * item.quantity);
  }, 0);
  
  cartContent.innerHTML = `
    <div class="cart-items">
      ${cartItems}
    </div>
    
    <div class="cart-summary">
      <div class="summary-row">
        <span>${t('subtotal')}</span>
        <span>${formatPrice(subtotal)}</span>
      </div>
      <div class="summary-row">
        <span>${t('shipping')}</span>
        <span>Calculé à l'étape suivante</span>
      </div>
      <div class="summary-row total">
        <span>${t('total')}</span>
        <span>${formatPrice(subtotal)}</span>
      </div>
      <button class="btn btn--primary btn--full-width mt-16" onclick="navigateToPage('checkout')">${t('proceed_checkout')}</button>
    </div>
  `;
}

// Checkout Functions
function renderCheckoutPage() {
  // Populate wilaya options
  const wilayaSelect = document.getElementById('wilaya-select');
  if (!wilayaSelect) return;
  
  const currentWilayaValue = wilayaSelect.value;
  
  wilayaSelect.innerHTML = `<option value="">${currentLanguage === 'ar' ? 'اختر الولاية' : 'Sélectionner une wilaya'}</option>`;
  
  appData.wilayas.forEach(wilaya => {
    const option = document.createElement('option');
    option.value = wilaya.id;
    option.textContent = currentLanguage === 'ar' ? wilaya.name_ar : wilaya.name_fr;
    option.dataset.shippingCost = wilaya.shipping_cost;
    if (wilaya.id.toString() === currentWilayaValue) {
      option.selected = true;
    }
    wilayaSelect.appendChild(option);
  });
  
  // Update communes if wilaya is selected
  if (currentWilayaValue) {
    updateCommunes();
  }
  
  updateOrderSummary();
}

function updateCommunes() {
  const wilayaSelect = document.getElementById('wilaya-select');
  const communeSelect = document.getElementById('commune-select');
  
  if (!wilayaSelect || !communeSelect) return;
  
  const selectedWilayaId = parseInt(wilayaSelect.value);
  
  communeSelect.innerHTML = `<option value="">${currentLanguage === 'ar' ? 'اختر البلدية' : 'Sélectionner une commune'}</option>`;
  
  if (selectedWilayaId) {
    const wilaya = appData.wilayas.find(w => w.id === selectedWilayaId);
    if (wilaya && wilaya.communes) {
      wilaya.communes.forEach(commune => {
        const option = document.createElement('option');
        option.value = commune;
        option.textContent = commune;
        communeSelect.appendChild(option);
      });
      communeSelect.disabled = false;
    } else {
      communeSelect.disabled = true;
    }
  } else {
    communeSelect.disabled = true;
  }
  
  updateOrderSummary();
}

function updateOrderSummary() {
  const orderSummary = document.getElementById('order-summary');
  if (!orderSummary) return;
  
  if (cart.length === 0) {
    orderSummary.innerHTML = '<p>Panier vide</p>';
    return;
  }
  
  const wilayaSelect = document.getElementById('wilaya-select');
  const shippingCost = wilayaSelect && wilayaSelect.value ? 
    parseInt(wilayaSelect.selectedOptions[0]?.dataset.shippingCost || 0) : 0;
  
  const subtotal = cart.reduce((sum, item) => {
    const discountedPrice = item.product.promotion > 0 ? 
      calculateDiscountedPrice(item.product.price, item.product.promotion) : 
      item.product.price;
    return sum + (discountedPrice * item.quantity);
  }, 0);
  
  const total = subtotal + shippingCost;
  
  const orderItems = cart.map(item => {
    const discountedPrice = item.product.promotion > 0 ? 
      calculateDiscountedPrice(item.product.price, item.product.promotion) : 
      item.product.price;
    const productName = currentLanguage === 'ar' ? item.product.name_ar : item.product.name_fr;
    
    return `
      <div class="summary-item">
        <div>
          <div>${productName}</div>
          <div style="font-size: 0.875rem; color: var(--color-text-secondary);">Qté: ${item.quantity} • ${item.selectedColor}</div>
        </div>
        <div>${formatPrice(discountedPrice * item.quantity)}</div>
      </div>
    `;
  }).join('');
  
  orderSummary.innerHTML = `
    ${orderItems}
    <div class="summary-item">
      <span>${t('subtotal')}</span>
      <span>${formatPrice(subtotal)}</span>
    </div>
    <div class="summary-item">
      <span>${t('shipping')}</span>
      <span>${shippingCost > 0 ? formatPrice(shippingCost) : 'À calculer'}</span>
    </div>
    <div class="summary-item total">
      <span>${t('total')}</span>
      <span>${formatPrice(total)}</span>
    </div>
  `;
}

function submitOrder(event) {
  event.preventDefault();
  
  if (cart.length === 0) {
    showToast('Votre panier est vide', 'error');
    return;
  }
  
  const formData = {
    customer_name: document.getElementById('customer-name')?.value.trim(),
    phone: document.getElementById('customer-phone')?.value.trim(),
    address: document.getElementById('customer-address')?.value.trim(),
    wilaya_id: document.getElementById('wilaya-select')?.value,
    commune: document.getElementById('commune-select')?.value
  };
  
  // Form validation
  if (!formData.customer_name || !formData.phone || !formData.address || !formData.wilaya_id || !formData.commune) {
    showToast('Veuillez remplir tous les champs obligatoires', 'error');
    return;
  }
  
  const submitBtn = document.getElementById('submit-order-btn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Traitement...';
  }
  
  showLoading();
  
  // Simulate order processing
  setTimeout(() => {
    const wilaya = appData.wilayas.find(w => w.id === parseInt(formData.wilaya_id));
    const subtotal = cart.reduce((sum, item) => {
      const discountedPrice = item.product.promotion > 0 ? 
        calculateDiscountedPrice(item.product.price, item.product.promotion) : 
        item.product.price;
      return sum + (discountedPrice * item.quantity);
    }, 0);
    
    const newOrderId = 'CMD-' + String(appData.orders.length + 1).padStart(3, '0');
    
    const newOrder = {
      id: newOrderId,
      customer_name: formData.customer_name,
      phone: formData.phone,
      address: formData.address,
      wilaya: currentLanguage === 'ar' ? wilaya.name_ar : wilaya.name_fr,
      commune: formData.commune,
      total: subtotal,
      shipping_cost: wilaya.shipping_cost,
      status: 'En attente',
      status_ar: 'في الانتظار',
      created_at: new Date().toISOString().split('T')[0],
      products: cart.map(item => {
        const discountedPrice = item.product.promotion > 0 ? 
          calculateDiscountedPrice(item.product.price, item.product.promotion) : 
          item.product.price;
        const productName = currentLanguage === 'ar' ? item.product.name_ar : item.product.name_fr;
        return {
          id: item.product.id,
          name: productName,
          quantity: item.quantity,
          price: discountedPrice,
          color: item.selectedColor
        };
      })
    };
    
    appData.orders.unshift(newOrder);
    currentOrder = newOrder;
    
    // Clear cart
    cart = [];
    updateCartCount();
    
    // Reset form
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
      checkoutForm.reset();
    }
    
    hideLoading();
    
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = currentLanguage === 'ar' ? 'تأكيد الطلب' : 'Confirmer la commande';
    }
    
    renderConfirmationPage(newOrder);
    navigateToPage('confirmation');
    
    showToast(t('order_placed'));
  }, 2000);
}

function renderConfirmationPage(order) {
  const orderDetails = document.getElementById('order-details');
  if (!orderDetails) return;
  
  orderDetails.innerHTML = `
    <div class="summary-row">
      <span><strong>N° Commande:</strong></span>
      <span>${order.id}</span>
    </div>
    <div class="summary-row">
      <span>Client:</span>
      <span>${order.customer_name}</span>
    </div>
    <div class="summary-row">
      <span>Téléphone:</span>
      <span>${order.phone}</span>
    </div>
    <div class="summary-row">
      <span>Livraison:</span>
      <span>${order.wilaya}, ${order.commune}</span>
    </div>
    <div class="summary-row">
      <span>Date:</span>
      <span>${order.created_at}</span>
    </div>
    <div class="summary-row total">
      <span><strong>Total:</strong></span>
      <span><strong>${formatPrice(order.total + order.shipping_cost)}</strong></span>
    </div>
  `;
}

// Admin Functions
function adminLogin(event) {
  event.preventDefault();
  console.log('Admin login attempt');
  
  const adminCodeInput = document.getElementById('admin-code');
  if (!adminCodeInput) return;
  
  const code = adminCodeInput.value.trim();
  const validCredential = appData.admin_credentials.find(cred => cred.code === code);
  
  console.log('Entered code:', code);
  console.log('Valid credentials:', appData.admin_credentials);
  console.log('Found credential:', validCredential);
  
  if (validCredential) {
    isAdminAuthenticated = true;
    adminCodeInput.value = '';
    currentAdminSection = 'dashboard';
    console.log('Admin authenticated, navigating to dashboard');
    navigateToPage('admin-dashboard');
    showToast(t('login_success'));
  } else {
    showToast(t('login_failed'), 'error');
  }
}

function adminLogout() {
  isAdminAuthenticated = false;
  currentAdminSection = 'dashboard';
  navigateToPage('home');
  showToast(t('logout_success'));
}

function renderAdminDashboard() {
  if (!isAdminAuthenticated) {
    navigateToPage('admin-login');
    return;
  }
  
  console.log('Rendering admin dashboard');
  
  // Update statistics
  const totalRevenue = appData.orders.reduce((sum, order) => sum + order.total + order.shipping_cost, 0);
  const totalOrders = appData.orders.length;
  const pendingOrders = appData.orders.filter(o => o.status === 'En attente').length;
  const shippedOrders = appData.orders.filter(o => o.status === 'Expédiée').length;
  
  const totalRevenueEl = document.getElementById('total-revenue');
  const totalOrdersEl = document.getElementById('total-orders');
  const pendingOrdersEl = document.getElementById('pending-orders');
  const shippedOrdersEl = document.getElementById('shipped-orders');
  
  if (totalRevenueEl) totalRevenueEl.textContent = formatPrice(totalRevenue);
  if (totalOrdersEl) totalOrdersEl.textContent = totalOrders;
  if (pendingOrdersEl) pendingOrdersEl.textContent = pendingOrders;
  if (shippedOrdersEl) shippedOrdersEl.textContent = shippedOrders;
  
  // Show dashboard section
    // Charger les commandes depuis Google Sheets
    await loadOrdersFromSheet();
  showAdminSection('dashboard');
  
  // Create chart
  setTimeout(() => createOrdersChart(), 100);
}

function showAdminSection(sectionName) {
  console.log('Showing admin section:', sectionName);
  
  // Hide all sections
  document.querySelectorAll('.admin-section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Show selected section
  const targetSection = document.getElementById(`admin-${sectionName}-content`);
  if (targetSection) {
    targetSection.classList.add('active');
    currentAdminSection = sectionName;
  }
  
  // Update nav buttons
  document.querySelectorAll('.admin-nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.querySelector(`[data-section="${sectionName}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
  
  // Load section content
  switch (sectionName) {
    case 'orders':
      renderOrdersTable();
      break;
    case 'products':
      renderProductsTable();
      break;
    case 'geography':
      renderGeographyTable();
      break;
    case 'settings':
      setTimeout(() => setupLogoUpload(), 100);
      break;
  }
}

function createOrdersChart() {
  const canvas = document.getElementById('orders-chart');
  if (!canvas) return;
  
  // Clear existing chart
  if (window.ordersChart) {
    window.ordersChart.destroy();
  }
  
  const statusCounts = {
    'En attente': 0,
    'Confirmée': 0,
    'Expédiée': 0,
    'Livrée': 0,
    'Annulée': 0
  };
  
  appData.orders.forEach(order => {
    statusCounts[order.status] = (statusCounts[order.status] || 0) + 1;
  });
  
  const ctx = canvas.getContext('2d');
  window.ordersChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(statusCounts),
      datasets: [{
        label: 'Nombre de commandes',
        data: Object.values(statusCounts),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F', '#DB4545']
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
  const container = document.getElementById('orders-table');
  if (!container) return;
  
  if (appData.orders.length === 0) {
    container.innerHTML = '<div class="no-data">Aucune commande trouvée</div>';
    return;
  }
  
  const tableHTML = `
    <table class="data-table">
      <thead>
        <tr>
          <th>N° Commande</th>
          <th>Client</th>
          <th>Date</th>
          <th>Wilaya</th>
          <th>Total</th>
          <th>Statut</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${appData.orders.map(order => `
          <tr>
            <td><strong>${order.id}</strong></td>
            <td>
              <div>${order.customer_name}</div>
              <small>${order.phone}</small>
            </td>
            <td>${order.created_at}</td>
            <td>${order.wilaya}</td>
            <td><strong>${formatPrice(order.total + order.shipping_cost)}</strong></td>
            <td>
              <select onchange="updateOrderStatus('${order.id}', this.value)" class="form-control" style="width: auto; font-size: 0.875rem;">
                <option value="En attente" ${order.status === 'En attente' ? 'selected' : ''}>En attente</option>
                <option value="Confirmée" ${order.status === 'Confirmée' ? 'selected' : ''}>Confirmée</option>
                <option value="Expédiée" ${order.status === 'Expédiée' ? 'selected' : ''}>Expédiée</option>
                <option value="Livrée" ${order.status === 'Livrée' ? 'selected' : ''}>Livrée</option>
                <option value="Annulée" ${order.status === 'Annulée' ? 'selected' : ''}>Annulée</option>
              </select>
            </td>
            <td class="actions">
              <button class="btn btn-sm btn--outline" onclick="viewOrderDetails('${order.id}')">Voir</button>
              <button class="btn btn-sm btn--outline" style="color: var(--color-error);" onclick="deleteOrder('${order.id}')">Supprimer</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
  
  container.innerHTML = tableHTML;
}

function renderProductsTable() {
  const container = document.getElementById('products-table');
  if (!container) return;
  
  const tableHTML = `
    <table class="data-table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Nom</th>
          <th>Prix</th>
          <th>Promotion</th>
          <th>Stock</th>
          <th>Catégorie</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${appData.products.map(product => `
          <tr>
            <td><img src="${product.images[0]}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;"></td>
            <td>
              <div><strong>${currentLanguage === 'ar' ? product.name_ar : product.name_fr}</strong></div>
              <small>${currentLanguage === 'ar' ? product.category_ar : product.category}</small>
            </td>
            <td><strong>${formatPrice(product.price)}</strong></td>
            <td>
              ${product.promotion > 0 ? `<span class="promotion-badge">-${product.promotion}%</span>` : 'Aucune'}
            </td>
            <td>${product.stock}</td>
            <td>${currentLanguage === 'ar' ? product.category_ar : product.category}</td>
            <td class="actions">
              <button class="btn btn-sm btn--outline" onclick="editProduct(${product.id})">Modifier</button>
              <button class="btn btn-sm btn--outline" style="color: var(--color-error);" onclick="deleteProduct(${product.id})">Supprimer</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
  
  container.innerHTML = tableHTML;
}

function renderGeographyTable() {
  const container = document.getElementById('geography-table');
  if (!container) return;
  
  const tableHTML = `
    <table class="data-table">
      <thead>
        <tr>
          <th>Code</th>
          <th>Wilaya (FR)</th>
          <th>Wilaya (AR)</th>
          <th>Frais de livraison</th>
          <th>Communes</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${appData.wilayas.map(wilaya => `
          <tr>
            <td><strong>${wilaya.code}</strong></td>
            <td>${wilaya.name_fr}</td>
            <td>${wilaya.name_ar}</td>
            <td><strong>${formatPrice(wilaya.shipping_cost)}</strong></td>
            <td>${wilaya.communes ? wilaya.communes.length : 0} communes</td>
            <td class="actions">
              <button class="btn btn-sm btn--outline" onclick="editWilaya(${wilaya.id})">Modifier</button>
              <button class="btn btn-sm btn--outline" style="color: var(--color-error);" onclick="deleteWilaya(${wilaya.id})">Supprimer</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
  
  container.innerHTML = tableHTML;
}

// Admin CRUD Functions
function updateOrderStatus(orderId, newStatus) {
  const order = appData.orders.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    // Update corresponding Arabic status
    const statusMap = {
      'En attente': 'في الانتظار',
      'Confirmée': 'مؤكدة', 
      'Expédiée': 'مُرسلة',
      'Livrée': 'مُسلمة',
      'Annulée': 'ملغية'
    };
    order.status_ar = statusMap[newStatus] || newStatus;
    
    showToast('Statut de commande mis à jour');
    renderAdminDashboard(); // Update statistics
  }
}

function deleteOrder(orderId) {
  if (confirm('Êtes-vous sûr de vouloir supprimer cette commande ?')) {
    const index = appData.orders.findIndex(o => o.id === orderId);
    if (index > -1) {
      appData.orders.splice(index, 1);
      showToast('Commande supprimée');
      renderOrdersTable();
      renderAdminDashboard(); // Update statistics
    }
  }
}

function viewOrderDetails(orderId) {
  const order = appData.orders.find(o => o.id === orderId);
  if (!order) return;
  
  const modalContent = `
    <div class="order-details">
      <div class="summary-row"><span><strong>N° Commande:</strong></span><span>${order.id}</span></div>
      <div class="summary-row"><span>Client:</span><span>${order.customer_name}</span></div>
      <div class="summary-row"><span>Téléphone:</span><span>${order.phone}</span></div>
      <div class="summary-row"><span>Adresse:</span><span>${order.address}</span></div>
      <div class="summary-row"><span>Wilaya:</span><span>${order.wilaya}</span></div>
      <div class="summary-row"><span>Commune:</span><span>${order.commune}</span></div>
      <div class="summary-row"><span>Date:</span><span>${order.created_at}</span></div>
      <div class="summary-row"><span>Statut:</span><span class="status-${order.status.toLowerCase().replace(' ', '-')}">${order.status}</span></div>
      <div class="summary-row"><span>Total produits:</span><span>${formatPrice(order.total)}</span></div>
      <div class="summary-row"><span>Frais livraison:</span><span>${formatPrice(order.shipping_cost)}</span></div>
      <div class="summary-row total"><span><strong>Total:</strong></span><span><strong>${formatPrice(order.total + order.shipping_cost)}</strong></span></div>
      
      <h4 style="margin-top: var(--space-20); margin-bottom: var(--space-12);">Produits commandés:</h4>
      ${order.products.map(product => `
        <div class="summary-item">
          <div>
            <div>${product.name}</div>
            <small>Quantité: ${product.quantity} • Couleur: ${product.color || 'Non spécifiée'}</small>
          </div>
          <span><strong>${formatPrice(product.price * product.quantity)}</strong></span>
        </div>
      `).join('')}
    </div>
  `;
  
  const modalFooter = `
    <button class="btn btn--outline" onclick="hideModal()">Fermer</button>
  `;
  
  showModal(`Détails de la commande ${order.id}`, modalContent, modalFooter);
}

function editProduct(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;
  
  const modalContent = `
    <form id="edit-product-form">
      <div class="form-group">
        <label class="form-label">Nom (FR)</label>
        <input type="text" id="edit-name-fr" class="form-control" value="${product.name_fr}" required>
      </div>
      <div class="form-group">
        <label class="form-label">Nom (AR)</label>
        <input type="text" id="edit-name-ar" class="form-control" value="${product.name_ar}" required>
      </div>
      <div class="form-group">
        <label class="form-label">Prix (DA)</label>
        <input type="number" id="edit-price" class="form-control" value="${product.price}" required min="0">
      </div>
      <div class="form-group">
        <label class="form-label">Promotion (%)</label>
        <input type="number" id="edit-promotion" class="form-control" value="${product.promotion}" min="0" max="100">
      </div>
      <div class="form-group">
        <label class="form-label">Stock</label>
        <input type="number" id="edit-stock" class="form-control" value="${product.stock}" min="0" required>
      </div>
    </form>
  `;
  
  const modalFooter = `
    <button class="btn btn--outline" onclick="hideModal()">Annuler</button>
    <button class="btn btn--primary" onclick="saveProduct(${productId})">Enregistrer</button>
  `;
  
  showModal(`Modifier le produit: ${product.name_fr}`, modalContent, modalFooter);
}

function saveProduct(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;
  
  const nameFr = document.getElementById('edit-name-fr')?.value;
  const nameAr = document.getElementById('edit-name-ar')?.value;
  const price = document.getElementById('edit-price')?.value;
  const promotion = document.getElementById('edit-promotion')?.value;
  const stock = document.getElementById('edit-stock')?.value;
  
  if (nameFr) product.name_fr = nameFr;
  if (nameAr) product.name_ar = nameAr;
  if (price) product.price = parseInt(price);
  if (promotion) product.promotion = parseInt(promotion) || 0;
  if (stock) product.stock = parseInt(stock);
  
  showToast('Produit mis à jour');
  hideModal();
  renderProductsTable();
  
  // Update home page if currently displayed
  if (currentPage === 'home') {
    filteredProducts = [...appData.products];
    renderHomePage();
  }
}

function deleteProduct(productId) {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
    const index = appData.products.findIndex(p => p.id === productId);
    if (index > -1) {
      appData.products.splice(index, 1);
      showToast('Produit supprimé');
      renderProductsTable();
      
      // Update home page
      filteredProducts = [...appData.products];
      if (currentPage === 'home') {
        renderHomePage();
      }
    }
  }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  
  try {
    // Language selector
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
      languageSelect.addEventListener('change', function(e) {
        updateLanguage(e.target.value);
      });
    }
    
    // Navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.getAttribute('data-page');
        console.log('Nav button clicked:', page);
        if (page) {
          navigateToPage(page);
        }
      });
    });
    
    // Logo click
    const logo = document.querySelector('.logo');
    if (logo) {
      logo.addEventListener('click', function(e) {
        e.preventDefault();
        navigateToPage('home');
      });
    }
    
    // Admin button - FIXED
    const adminBtn = document.getElementById('admin-btn');
    if (adminBtn) {
      adminBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Admin button clicked, authenticated:', isAdminAuthenticated);
        if (isAdminAuthenticated) {
          navigateToPage('admin-dashboard');
        } else {
          navigateToPage('admin-login');
        }
      });
    }
    
    // Back buttons
    const backToHome = document.getElementById('back-to-home');
    if (backToHome) {
      backToHome.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToPage('home');
      });
    }
    
    const backToHomeCart = document.getElementById('back-to-home-cart');
    if (backToHomeCart) {
      backToHomeCart.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToPage('home');
      });
    }
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', searchProducts);
      searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          searchProducts();
        }
      });
    }
    
    // Checkout form
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
      checkoutForm.addEventListener('submit', submitOrder);
    }
    
    // Wilaya and commune selects
    const wilayaSelect = document.getElementById('wilaya-select');
    if (wilayaSelect) {
      wilayaSelect.addEventListener('change', updateCommunes);
    }
    
    const communeSelect = document.getElementById('commune-select');
    if (communeSelect) {
      communeSelect.addEventListener('change', updateOrderSummary);
    }
    
    // Admin login
    const adminLoginForm = document.getElementById('admin-login-form');
    if (adminLoginForm) {
      adminLoginForm.addEventListener('submit', adminLogin);
    }
    
    // Admin logout
    const adminLogoutBtn = document.getElementById('admin-logout');
    if (adminLogoutBtn) {
      adminLogoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        adminLogout();
      });
    }
    
    // Admin navigation
    document.querySelectorAll('.admin-nav-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const section = this.getAttribute('data-section');
        console.log('Admin nav clicked:', section);
        if (section) {
          showAdminSection(section);
        }
      });
    });
    
    // Add product button
    const addProductBtn = document.getElementById('add-product-btn');
    if (addProductBtn) {
      addProductBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addProduct();
      });
    }
    
    // Add wilaya button
    const addWilayaBtn = document.getElementById('add-wilaya-btn');
    if (addWilayaBtn) {
      addWilayaBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addWilaya();
      });
    }
    
    // New order button
    const newOrderBtn = document.getElementById('new-order-btn');
    if (newOrderBtn) {
      newOrderBtn.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToPage('home');
      });
    }
    
    // Modal controls
    const modalClose = document.getElementById('modal-close');
    if (modalClose) {
      modalClose.addEventListener('click', (e) => {
        e.preventDefault();
        hideModal();
      });
    }
    
    const modalOverlay = document.getElementById('modal-overlay');
    if (modalOverlay) {
      modalOverlay.addEventListener('click', function(e) {
        if (e.target === this) {
          hideModal();
        }
      });
    }
    
    // Settings forms
    const settingsForm = document.getElementById('settings-form');
    if (settingsForm) {
      settingsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const appNameFr = document.getElementById('app-name-fr');
        const appNameAr = document.getElementById('app-name-ar');
        
        if (appNameFr) appData.app_settings.app_name_fr = appNameFr.value;
        if (appNameAr) appData.app_settings.app_name_ar = appNameAr.value;
        
        // Update logo text
        const logoText = document.querySelector('.logo-text');
        if (logoText) {
          logoText.textContent = currentLanguage === 'ar' ? appData.app_settings.app_name_ar : appData.app_settings.app_name_fr;
        }
        
        showToast('Paramètres sauvegardés');
      });
    }
    
    const passwordForm = document.getElementById('password-form');
    if (passwordForm) {
      passwordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newMain = document.getElementById('new-main-code');
        const newBackup = document.getElementById('new-backup-code');
        
        if (newMain && newMain.value.trim()) {
          appData.admin_credentials[0].code = newMain.value.trim();
        }
        if (newBackup && newBackup.value.trim()) {
          appData.admin_credentials[1].code = newBackup.value.trim();
        }
        
        passwordForm.reset();
        showToast('Codes d\'accès mis à jour');
      });
    }
    
    // Initialize app
    updateLanguage('fr');
    renderHomePage();
    updateCartCount();
    
    console.log('App initialized successfully');
  } catch (error) {
    console.error('Error initializing app:', error);
  }
});

// Global functions for HTML onclick handlers
window.navigateToPage = navigateToPage;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.updateCommunes = updateCommunes;
window.updateOrderSummary = updateOrderSummary;
window.hideModal = hideModal;
window.showAdminSection = showAdminSection;
window.updateOrderStatus = updateOrderStatus;
window.deleteOrder = deleteOrder;
window.viewOrderDetails = viewOrderDetails;
window.editProduct = editProduct;
window.saveProduct = saveProduct;
window.deleteProduct = deleteProduct;
window.editWilaya = editWilaya;
window.saveEditedWilaya = saveEditedWilaya;
window.deleteWilaya = deleteWilaya;
window.addWilaya = addWilaya;
window.saveNewWilaya = saveNewWilaya;
window.addCommune = addCommune;
window.removeCommune = removeCommune;
window.addProduct = addProduct;
window.saveNewProduct = saveNewProduct;
window.selectProductPhoto = selectProductPhoto;
window.removeProductPhoto = removeProductPhoto;
window.saveLogo = saveLogo;
window.cancelLogoUpload = cancelLogoUpload;
window.resetToDefaultLogo = resetToDefaultLogo;
