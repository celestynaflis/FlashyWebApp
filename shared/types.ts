export interface FlashCard {
  front: string;
  back: string;
  isLearned: boolean;
}

export interface FlashCardsCollection {
  collectionName: string;
  flashCardsIds: string[];
  categoryId: string;
  color: number;
}

export interface CollectionCategory {
  categoryName: string;
}

export enum FlashCardColors {
  pink,
  orange,
  yellow,
  green,
  blue
}
