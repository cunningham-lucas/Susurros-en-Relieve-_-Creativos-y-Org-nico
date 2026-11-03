#!/usr/bin/env node
// generar-sellos.mjs — Genera la vista previa del sello ex libris en lote, sin IA.
//
// Para cada nombre produce:
//   1) {diseño}_{NOMBRE}.svg          → vector con texto curvo (fuente embebida)
//   2) {diseño}_{NOMBRE}.png          → PNG transparente de 2000 px (con --png)
//   3) {diseño}_{NOMBRE}_relieve.png  → simulación de sello seco sobre papel (con --relieve)
//
// Uso:
//   node generar-sellos.mjs --nombres "LUCÍA,MARTÍN,FAMILIA GÓMEZ" --fuente Alike-Regular.ttf --png --relieve
//   node generar-sellos.mjs --archivo nombres.txt --diseno diseno03.svg --id diseno03 --salida ./sellos --png
//
// Requisitos: Node 18+. Para PNG/relieve: `npm i playwright` y `npx playwright install chromium`.
// La fuente debe tener licencia libre (p. ej. Alike, OFL, de Google Fonts). No usar la fuente de otra marca.
//
// IMPORTANTE: el relieve simulado es una aproximación. Antes de usarlo en un anuncio, compararlo
// con una foto macro real del producto (ver manual-creativos.md, sección 5).

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { basename, extname, join, resolve } from 'node:path';

// ---------- argumentos ----------
const args = process.argv.slice(2);
const opt = (k, d = undefined) => {
  const i = args.indexOf(`--${k}`);
  if (i === -1) return d;
  const v = args[i + 1];
  return v === undefined || v.startsWith('--') ? true : v;
};

const TEXTO_SUPERIOR = opt('superior', 'DE LA BIBLIOTECA DE');
const MAX_CARACTERES = 20;
const salida = resolve(opt('salida', './sellos'));
const idDiseno = opt('id', 'diseno00');
const tinta = opt('color', '#1A1A1A');           // color de la vista previa (no del relieve)
const papel = opt('papel', '#F4EEE2');           // color del papel para --relieve
const azimut = Number(opt('luz', 225));          // dirección de la luz en grados (225 = arriba a la izquierda)

let nombres = [];
if (opt('nombres')) nombres = String(opt('nombres')).split(',');
if (opt('archivo')) nombres = nombres.concat(readFileSync(opt('archivo'), 'utf8').split(/\r?\n/));
nombres = nombres.map((n) => n.trim().toLocaleUpperCase('es-AR')).filter(Boolean);
if (!nombres.length) {
  console.error('Pasá --nombres "A,B" o --archivo nombres.txt');
  process.exit(1);
}

// ---------- fuente embebida ----------
let fontFace = '';
let familia = 'serif';
if (opt('fuente')) {
  const ttf = readFileSync(opt('fuente'));
  familia = 'SelloFuente';
  fontFace = `@font-face{font-family:'${familia}';src:url(data:font/ttf;base64,${ttf.toString('base64')}) format('truetype');}`;
}

// ---------- diseño central (opcional) ----------
let disenoCentral = '';
if (opt('diseno')) {
  const ruta = opt('diseno');
  const ext = extname(ruta).toLowerCase();
  const mime = ext === '.svg' ? 'image/svg+xml' : ext === '.png' ? 'image/png' : 'image/jpeg';
  const b64 = readFileSync(ruta).toString('base64');
  disenoCentral = `<image href="data:${mime};base64,${b64}" x="330" y="330" width="340" height="340" preserveAspectRatio="xMidYMid meet"/>`;
} else {
  // Marcador: libro abierto simple. Reemplazar por el diseño real (placa) con --diseno.
  disenoCentral = `
    <g fill="none" stroke="${tinta}" stroke-width="10" stroke-linejoin="round" stroke-linecap="round">
      <path d="M500 610 C440 570 370 565 320 580 L320 420 C370 405 440 410 500 450 Z"/>
      <path d="M500 610 C560 570 630 565 680 580 L680 420 C630 405 560 410 500 450 Z"/>
      <path d="M500 450 L500 610"/>
    </g>`;
}

// ---------- geometría del sello (lienzo 1000 × 1000) ----------
const C = 500;
const R_EXT = 470;     // anillo exterior
const R_INT = 330;     // anillo interior
const R_SUP = 378;     // línea base del texto superior (las letras crecen hacia afuera)
const R_INF = 430;     // línea base del texto inferior (las letras crecen hacia adentro)

const arcoSuperior = `M ${C - R_SUP} ${C} A ${R_SUP} ${R_SUP} 0 0 1 ${C + R_SUP} ${C}`;
const arcoInferior = `M ${C - R_INF} ${C} A ${R_INF} ${R_INF} 0 0 0 ${C + R_INF} ${C}`;

