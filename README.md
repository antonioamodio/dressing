# Dressing Studio

Esperienza Next.js mobile-first per la prototipazione di outfit su avatar 3D.

## Stack

- [Next.js 14](https://nextjs.org/) con App Router
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) e Drei per la scena 3D
- [Zustand](https://github.com/pmndrs/zustand) per lo stato client-side

## Funzionalità

- Canvas 3D interattivo con avatar stilizzato che ruota lentamente
- Selezione di capi da brand come Zara, H&M e Uniqlo con anteprime e dettagli
- Layout mobile-first che si espande in griglia su viewport più ampie
- Overlay informativo e palette colori dinamica in base al capo selezionato

## Script

```bash
npm install
npm run dev
```

Lancia l'app su `http://localhost:3000`.

## Note

- Le immagini dei capi sono caricate da CDN ufficiali dei retailer.
- Puoi sostituire i dati demo in `lib/clothingData.ts` con integrazioni reali o API proprietarie.
