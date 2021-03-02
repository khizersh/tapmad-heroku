function checkIsArray(obj) {
  if (Array.isArray(obj)) {
    return true;
  } else {
    return false;
  }
}

function convertInArray(obj) {
  obj = Object.values(obj);

  return obj;
}

function customizingData(parentarray) {
  let mov = [];
  parentarray.map((m) => {
    if (m.IsCategories) {
      if (!checkIsArray(m.Categories)) {
        let list = convertInArray(m.Categories);
        mov.push({ ...m, Categories: list });
      } else {
        mov.push(m);
      }
    } else {
      if (!checkIsArray(m.Videos)) {
        let list = convertInArray(m.Videos);
        mov.push({ ...m, Videos: list });
      } else {
        mov.push(m);
      }
    }
  });

  return mov;
}
export const GolobalService = {
  checkIsArray,
  convertInArray,
  customizingData,
};