const escapar = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function svgSello(nombre, { conFiltroRelieve = false } = {}) {
  const largo = [...nombre].length;
  const tamInf = largo <= 12 ? 64 : Math.max(44, Math.round(64 * 12 / largo));
  const tamSup = 58;
  const relleno = conFiltroRelieve ? '#000' : tinta;
  // opacidad < 1 suaviza las sombras: el sello seco real es sutil (ajustable con --intensidad 0.4–1)
  const filtro = conFiltroRelieve ? `filter="url(#relieve)" opacity="${Number(opt('intensidad', 0.7))}"` : '';
  const fondo = conFiltroRelieve ? `<rect width="1000" height="1000" fill="${papel}" filter="url(#grano)"/>` : '';
  const defsRelieve = conFiltroRelieve ? `
    <filter id="grano" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="ruido"/>
      <feColorMatrix in="ruido" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0"/>
      <feComposite in2="SourceGraphic" operator="over"/>
    </filter>
    <filter id="relieve" x="-5%" y="-5%" width="110%" height="110%" color-interpolation-filters="sRGB">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3.2" result="alto"/>
      <feDiffuseLighting in="alto" surfaceScale="4.5" diffuseConstant="1" lighting-color="${papel}" result="luz">
        <feDistantLight azimuth="${azimut}" elevation="38"/>
      </feDiffuseLighting>
      <feComposite in="luz" in2="SourceAlpha" operator="in" result="sello"/>
      <feGaussianBlur in="sello" stdDeviation="0.5"/>
    </filter>` : '';

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <defs>
    <style>${fontFace} text{font-family:'${familia}',serif;letter-spacing:4px;}</style>
    <path id="arcoSup" d="${arcoSuperior}"/>
    <path id="arcoInf" d="${arcoInferior}"/>
    ${defsRelieve}
  </defs>
  ${fondo}
  <g ${filtro} fill="${relleno}" stroke="${relleno}">
    <circle cx="${C}" cy="${C}" r="${R_EXT}" fill="none" stroke-width="10"/>
    <circle cx="${C}" cy="${C}" r="${R_INT}" fill="none" stroke-width="5"/>
    <circle cx="${C - 404}" cy="${C}" r="9" stroke="none"/>
    <circle cx="${C + 404}" cy="${C}" r="9" stroke="none"/>
    <text font-size="${tamSup}" stroke="none"><textPath href="#arcoSup" startOffset="50%" text-anchor="middle">${escapar(TEXTO_SUPERIOR)}</textPath></text>
    <text font-size="${tamInf}" stroke="none"><textPath href="#arcoInf" startOffset="50%" text-anchor="middle">${escapar(nombre)}</textPath></text>
    ${disenoCentral}
  </g>
</svg>`;
}

// ---------- salida ----------
mkdirSync(salida, { recursive: true });
const slug = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^A-Z0-9]+/g, '-').replace(/^-|-$/g, '');
const trabajos = [];
for (const nombre of nombres) {
  if ([...nombre].length > MAX_CARACTERES) {
    console.warn(`⚠ "${nombre}" tiene más de ${MAX_CARACTERES} caracteres: se omite (la web no lo permite).`);
    continue;
  }
  const base = `${idDiseno}_${slug(nombre)}`;
  writeFileSync(join(salida, `${base}.svg`), svgSello(nombre));
  trabajos.push({ nombre, base });
  console.log(`✓ ${base}.svg`);
}

if (opt('png') || opt('relieve')) {
  let chromium;
  try {
    ({ chromium } = await import('playwright'));
  } catch {
    console.error('Para PNG instalá Playwright: npm i playwright && npx playwright install chromium');
    process.exit(1);
  }
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1000, height: 1000 }, deviceScaleFactor: 2 });
  for (const { nombre, base } of trabajos) {
    if (opt('png')) {
      await page.setContent(`<html><body style="margin:0;background:transparent">${svgSello(nombre).replace(/^<\?xml[^>]*>/, '')}</body></html>`);
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: join(salida, `${base}.png`), omitBackground: true, clip: { x: 0, y: 0, width: 1000, height: 1000 } });
      console.log(`✓ ${base}.png (2000 × 2000, transparente)`);
    }
    if (opt('relieve')) {
      await page.setContent(`<html><body style="margin:0">${svgSello(nombre, { conFiltroRelieve: true }).replace(/^<\?xml[^>]*>/, '')}</body></html>`);
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: join(salida, `${base}_relieve.png`), clip: { x: 0, y: 0, width: 1000, height: 1000 } });
      console.log(`✓ ${base}_relieve.png (simulación: comparar con foto real)`);
    }
  }
  await browser.close();
}
