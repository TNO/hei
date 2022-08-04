import pharma from '../assets/pharma.webp';
import nutrition from '../assets/nutrition.webp';
import beverage from '../assets/beverage.webp';

export const resolveImg = (url: string, img: string) =>
  url === 'pharma' ? pharma : url === 'nutrition' ? nutrition : url === 'beverage' ? beverage : img;
