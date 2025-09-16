function getOrdersSheet() {
  // Remplacez l’ID par celui de votre Google Sheet (tout après /d/ et avant /edit dans URL)
  const spreadsheetId = 'AKfycbyXCV277QU_kZ-juFgV_OPAncloLVPACPyfPTzoIyGI';
  const ss = SpreadsheetApp.openById(spreadsheetId);
  let sheet = ss.getSheetByName('Orders');
  
  if (!sheet) {
    sheet = ss.insertSheet('Orders');
    createHeaders(sheet);
  }
  return sheet;
}
