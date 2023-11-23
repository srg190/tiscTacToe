import { data } from "./clickData.js";
export const onClickWindow = (e) => {
  const { x, y } = e;
  let cordinate = [x, y];
  data.push(cordinate);
  // console.log(data[data.length - 1]);
};
