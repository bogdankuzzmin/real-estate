export const APARTMENT_COUNT_PER_STEP = 6;

export const SortType = {
  PRICE_UP: 'price-up',
  PRICE_DOWN: 'price-down',
  NEWEST: 'newest',
  SQUARE: 'square',
  ROOMS: 'rooms',
};

export const priceValue = {
  'low': {
    min: 0,
    max: 100000
  },
  'below-average': {
    min: 100000,
    max: 500000
  },
  'average': {
    min: 500000,
    max: 1000000
  },
  'above-average': {
    min: 1000000,
    max: 2000000
  },
  'high': {
    min: 2000000,
    max: Infinity
  },
};

export const roomsFilter = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4-more',
    label: '4+',
  },
];

export const typeFilters = [
  {
    value: 'apartment',
    label: 'Apartment',
  },
  {
    value: 'house',
    label: 'House',
  },
  {
    value: 'room',
    label: 'Room',
  },
];
