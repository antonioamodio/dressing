'use client';

import { useMemo } from 'react';
import { clothingItems } from '@/lib/clothingData';
import { useClothingStore } from '@/store/useClothingStore';

export const ClothingDetail = () => {
  const { selectedItemId } = useClothingStore();

  const selectedItem = useMemo(
    () => clothingItems.find((item) => item.id === selectedItemId) ?? clothingItems[0],
    [selectedItemId]
  );

  if (!selectedItem) return null;

  return (
    <aside className="detail-panel">
      <header className="detail-panel__header">
        <span className="detail-panel__brand">{selectedItem.brand}</span>
        <h2 className="detail-panel__title">{selectedItem.name}</h2>
        <span className="detail-panel__price">{selectedItem.price}</span>
      </header>
      <p>{selectedItem.description}</p>
      <div>
        <p className="header__subtitle">Colori disponibili</p>
        <div className="detail-panel__options">
          {selectedItem.colors.map((color) => (
            <span key={color} className="badge" style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>
      <div>
        <p className="header__subtitle">Taglie</p>
        <div className="detail-panel__options">
          {selectedItem.sizes.map((size) => (
            <span key={size} className="badge badge--soft">
              {size}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};
