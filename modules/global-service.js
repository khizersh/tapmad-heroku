import { Cookie } from "../services/cookies";

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
function authHeaders(token = null) {
  return {
    Authorization: Cookie.getCookies("content-token") || token
  };
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



 function nFormatter(num, digits) {
  var si = [
    {
      value: 1,
      symbol: "",
    },
    {
      value: 1e3,
      symbol: "k",
    },
    {
      value: 1e6,
      symbol: "M",
    },
    {
      value: 1e9,
      symbol: "B",
    },
    {
      value: 1e12,
      symbol: "T",
    },
    {
      value: 1e15,
      symbol: "P",
    },
    {
      value: 1e18,
      symbol: "E",
    },
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}


export const GlobalService = {
  checkIsArray,
  convertInArray,
  customizingData,
  authHeaders,
  nFormatter
};
