import type { Features, Locations } from '../components/LocationMarkers/types';

const getAllSights = (result: Locations) => {
  const list = result.features;

  const sightsList = list.filter(
    (elem: { properties: { name: string } }) => elem.properties.name !== '',
  );

  return sightsList;
};

const getReligionSights = (sights: Array<Features>) => {
  const RELIGION = 'religion';

  const religionList = sights.filter((elem) => {
    const { kinds } = elem.properties;
    const kindsArr: string = kinds.replace(/[,]/g, ' ');
    const kindsList = kindsArr.split(' ');

    return kindsList.includes(RELIGION);
  });

  return religionList;
};

const getBeachesSights = (sights: Array<Features>) => {
  const BEACHES = 'beaches';

  const beachesList = sights.filter((elem) => {
    const { kinds } = elem.properties;
    const kindsArr: string = kinds.replace(/[,]/g, ' ');
    const kindsList = kindsArr.split(' ');

    return kindsList.includes(BEACHES);
  });

  return beachesList;
};

const getHistoricSights = (sights: Array<Features>) => {
  const HISTORIC = 'historic';

  const historicList = sights.filter((elem) => {
    const { kinds } = elem.properties;
    const kindsArr: string = kinds.replace(/[,]/g, ' ');
    const kindsList = kindsArr.split(' ');

    return kindsList.includes(HISTORIC);
  });

  return historicList;
};

const getCulturalSights = (sights: Array<Features>) => {
  const CULTURAL = 'cultural';

  const culturalList = sights.filter((elem) => {
    const { kinds } = elem.properties;
    const kindsArr: string = kinds.replace(/[,]/g, ' ');
    const kindsList = kindsArr.split(' ');

    return kindsList.includes(CULTURAL);
  });

  return culturalList;
};

const getBurialSights = (sights: Array<Features>) => {
  const BURIAL_PLACES = 'burial_places';

  const burialList = sights.filter((elem) => {
    const { kinds } = elem.properties;
    const kindsArr: string = kinds.replace(/[,]/g, ' ');
    const kindsList = kindsArr.split(' ');

    return kindsList.includes(BURIAL_PLACES);
  });

  return burialList;
};

const chooseUserSights = (sights: Array<Features>, category: string) => {
  let categoryList = [];

  switch (category) {
    case 'religion': {
      categoryList = getReligionSights(sights);
      break;
    }
    case 'beaches': {
      categoryList = getBeachesSights(sights);
      break;
    }
    case 'historic': {
      categoryList = getHistoricSights(sights);
      break;
    }
    case 'cultural': {
      categoryList = getCulturalSights(sights);
      break;
    }
    case 'burial': {
      categoryList = getBurialSights(sights);
      break;
    }
    default: {
      categoryList = sights;
      break;
    }
  }

  return categoryList;
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

export {
  chooseUserSights,
  getAllSights,
  getBeachesSights,
  getBurialSights,
  getCategory,
  getCulturalSights,
  getHistoricSights,
  getReligionSights,
};
