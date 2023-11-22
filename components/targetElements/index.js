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
    backContainer: document.querySelector(".back"),
    backIcon: document.querySelector("#img-1"),
    playOption: document.querySelector(".play-option"),
    table: document.querySelector("table"),
    tableRow: document.querySelectorAll("tr"),
    tableData: document.querySelectorAll("td p"),
    displayPlayer: document.querySelector(".display-player"),
    playerCards: document.querySelectorAll(".player-card"),
    player: document.querySelectorAll(".player"),
    ticGrid: document.querySelector(".grid"),
    alert: document.querySelector(".alert"),
    // getDataById: document.getElementById(id),
  };
};
