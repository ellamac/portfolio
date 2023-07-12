
import Papa from "papaparse";

/*Slices or splits or chunks array of objects into smaller arrays
   so that a new array begins from every new name-type*/
const chunkData = (arr) => {
  let n = 0;
  const newArr = [];
  arr.forEach((o, i) => {
    if (i !== 0 && o.type === "name") {
      newArr.push(arr.slice(n, i));
      n = i;
    }
    if (i === arr.length - 1) {
      newArr.push(arr.slice(n));
    }
  });
  return newArr;
};

export const projectData = Papa.parse(
  "https://docs.google.com/spreadsheets/d/1ZvsFzxtHgEVvCQRLecKeQe5MjBqMgs3VQkoxqgsMW3E/pub?output=csv",
  {
    download: true,
    header: true,
    complete: (results) => {
      return chunkData(results.data);
    },
  }
);

export default projectData;
