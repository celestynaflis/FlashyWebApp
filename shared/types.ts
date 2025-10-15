export interface Category {
  id: string;
  categoryName: string;
}

export interface Set {
  id: string;
  setName: string;
  flashCardsIds: string[];
}

export interface FlashCard {
  front: string;
  back: string;
  isLearned: boolean;
  categoryId: string;
}
