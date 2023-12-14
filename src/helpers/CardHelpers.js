import getLanguage from '../data/GetLanguage';

/* creates an array of objects that work with Card */
export const createCardObjects = (arr) => {
  const newArr =
    arr.length > 0
      ? arr.map((o) => ({
          mainimg: o.find(({ type }) => type === 'mainimg').content,
          header: getLanguage(o.find(({ type }) => type === 'header')),
          intro: getLanguage(o.find(({ type }) => type === 'intro')),
          name: o.find(({ type }) => type === 'name').content,
        }))
      : [];
  return newArr;
};
