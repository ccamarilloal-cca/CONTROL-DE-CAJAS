# 📦 Control de Cajas — ABC Ximple Logistics
> Dashboard de inventario para cajas Nacional · Impo/Expo · Penske

---

## 📁 Estructura del repositorio

```
📂 control-cajas/
├── index.html       ← App completa (HTML + CSS + JS en un solo archivo)
├── config.js        ← ⚙️ SOLO EDITAS ESTE ARCHIVO
├── sw.js            ← Service Worker (instalación como app en Android/iPhone)
├── manifest.json    ← Ícono, nombre y colores de la app
└── README.md        ← Este archivo
```

---

## ⚙️ Configuración (solo 2 pasos)

### Paso 1 — Hacer el Google Sheet público

1. Abre tu Google Sheet con las hojas NACIONAL, IMPO-EXPO, PENSKE
2. Clic en **Compartir** (arriba a la derecha)
3. Cambia a **"Cualquier persona con el enlace puede ver"**
4. Copia el ID de la URL:
   ```
   https://docs.google.com/spreadsheets/d/ ← ESTE ES EL ID → /edit
   ```

### Paso 2 — Pegar el ID en config.js

Abre `config.js` y reemplaza:
```js
SHEET_ID: 'TU_SHEET_ID_AQUI',
```
Por el ID que copiaste:
```js
SHEET_ID: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms',  // ejemplo
```

---

## 🚀 Publicar en GitHub Pages

1. Crea un repositorio en GitHub (puede ser privado o público)
2. Sube los 5 archivos: `index.html`, `config.js`, `sw.js`, `manifest.json`, `README.md`
3. Ve a **Settings → Pages**
4. En **Source** selecciona: `Deploy from a branch` → `main` → `/ (root)`
5. Guarda — en 1-2 minutos tu app estará en:
   ```
   https://TU_USUARIO.github.io/NOMBRE_REPO/
   ```

---

## 📱 Instalar como app en iPhone (sin ver la URL)

1. Abre la URL de GitHub Pages en **Safari** (no Chrome)
2. Toca el botón **compartir** (□↑) en la barra de abajo
3. Baja y toca **"Agregar a pantalla de inicio"**
4. Cambia el nombre a **"Control Cajas"** → toca **Agregar**
5. ✅ Aparece como ícono en tu pantalla, se abre sin barra de navegación

---

## 📱 Instalar como app en Android

1. Abre la URL en **Chrome**
2. Toca el menú (⋮) → **"Añadir a pantalla de inicio"**
3. Confirma — queda como ícono de app

---

## 🔄 Cómo actualizar los datos

Solo actualiza tu **Google Sheet** — la app lee los datos en tiempo real cada vez que alguien la abre o toca **↻ Actualizar**.

No necesitas tocar GitHub ni la app cada vez que cambien los datos.

---

## 📋 Hojas requeridas en el Google Sheet

| Hoja | Descripción |
|------|-------------|
| `NACIONAL` | Cajas del equipo nacional |
| `IMPO-EXPO` | Cajas importación/exportación |
| `PENSKE` | Cajas Penske con coordinador |
| `DANADAS-TALLER` | Resumen de dañadas (opcional) |

**La fila 1 es título, la fila 2 son los encabezados**, los datos empiezan en fila 3.

Columnas que debe tener cada hoja:

| Columna | Descripción |
|---------|-------------|
| `N° CAJA` | Número de caja |
| `ESTATUS OPERATIVO` | CARGADA / VACÍA / EN VIAJE / EN TALLER / EN PATIO |
| `NIVEL ALERTA` | 🔴 CRITICO / 🟡 ALERTA / 🟢 NORMAL / ⚪ SIN DATOS |
| `DÍAS SIN MOV` | Número de días sin movimiento |
| `LOCALIZADA` | ✅ LOCALIZADA — INV / ❌ NO LOCALIZADA |
| `PATIO INVENTARIO` | Nombre del patio |
| `UBICACIÓN REAL` | Ubicación actual |
| `ÚLTIMO CLIENTE INV` | Último cliente registrado |
| `COORDINADOR PKE` | Solo en hoja PENSKE |
| `DAÑO / CONDICIÓN` | 🔴 DAÑADA / 🔧 EN TALLER |
| `COMENTARIOS INV` | Notas adicionales |

---

## ❓ Problemas comunes

**La app carga pero muestra 0 en todo:**
- Verifica que el Sheet sea público (Compartir → Cualquier persona con el enlace)
- Verifica que los nombres de las hojas sean exactamente: `NACIONAL`, `IMPO-EXPO`, `PENSKE`

**Error "No se pudieron cargar los datos":**
- El SHEET_ID en config.js no es correcto
- El Sheet no está configurado como público

---

*ABC Ximple Logistics · Nacional Autotransporte Logístico · v1.0*
