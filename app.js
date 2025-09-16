// Application Data with full dataset
// *** AJOUT: Import Google Sheets ***
import { addOrderToSheets, loadOrdersFromSheets, updateOrderStatusInSheets, deleteOrderFromSheets, testSheetsConnection } from './googleSheetsClient.js';

const appData = {
  "wilayas": [
    {"id": 1, "name_fr": "Adrar", "name_ar": "أدرار", "code": "01", "shipping_cost": 500, "communes": ["Adrar", "Tamest", "Charouine", "Reggane", "In Salah"]},
    {"id": 2, "name_fr": "Chlef", "name_ar": "الشلف", "code": "02", "shipping_cost": 400, "communes": ["Chlef", "Tenes", "Benairia", "El Karimia", "Tadjena"]},
    {"id": 3, "name_fr": "Laghouat", "name_ar": "الأغواط", "code": "03", "shipping_cost": 450, "communes": ["Laghouat", "Aflou", "Ksar El Hirane", "Bennasser Benchohra", "Sidi Makhlouf"]},
    {"id": 4, "name_fr": "Oum El Bouaghi", "name_ar": "أم البواقي", "code": "04", "shipping_cost": 400, "communes": ["Oum El Bouaghi", "Ain Beida", "Ain M'Lila", "Behir Chergui", "El Amiria"]},
    {"id": 5, "name_fr": "Batna", "name_ar": "باتنة", "code": "05", "shipping_cost": 400, "communes": ["Batna", "Barika", "Arris", "Biskra", "Merouana"]},
    {"id": 6, "name_fr": "Béjaïa", "name_ar": "بجاية", "code": "06", "shipping_cost": 350, "communes": ["Béjaïa", "Akbou", "El Kseur", "Sidi Aich", "Amizour"]},
    {"id": 7, "name_fr": "Biskra", "name_ar": "بسكرة", "code": "07", "shipping_cost": 450, "communes": ["Biskra", "Tolga", "Ouled Djellal", "Sidi Okba", "Chetma"]},
    {"id": 8, "name_fr": "Béchar", "name_ar": "بشار", "code": "08", "shipping_cost": 600, "communes": ["Béchar", "Abadla", "Beni Ounif", "Kenadsa", "Lahmar"]},
    {"id": 9, "name_fr": "Blida", "name_ar": "البليدة", "code": "09", "shipping_cost": 300, "communes": ["Blida", "Boufarik", "Larbaa", "Soumaa", "Beni Mered"]},
    {"id": 10, "name_fr": "Bouira", "name_ar": "البويرة", "code": "10", "shipping_cost": 350, "communes": ["Bouira", "Lakhdaria", "M'Chedallah", "Sour El Ghozlane", "Aïn Bessem"]},
    {"id": 11, "name_fr": "Tamanrasset", "name_ar": "تمنراست", "code": "11", "shipping_cost": 800, "communes": ["Tamanrasset", "In Guezzam", "In Salah", "Tin Zaouaten", "Idles"]},
    {"id": 12, "name_fr": "Tébessa", "name_ar": "تبسة", "code": "12", "shipping_cost": 450, "communes": ["Tébessa", "Cheria", "El Aouinet", "Bir El Ater", "Negrine"]},
    {"id": 13, "name_fr": "Tlemcen", "name_ar": "تلمسان", "code": "13", "shipping_cost": 450, "communes": ["Tlemcen", "Remchi", "Hennaya", "Chetouane", "Ouled Mimoun"]},
    {"id": 14, "name_fr": "Tiaret", "name_ar": "تيارت", "code": "14", "shipping_cost": 400, "communes": ["Tiaret", "Sougueur", "Mahdia", "Ksar Chellala", "Frenda"]},
    {"id": 15, "name_fr": "Tizi Ouzou", "name_ar": "تيزي وزو", "code": "15", "shipping_cost": 350, "communes": ["Tizi Ouzou", "Azazga", "Azeffoun", "Tigzirt", "Draa Ben Khedda"]},
    {"id": 16, "name_fr": "Alger", "name_ar": "الجزائر", "code": "16", "shipping_cost": 250, "communes": ["Alger Centre", "Sidi M'Hamed", "El Madania", "Bab El Oued", "Bologhine", "Casbah", "El Harrach", "Baraki", "Hussein Dey", "Kouba", "Bachdjerrah", "Dar El Beida", "Bab Ezzouar"]},
    {"id": 17, "name_fr": "Djelfa", "name_ar": "الجلفة", "code": "17", "shipping_cost": 400, "communes": ["Djelfa", "Messaad", "Hassi Bahbah", "Ain Oussera", "Birine"]},
    {"id": 18, "name_fr": "Jijel", "name_ar": "جيجل", "code": "18", "shipping_cost": 400, "communes": ["Jijel", "Taher", "El Milia", "Ferdjioua", "Sidi Abdelaziz"]},
    {"id": 19, "name_fr": "Sétif", "name_ar": "سطيف", "code": "19", "shipping_cost": 350, "communes": ["Sétif", "El Eulma", "Bougaa", "Ain Oulmene", "Djemila"]},
    {"id": 20, "name_fr": "Saïda", "name_ar": "سعيدة", "code": "20", "shipping_cost": 450, "communes": ["Saïda", "Doui Thabet", "Ouled Brahim", "Hassasna", "Moulay Larbi"]},
    {"id": 21, "name_fr": "Skikda", "name_ar": "سكيكدة", "code": "21", "shipping_cost": 400, "communes": ["Skikda", "Azzaba", "Collo", "Tamalous", "Ramdane Djamel"]},
    {"id": 22, "name_fr": "Sidi Bel Abbès", "name_ar": "سيدي بلعباس", "code": "22", "shipping_cost": 400, "communes": ["Sidi Bel Abbès", "Telagh", "Ras El Ma", "Ben Badis", "Mostefa Ben Brahim"]},
    {"id": 23, "name_fr": "Annaba", "name_ar": "عنابة", "code": "23", "shipping_cost": 400, "communes": ["Annaba", "El Hadjar", "Berrahal", "El Bouni", "Sidi Amar"]},
    {"id": 24, "name_fr": "Guelma", "name_ar": "قالمة", "code": "24", "shipping_cost": 400, "communes": ["Guelma", "Bouchegouf", "Heliopolis", "Hammam Debagh", "Oued Zenati"]},
    {"id": 25, "name_fr": "Constantine", "name_ar": "قسنطينة", "code": "25", "shipping_cost": 350, "communes": ["Constantine", "Hamma Bouziane", "Didouche Mourad", "El Khroub", "Ain Abid", "Ibn Ziad"]},
    {"id": 26, "name_fr": "Médéa", "name_ar": "المدية", "code": "26", "shipping_cost": 350, "communes": ["Médéa", "Berrouaghia", "Ksar El Boukhari", "Ouzera", "Chellalet El Adhaoura"]},
    {"id": 27, "name_fr": "Mostaganem", "name_ar": "مستغانم", "code": "27", "shipping_cost": 400, "communes": ["Mostaganem", "Relizane", "Ain Tedeles", "Hassi Mameche", "Sidi Ali"]},
    {"id": 28, "name_fr": "M'Sila", "name_ar": "المسيلة", "code": "28", "shipping_cost": 400, "communes": ["M'Sila", "Bou Saada", "Sidi Aissa", "Ain El Hadjel", "Hammam Dalaa"]},
    {"id": 29, "name_fr": "Mascara", "name_ar": "معسكر", "code": "29", "shipping_cost": 400, "communes": ["Mascara", "Sig", "Mohammadia", "Tighennif", "Bouhanifia"]},
    {"id": 30, "name_fr": "Ouargla", "name_ar": "ورقلة", "code": "30", "shipping_cost": 500, "communes": ["Ouargla", "Hassi Messaoud", "Nezla", "Sidi Khouiled", "Ain Beida"]},
    {"id": 31, "name_fr": "Oran", "name_ar": "وهران", "code": "31", "shipping_cost": 400, "communes": ["Oran", "Gdyel", "Bir El Djir", "Hassi Bounif", "Es Senia", "Arzew", "Bethioua", "Ain El Turck"]},
    {"id": 32, "name_fr": "El Bayadh", "name_ar": "البيض", "code": "32", "shipping_cost": 500, "communes": ["El Bayadh", "Rogassa", "Stitten", "Brezina", "Boualem"]},
    {"id": 33, "name_fr": "Illizi", "name_ar": "إليزي", "code": "33", "shipping_cost": 800, "communes": ["Illizi", "Djanet", "In Amenas", "Debdeb", "Bordj Omar Driss"]},
    {"id": 34, "name_fr": "Bordj Bou Arréridj", "name_ar": "برج بوعريريج", "code": "34", "shipping_cost": 350, "communes": ["Bordj Bou Arreridj", "Ras El Oued", "Bordj Zemoura", "Mansourah", "El Achir"]},
    {"id": 35, "name_fr": "Boumerdès", "name_ar": "بومرداس", "code": "35", "shipping_cost": 300, "communes": ["Boumerdès", "Dellys", "Naciria", "Isser", "Zemmouri"]},
    {"id": 36, "name_fr": "El Tarf", "name_ar": "الطارف", "code": "36", "shipping_cost": 450, "communes": ["El Tarf", "El Kala", "Bouhadjar", "Ben M'Hidi", "Boutheldja"]},
    {"id": 37, "name_fr": "Tindouf", "name_ar": "تندوف", "code": "37", "shipping_cost": 700, "communes": ["Tindouf", "Oum El Assel"]},
    {"id": 38, "name_fr": "Tissemsilt", "name_ar": "تيسمسيلت", "code": "38", "shipping_cost": 400, "communes": ["Tissemsilt", "Theniet El Had", "Bordj Bou Naama", "Lazharia", "Beni Chaib"]},
    {"id": 39, "name_fr": "El Oued", "name_ar": "الوادي", "code": "39", "shipping_cost": 500, "communes": ["El Oued", "Robbah", "Guemar", "Still", "Magrane"]},
    {"id": 40, "name_fr": "Khenchela", "name_ar": "خنشلة", "code": "40", "shipping_cost": 450, "communes": ["Khenchela", "Kais", "Baghai", "El Hamma", "Ouled Rechache"]},
    {"id": 41, "name_fr": "Souk Ahras", "name_ar": "سوق أهراس", "code": "41", "shipping_cost": 450, "communes": ["Souk Ahras", "Sedrata", "Heddada", "Ouled Driss", "Tiffech"]},
    {"id": 42, "name_fr": "Tipaza", "name_ar": "تيبازة", "code": "42", "shipping_cost": 300, "communes": ["Tipaza", "Cherchell", "Menaceur", "Sidi Amar", "Douaouda"]},
    {"id": 43, "name_fr": "Mila", "name_ar": "ميلة", "code": "43", "shipping_cost": 400, "communes": ["Mila", "Ferdjioua", "Chelghoum Laid", "Oued Athmania", "Rouached"]},
    {"id": 44, "name_fr": "Aïn Defla", "name_ar": "عين الدفلى", "code": "44", "shipping_cost": 350, "communes": ["Ain Defla", "Khemis Miliana", "El Attaf", "Boumedfaa", "Djelida"]},
    {"id": 45, "name_fr": "Naâma", "name_ar": "النعامة", "code": "45", "shipping_cost": 550, "communes": ["Naama", "Mecheria", "Ain Sefra", "Tiout", "Sfissifa"]},
    {"id": 46, "name_fr": "Aïn Témouchent", "name_ar": "عين تموشنت", "code": "46", "shipping_cost": 450, "communes": ["Ain Temouchent", "Hammam Bouhadjar", "Oulhaça", "Beni Saf", "El Malah"]},
    {"id": 47, "name_fr": "Ghardaïa", "name_ar": "غرداية", "code": "47", "shipping_cost": 500, "communes": ["Ghardaia", "El Menia", "Berriane", "Metlili", "El Guerrara"]},
    {"id": 48, "name_fr": "Relizane", "name_ar": "غليزان", "code": "48", "shipping_cost": 400, "communes": ["Relizane", "Mazouna", "Oued Rhiou", "Yellel", "Sidi Lazreg"]},
    {"id": 49, "name_fr": "Timimoun", "name_ar": "تيميمون", "code": "49", "shipping_cost": 600, "communes": ["Timimoun", "Ouled Said", "Aougrout", "Deldoul", "Metarfa"]},
    {"id": 50, "name_fr": "Bordj Badji Mokhtar", "name_ar": "برج باجي مختار", "code": "50", "shipping_cost": 800, "communes": ["Bordj Badji Mokhtar", "Timiaouine"]},
    {"id": 51, "name_fr": "Ouled Djellal", "name_ar": "أولاد جلال", "code": "51", "shipping_cost": 450, "communes": ["Ouled Djellal", "Sidi Khaled", "Besbes", "Doucen", "Chaiba"]},
    {"id": 52, "name_fr": "Béni Abbès", "name_ar": "بني عباس", "code": "52", "shipping_cost": 650, "communes": ["Beni Abbes", "Tabelbala", "Igli", "Ouled Khodeir", "El Ouata"]},
    {"id": 53, "name_fr": "In Salah", "name_ar": "عين صالح", "code": "53", "shipping_cost": 700, "communes": ["In Salah", "In Ghar", "Foggaret Ezzoua"]},
    {"id": 54, "name_fr": "In Guezzam", "name_ar": "عين قزّام", "code": "54", "shipping_cost": 900, "communes": ["In Guezzam", "Tin Zaouaten"]},
    {"id": 55, "name_fr": "Touggourt", "name_ar": "تقرت", "code": "55", "shipping_cost": 500, "communes": ["Touggourt", "Temacine", "Megarine", "Sidi Slimane", "Nezla"]},
    {"id": 56, "name_fr": "Djanet", "name_ar": "جانت", "code": "56", "shipping_cost": 850, "communes": ["Djanet", "Bordj El Haouas"]},
    {"id": 57, "name_fr": "El M'Ghair", "name_ar": "المغير", "code": "57", "shipping_cost": 500, "communes": ["El M'Ghair", "Djamaa", "Sidi Amrane", "Still", "Oum Touyour"]},
    {"id": 58, "name_fr": "El Meniaa", "name_ar": "المنيعة", "code": "58", "shipping_cost": 550, "communes": ["El Meniaa", "Hassi Gara", "Hassi Fehal"]}
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

// *** NOUVELLES FONCTIONS GOOGLE SHEETS ***

async function loadAndRenderOrders() {
  try {
    showLoading();
    console.log('📊 Chargement des commandes depuis Google Sheets...');
    
    const orders = await loadOrdersFromSheets();
    console.log('✅ Commandes chargées depuis Google Sheets:', orders.length, 'commandes');
    
    appData.orders = orders || [];
    
    if (currentAdminSection === 'orders') {
      renderOrdersTable();
    }
    
    if (currentAdminSection === 'dashboard') {
      updateDashboardStats();
    }
    
    hideLoading();
    console.log('✅ Interface mise à jour avec les données Google Sheets');
  } catch (error) {
    console.error('❌ Erreur chargement commandes Google Sheets:', error);
    showToast('Erreur lors du chargement des commandes', 'error');
    hideLoading();
  }
}

function updateDashboardStats() {
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
}

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

// *** GARDEZ TOUTES VOS FONCTIONS UTILITAIRES EXISTANTES ***
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

// *** MODIFICATION: fonction submitOrder avec Google Sheets ***
async function submitOrder(event) {
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
  
  try {
    const wilaya = appData.wilayas.find(w => w.id === parseInt(formData.wilaya_id));
    const subtotal = cart.reduce((sum, item) => {
      const discountedPrice = item.product.promotion > 0 ? 
        calculateDiscountedPrice(item.product.price, item.product.promotion) : 
        item.product.price;
      return sum + (discountedPrice * item.quantity);
    }, 0);
    
    const newOrderId = 'CMD-' + String(Date.now()).slice(-6);
    
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
    
    // *** MODIFICATION: Ajouter dans Google Sheets ***
    console.log('📊 Envoi de la commande vers Google Sheets:', newOrder);
    const result = await addOrderToSheets(newOrder);
    
    if (result.success) {
      console.log('✅ Commande créée dans Google Sheets:', result.orderId);
      
      appData.orders.unshift(newOrder);
      currentOrder = newOrder;
      
      cart = [];
      updateCartCount();
      
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
    }
  } catch (error) {
    console.error('❌ Erreur lors de la création de la commande:', error);
    showToast('Erreur lors de la création de la commande', 'error');
    
    hideLoading();
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = currentLanguage === 'ar' ? 'تأكيد الطلب' : 'Confirmer la commande';
    }
  }
}

// *** MODIFICATION: Admin Dashboard avec chargement Google Sheets ***
async function renderAdminDashboard() {
  if (!isAdminAuthenticated) {
    navigateToPage('admin-login');
    return;
  }
  
  console.log('📊 Rendering admin dashboard avec Google Sheets');
  
  await loadAndRenderOrders();
  updateDashboardStats();
  showAdminSection('dashboard');
  setTimeout(() => createOrdersChart(), 100);
}

// *** MODIFICATION: Mise à jour statut avec Google Sheets ***
async function updateOrderStatus(orderId, newStatus) {
  try {
    const order = appData.orders.find(o => o.id === orderId);
    if (order) {
      order.status = newStatus;
      
      const statusMap = {
        'En attente': 'في الانتظار',
        'Confirmée': 'مؤكدة', 
        'Expédiée': 'مُرسلة',
        'Livrée': 'مُسلمة',
        'Annulée': 'ملغية'
      };
      order.status_ar = statusMap[newStatus] || newStatus;
      
      // *** MODIFICATION: Mettre à jour dans Google Sheets ***
      await updateOrderStatusInSheets(orderId, newStatus, order.status_ar);
      
      showToast('Statut de commande mis à jour');
      renderAdminDashboard();
    }
  } catch (error) {
    console.error('❌ Erreur mise à jour statut:', error);
    showToast('Erreur lors de la mise à jour', 'error');
  }
}

// *** MODIFICATION: Suppression avec Google Sheets ***
async function deleteOrder(orderId) {
  if (confirm('Êtes-vous sûr de vouloir supprimer cette commande ?')) {
    try {
      await deleteOrderFromSheets(orderId);
      
      const index = appData.orders.findIndex(o => o.id === orderId);
      if (index > -1) {
        appData.orders.splice(index, 1);
      }
      
      showToast('Commande supprimée');
      renderOrdersTable();
      renderAdminDashboard();
    } catch (error) {
      console.error('❌ Erreur suppression:', error);
      showToast('Erreur lors de la suppression', 'error');
    }
  }
}

// *** MODIFICATION: showAdminSection avec Google Sheets ***
function showAdminSection(sectionName) {
  console.log('Showing admin section:', sectionName);
  
  document.querySelectorAll('.admin-section').forEach(section => {
    section.classList.remove('active');
  });
  
  const targetSection = document.getElementById(`admin-${sectionName}-content`);
  if (targetSection) {
    targetSection.classList.add('active');
    currentAdminSection = sectionName;
  }
  
  document.querySelectorAll('.admin-nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.querySelector(`[data-section="${sectionName}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
  
  switch (sectionName) {
    case 'orders':
      // *** MODIFICATION: Charger depuis Google Sheets ***
      loadAndRenderOrders();
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

// *** GARDEZ TOUTES VOS AUTRES FONCTIONS EXISTANTES SANS CHANGEMENT ***
// [Toutes les autres fonctions restent identiques: 
//  - Logo Management Functions
//  - Wilaya Management Functions  
//  - Product Photo Management Functions
//  - Product Management Functions
//  - Home Page Functions
//  - Product Detail Functions
//  - Cart Functions
//  - Checkout Functions
//  - Admin Functions
//  - etc.]

// Copiez toutes les fonctions de votre fichier original ici...
// Je laisse le reste identique pour économiser l'espace

// *** MODIFICATION: Test de connexion au démarrage ***
document.addEventListener('DOMContentLoaded', async function() {
  console.log('📊 DOM loaded, initializing app with Google Sheets...');
  
  try {
    const isConnected = await testSheetsConnection();
    if (isConnected) {
      console.log('✅ Google Sheets connecté avec succès !');
    } else {
      console.warn('⚠️ Problème de connexion Google Sheets');
    }
    
    // *** GARDEZ TOUT VOTRE CODE D'INITIALISATION EXISTANT ***
    // Language selector, navigation, etc...
    
    updateLanguage('fr');
    renderHomePage();
    updateCartCount();
    
    console.log('✅ App initialized successfully with Google Sheets integration');
  } catch (error) {
    console.error('❌ Error initializing app:', error);
  }
});

// *** GARDEZ TOUTES VOS AUTRES FONCTIONS et EVENT LISTENERS EXISTANTS ***
