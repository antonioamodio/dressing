'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import { clothingCategories, clothingItems } from '@/lib/clothingData';
import { useClothingStore } from '@/store/useClothingStore';

const readableCategory: Record<string, string> = {
  all: 'Tutto',
  tops: 'Top',
  bottoms: 'Bottom',
  outerwear: 'Cappotti',
  shoes: 'Scarpe'
};

type ClothingListProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ClothingList = ({ isOpen, onClose }: ClothingListProps) => {
  const {
    selectedCategory,
    selectedItemId,
    highlightedItemId,
    setCategory,
    setSelectedItem,
    highlightItem,
    clearHighlight
  } = useClothingStore();

  const filters = useMemo(() => ['all', ...clothingCategories] as Array<'all' | typeof clothingCategories[number]>, []);

  const filteredItems = useMemo(
    () =>
      selectedCategory === 'all'
        ? clothingItems
        : clothingItems.filter((item) => item.category === selectedCategory),
    [selectedCategory]
  );

  const handleClose = () => {
    clearHighlight();
    onClose();
  };

  const handleSelect = (itemId: string) => {
    setSelectedItem(itemId);
    handleClose();
  };

  return (
    <>
      <div
        className={`selector-overlay${isOpen ? ' selector-overlay--visible' : ''}`}
        onClick={handleClose}
        role="presentation"
        aria-hidden={!isOpen}
      />
      <aside
        id="clothing-selector-panel"
        className={`clothing-drawer${isOpen ? ' clothing-drawer--open' : ''}`}
        role="dialog"
        aria-modal={isOpen}
        aria-hidden={!isOpen}
        aria-label="Selettore capi"
        tabIndex={isOpen ? 0 : -1}
      >
        <header className="clothing-drawer__header">
          <h2>Guardaroba</h2>
          <button type="button" className="drawer-close" onClick={handleClose} aria-label="Chiudi guardaroba">
            ×
          </button>
        </header>
        <div className="list-panel">
          <div className="filter-bar">
            <div className="category-scroll" role="tablist" aria-label="Categorie abbigliamento">
              {filters.map((filter) => {
                const isActive = selectedCategory === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`category-pill${isActive ? ' category-pill--active' : ''}`}
                    onClick={() => setCategory(filter)}
                  >
                    {readableCategory[filter] ?? filter}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="clothing-grid">
            {filteredItems.map((item) => {
              const isActive = item.id === selectedItemId;
              const isHighlighted = item.id === highlightedItemId;

              return (
                <button
                  key={item.id}
                  type="button"
                  className={`clothing-card${isActive ? ' clothing-card--active' : ''}${
                    isHighlighted ? ' clothing-card--highlight' : ''
                  }`}
                  onClick={() => handleSelect(item.id)}
                  onMouseEnter={() => highlightItem(item.id)}
                  onMouseLeave={clearHighlight}
                >
                  <Image
                    src={item.imageUrl}
                    alt={`${item.name} ${item.brand}`}
                    width={300}
                    height={400}
                    className="clothing-card__image"
                  />
                  <div className="clothing-card__meta">
                    <span className="clothing-card__brand">{item.brand}</span>
                    <span className="clothing-card__name">{item.name}</span>
                    <span className="clothing-card__price">{item.price}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};
