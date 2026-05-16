export type WeightedItem<T> = {
  item: T;
  weight: number;
};

export function weightedRandom<T>(items: WeightedItem<T>[]): T {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  let roll = Math.random() * totalWeight;

  for (const item of items) {
    roll -= item.weight;
    if (roll <= 0) {
      return item.item;
    }
  }

  return items[items.length - 1].item;
}
