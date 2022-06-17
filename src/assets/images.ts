import pharma from '../assets/pharma.webp';
import nutrition from '../assets/nutrition.webp';
import supplement from '../assets/supplement.webp';

export const resolveImg = (url: string, img: string) =>
  url === 'pharma'
    ? pharma
    : url === 'nutrition'
    ? nutrition
    : url === 'supplement'
    ? supplement
    : img;
