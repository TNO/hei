import pharma from '../assets/pharma.webp';
import nutrition from '../assets/nutrition.webp';
import beverage from '../assets/beverage.webp';

export const resolveImg = (label: string, img: string) =>
  label === 'pharma'
    ? pharma
    : label === 'nutrition'
    ? nutrition
    : label === 'beverage'
    ? beverage
    : img;
