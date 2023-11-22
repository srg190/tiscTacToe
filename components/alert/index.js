import cssProps from "../../functionalities/cssProps.js";
import { selectQuery } from "../targetElements/index.js";

// Requirements
let requirements = {
  Location: "top / bottom (left middile right)",
};
const query = selectQuery();
export class Alert {
  constructor() {
    this.position = "top-middile";
    this.size = "medium";
    this.type = "successfull";
  }
  Size() {
    return {
      sm: "10%",
      md: "15%",
      lg: "20%",
    };
  }
  CreatingAlert() {
    const alert = query.alert;
    alert.style.cssText = cssProps({
      height: "5%",
      width: "40%",
      position: "fixed",
      top: "5%",
      left: "30%",
      right: "30%",
      backgroundColor: "rgb(0, 255, 255)",
      borderLeft: "4px solid rgb(2, 159, 159)",
    });
  }
}
