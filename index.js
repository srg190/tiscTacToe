////////////
import { setTheme } from "./Theme/theme.js";
let i = 0;
const onStart = () => {
  console.log(i++, hello);
};
(() => {
  setTheme();
})();
