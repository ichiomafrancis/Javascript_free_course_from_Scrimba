let defaultScoreHome = 0;
let defaultScoreGuest = 0;

let homeScore = document.getElementById("homeScore-el");
let guestScore = document.getElementById("guestScore-el");

let result = document.getElementById("result-el");

homeScore.value = defaultScoreHome;
guestScore.value = defaultScoreGuest;

// HOME TEAM SCORE
function addH1() {
  defaultScoreHome += 1;
  homeScore.value = defaultScoreHome;
}

function addH2() {
  defaultScoreHome += 2;
  homeScore.value = defaultScoreHome;
}
function addH3() {
  defaultScoreHome += 3;
  homeScore.value = defaultScoreHome;
}

// GUEST TEAM SCORE
function addG1() {
  defaultScoreGuest += 1;
  guestScore.value = defaultScoreGuest;
}

function addG2() {
  defaultScoreGuest += 2;
  guestScore.value = defaultScoreGuest;
}

function addG3() {
  defaultScoreGuest += 3;
  guestScore.value = defaultScoreGuest;
}

// END THE GAME AND DISPLAY THE RESULT

function endGame() {
  if (homeScore.value > guestScore.value)
    result.innerText = `The home team has won the match with ${
      homeScore.value - guestScore.value
    } points`;
  else if (guestScore.value > homeScore.value)
    result.innerText = `The guest team has won the match with ${
      guestScore.value - homeScore.value
    } points`;
  else
    result.innerText = `There is no winner because the teams are equally matched`;
}

// RESET THE SCORE BOARD
function resetDisplay() {
  homeScore.value = 0;
  guestScore.value = 0;
}

// function addH1() {
//   defaultScoreHome += 1;
//   homeScore.value = defaultScoreHome;
// }

// function addG1() {
//   defaultScoreGuest += 1;
//   guestScore.value = defaultScoreGuest;
// }
