// googleSheetsClient.js - Client pour Google Sheets
// ⚠️ REMPLACEZ cette URL par la vôtre obtenue après déploiement
const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbz0PD6p7JsL9nUOD155u3AmrQvgt_Wi3VOH19DQpudfEa0Hi3nH3b9QkMa1o7QQ-IueEQ/exec';

// ✅ Ajouter une commande dans Google Sheets
export async function addOrderToSheets(orderData) {
  try {
    console.log('📤 Envoi commande vers Google Sheets:', orderData);
    
    const response = await fetch(SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'addOrder',
        order: orderData
      })
    });
    
    const result = await response.json();
    
    if (!result.success && result.error) {
      throw new Error(result.error);
    }
    
    console.log('✅ Commande ajoutée dans Google Sheets:', result);
    return result;
  } catch (error) {
    console.error('❌ Erreur Google Sheets:', error);
    throw error;
  }
}

// ✅ Charger toutes les commandes depuis Google Sheets
export async function loadOrdersFromSheets() {
  try {
    console.log('📥 Chargement commandes depuis Google Sheets...');
    
    const response = await fetch(SHEETS_URL + '?action=getOrders', {
      method: 'GET'
    });
    
    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }
    
    const orders = Array.isArray(data) ? data : [];
    console.log(`✅ ${orders.length} commandes chargées depuis Google Sheets`);
    return orders;
  } catch (error) {
    console.error('❌ Erreur chargement Google Sheets:', error);
    return [];
  }
}

// ✅ Mettre à jour le statut d'une commande
export async function updateOrderStatusInSheets(orderId, newStatus, newStatusAr) {
  try {
    console.log('🔄 Mise à jour statut commande dans Sheets:', orderId, newStatus);
    
    const response = await fetch(SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'updateOrderStatus',
        orderId: orderId,
        status: newStatus,
        statusAr: newStatusAr
      })
    });
    
    const result = await response.json();
    
    if (!result.success && result.error) {
      throw new Error(result.error);
    }
    
    console.log('✅ Statut mis à jour dans Google Sheets');
    return result;
  } catch (error) {
    console.error('❌ Erreur mise à jour statut Google Sheets:', error);
    throw error;
  }
}

// ✅ Supprimer une commande
export async function deleteOrderFromSheets(orderId) {
  try {
    console.log('🗑️ Suppression commande dans Sheets:', orderId);
    
    const response = await fetch(SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'deleteOrder',
        orderId: orderId
      })
    });
    
    const result = await response.json();
    
    if (!result.success && result.error) {
      throw new Error(result.error);
    }
    
    console.log('✅ Commande supprimée de Google Sheets');
    return result;
  } catch (error) {
    console.error('❌ Erreur suppression Google Sheets:', error);
    throw error;
  }
}

// ✅ Tester la connexion Google Sheets
export async function testSheetsConnection() {
  try {
    console.log('🔍 Test connexion Google Sheets...');
    
    const response = await fetch(SHEETS_URL + '?action=testConnection', {
      method: 'GET'
    });
    
    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Connexion Google Sheets OK:', result.message);
      return true;
    } else {
      console.error('❌ Connexion Google Sheets échouée:', result.error);
      return false;
    }
  } catch (error) {
    console.error('❌ Erreur test connexion Google Sheets:', error);
    return false;
  }
}
