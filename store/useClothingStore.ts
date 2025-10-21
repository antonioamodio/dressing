'use client';

import { create } from 'zustand';
import type { ClothingCategory } from '@/lib/clothingData';
import { clothingItems } from '@/lib/clothingData';

export type ClothingState = {
  selectedCategory: 'all' | ClothingCategory;
  selectedItemId: string | null;
  highlightedItemId: string | null;
};

export type ClothingActions = {
  setCategory: (category: 'all' | ClothingCategory) => void;
  setSelectedItem: (id: string) => void;
  clearHighlight: () => void;
  highlightItem: (id: string | null) => void;
};

const initialState: ClothingState = {
  selectedCategory: 'all',
  selectedItemId: clothingItems[0]?.id ?? null,
  highlightedItemId: null
};

export const useClothingStore = create<ClothingState & ClothingActions>((set) => ({
  ...initialState,
  setCategory: (selectedCategory) =>
    set(() => {
      const nextItem =
        selectedCategory === 'all'
          ? clothingItems[0] ?? null
          : clothingItems.find((item) => item.category === selectedCategory) ?? null;

      return {
        selectedCategory,
        selectedItemId: nextItem?.id ?? null,
        highlightedItemId: null
      };
    }),
  setSelectedItem: (selectedItemId) => set(() => ({
    selectedItemId,
    highlightedItemId: null
  })),
  highlightItem: (highlightedItemId) => set(() => ({ highlightedItemId })),
  clearHighlight: () => set(() => ({ highlightedItemId: null }))
}));
