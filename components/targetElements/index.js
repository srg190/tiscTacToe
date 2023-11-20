export const selectQuery = () => {
  return {
    root: document.querySelector("#root"),
    container: document.querySelector(".container"),
    body: document.querySelector("body"),
    mode: document.querySelector(".mode"),
    modeContainer: document.querySelector(".mode-container"),
    optionCard: document.querySelector(".option-card"),
    optionCards: document.querySelectorAll(".option-card"),
    welcomeHead: document.querySelector(".head"),
  };
};
