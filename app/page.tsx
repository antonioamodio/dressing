'use client';

import { useMemo, useRef, useState } from 'react';
import { AvatarCanvas } from '@/components/AvatarCanvas';
import { ClothingDetail } from '@/components/ClothingDetail';
import { ClothingList } from '@/components/ClothingList';
import { clothingItems } from '@/lib/clothingData';
import { useClothingStore } from '@/store/useClothingStore';

export default function Home() {
  const { selectedItemId } = useClothingStore();
  const [isSelectorOpen, setSelectorOpen] = useState(false);
  const selectorTriggerRef = useRef<HTMLButtonElement>(null);

  const selectedItem = useMemo(
    () => clothingItems.find((item) => item.id === selectedItemId) ?? clothingItems[0],
    [selectedItemId]
  );

  const baseColor = selectedItem?.baseColor ?? '#d7cfc3';
  const accentColor = selectedItem?.accentColor;

  const openSelector = () => setSelectorOpen(true);
  const closeSelector = () => {
    setSelectorOpen(false);
    selectorTriggerRef.current?.focus();
  };

  return (
    <main>
      <div className="page">
        <header className="header">
          <span className="header__subtitle">Dressing Studio</span>
          <h1 className="header__title">Prova outfit reali su avatar 3D.</h1>
          <p className="header__description">Scorri i capi di Zara, H&amp;M e altri brand. Cambia look e vedi subito l&apos;effetto sull&apos;avatar.</p>
        </header>

        <section className="layout">
          <div className="avatar-panel">
            <AvatarCanvas baseColor={baseColor} accentColor={accentColor} />
          </div>
          <div className="layout__sidebar">
            <ClothingDetail />
            <button
              type="button"
              className="selector-trigger"
              onClick={openSelector}
              aria-expanded={isSelectorOpen}
              aria-controls="clothing-selector-panel"
              ref={selectorTriggerRef}
            >
              Apri guardaroba
            </button>
          </div>
        </section>
        <ClothingList isOpen={isSelectorOpen} onClose={closeSelector} />
      </div>
    </main>
  );
}
