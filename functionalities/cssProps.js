import kebabToCss from "../components/convert/index.js";
export default function (obj) {
  let str = "";
  for (let key in obj) {
    str += `${kebabToCss[key]}: ${obj[key]};`;
  }
  return str;
}// utils