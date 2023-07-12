/* creates an array of objects that work with Card */
export const createCardObjects = (arr) => {
  const newArr =
    arr.length > 0
      ? arr.map((o) => ({
          mainimg: o.find(({ type }) => type === "mainimg").content,
          header: o.find(({ type }) => type === "header").content,
          intro: o.find(({ type }) => type === "intro").content,
          name: o.find(({ type }) => type === "name").content,
        }))
      : [];
  return newArr;
};
