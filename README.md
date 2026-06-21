# Portafolio Alek — Editor de Video

Sitio de una sola página (export de Claude Design) con 5 videos de YouTube que se
reproducen **embebidos**: 1 horizontal (16:9) destacado y 4 verticales (9:16).

## ✏️ Cambiar los videos (lo único que editas)

Abre **`videos-config.js`** y pega tus enlaces de YouTube entre comillas. Sirve cualquier
formato (`watch?v=`, `youtu.be/`, `shorts/`). Guarda y recarga la página.

## 💻 Verlo en tu computadora

No hay nada que instalar. Necesitas un mini-servidor local (no abras el archivo con
doble clic: debe servirse por `http`):

```bash
npx serve .
# o, si tienes Python:
python3 -m http.server 8000
```

Luego abre la dirección que te muestre (por ejemplo `http://localhost:3000` o
`http://localhost:8000`).

## 🚀 Subir a internet (Vercel)

1. Sube esta carpeta a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com) → **Add New… → Project** → importa el repo.
3. Framework Preset: **Other**. Sin Build Command. Sin Output Directory.
4. **Deploy**. Listo.

## 📁 Archivos

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | La página que se publica. |
| `videos-config.js` | **Tus 5 enlaces de YouTube.** Es lo único que editas. |
| `videos-init.js` | Lógica de "clic para reproducir". No editar. |
| `support.js`, `image-slot.js` | Motor de Claude Design. No editar. |
| `uploads/` | Logos e imágenes. |
| `Portafolio Alek.dc.html` | Copia original editable en Claude Design (respaldo). |
