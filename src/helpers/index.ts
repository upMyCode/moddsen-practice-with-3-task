import type { Features, Locations } from '../components/LocationMarkers/types';

const getAllSights = (result: Locations) => {
  const list = result.features;
  const sightsList = list.filter(
    (elem: { properties: { name: string } }) => elem.properties.name !== '',
  );

  return sightsList;
};

const chooseUserSights = (sights: Array<Features>, category: string) => {
  if (category === 'all') return sights;

  const sightsList = sights.filter((elem) => {
    const { kinds } = elem.properties;
    const kindsArr: string = kinds.replace(/[,]/g, ' ');
    const kindsList = kindsArr.split(' ');

    return kindsList.includes(category);
  });

  return sightsList;
};

const getCategory = (sight: Features) => {
  const categories = [
    'historic',
    'beaches',
    'religion',
    'burial_places',
    'cultural',
    'user',
    'other',
  ];
  let result;
  const { kinds } = sight.properties;
  if (kinds) {
    const kindsArr: string = kinds.replace(/[,]/g, ' ');
    const kindsList = kindsArr.split(' ');

    const category = kindsList.filter((elem) => !!categories.includes(elem));

    if (category.length === 2) {
      const item = category[1];
      result = item;
    } else {
      const item = category[0];
      result = item;
    }
  }
  return result;
};

export { chooseUserSights, getAllSights, getCategory };
