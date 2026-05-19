// ============================================================
//  CONFIGURACIÓN — Control de Cajas ABC Ximple
//  Solo edita este archivo para conectar tu Google Sheet
// ============================================================

const CONFIG = {
  // 1. Abre tu Google Sheet
  // 2. Copia el ID de la URL:
  //    https://docs.google.com/spreadsheets/d/ [ESTE_ES_EL_ID] /edit
  SHEET_ID: 'https://script.google.com/macros/s/AKfycbzvKuntnxYRbAC2yRxHESR8MBchCX_oJ-XhCx9Ex0lBBCMunXtkrXJNq9F56l86_xg9/exec',

  // Nombre de la empresa (aparece en el header)
  EMPRESA: 'ABC Ximple Logistics',

  // Nombres exactos de las pestañas en tu Google Sheet
  HOJAS: {
    nacional:  'NACIONAL',
    impoexpo:  'IMPO-EXPO',
    penske:    'PENSKE',
    danadas:   'DANADAS-TALLER',
  },

  // Fila donde están los encabezados (1 = primera fila)
  HEADER_ROW: 2,

  // Zona horaria para el reloj
  TIMEZONE: 'America/Mexico_City',
};
