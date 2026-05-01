# Breathe

Sitio web estático e interactivo para practicar ejercicios de respiración en 4 tiempos, enfocado en relajación, manejo de estrés y preparación para el descanso.

## Objetivo

Ofrecer una experiencia simple de respiración guiada con contenido editorial de apoyo, buenas prácticas SEO y cumplimiento de políticas para monetización con AdSense.

## Tecnologías

- HTML5
- CSS3
- JavaScript vanilla
- Google Fonts (Montserrat)
- Google AdSense (carga condicionada por consentimiento de cookies)

## Estructura del proyecto

```text
src/
	index.html
	paz.html
	antiestres.html
	Dormir.html
	about.html
	terms.html
	privacy.html
	contact.html
	robots.txt
	sitemap.xml
	ads.txt
	blog/
	assets/
	scripts/
	styles/
```

## Ejecutar en local

## Publicación

Este proyecto es estático, por lo que puedes desplegarlo en GitHub Pages, Netlify, Vercel o cualquier hosting de archivos.

Si usas GitHub Pages, valida tu configuración actual en `Settings > Pages` y asegúrate de publicar la carpeta correcta (por ejemplo, `src/` mediante workflow o estructura compatible con tu estrategia de deploy).

## SEO y monetización

El proyecto incluye:

- Metadatos SEO (description, canonical, Open Graph y JSON-LD en páginas principales)
- `robots.txt`
- `sitemap.xml`
- Páginas legales y de confianza: `privacy.html`, `terms.html`, `about.html`, `contact.html`
- `ads.txt` (recuerda reemplazar el publisher ID de ejemplo)

## Checklist antes de enviar a revisión de AdSense

- [ ] Confirmar que `ads.txt` tiene tu publisher ID real
- [ ] Verificar que todas las páginas públicas cargan sin errores
- [ ] Revisar contenido suficiente en home y artículos
- [ ] Comprobar enlaces internos y navegación completa
- [ ] Enviar/actualizar sitemap en Google Search Console

## Notas

- El contenido es informativo y no sustituye asesoría médica profesional.
- Para mantenimiento rápido, prioriza cambios en `src/` y verifica en local antes de publicar.
