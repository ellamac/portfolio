/*Slices or splits or chunks array of objects into smaller arrays
   so that a new array begins from every new name-type*/
export const chunkDatas = (arrays) => {
  const newArrays = [];
  arrays.forEach((arr) => {
    let n = 0;
    const newArr = [];
    arr.data.forEach((o, i) => {
      if (i !== 0 && o.type === "name") {
        newArr.push(arr.data.slice(n, i));
        n = i;
      }
      if (i === arr.data.length - 1) {
        newArr.push(arr.data.slice(n));
      }
    });
    newArrays.push(newArr);
  });

  return newArrays;
};

export const sortDatas = (arrays) => {
  arrays.forEach((arr) => {
    arr.sort((a, b) => {
      const aDate = a.find(({ type }) => type === "date").content;
      const bDate = b.find(({ type }) => type === "date").content;
      return new Date(bDate) - new Date(aDate);
    });
  });
  return arrays;
};
