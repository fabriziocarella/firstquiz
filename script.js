const correctAnswer = {
  winners: "brazil",
  scorer: "klose",
  first: 1930,
  host: "qatar",
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  let answerOne = event.target.elements["winners"].value;
  console.log(answerOne);
  let answerTwo = event.target.elements["scorer"].value;
  console.log(answerTwo);
  let answerThree = event.target.elements["first"].value;
  console.log(answerThree);
  let answerFour = event.target.elements["host"].value;
  console.log(answerFour);

  let counter = 0;

  console.log(event.target.elements["winners"]);

  if (answerOne == correctAnswer.winners) {
    document.querySelector("label[for='brazil']").classList.toggle("checkRight")
    counter++
  } else if (answerOne == "italy") {
    document.querySelector("label[for='italy']").classList.toggle("checkWrong")
  } else if (answerOne == "france") {
    document.querySelector("label[for='france']").classList.toggle("checkWrong")
  } else if (answerOne == "germany") {
    document.querySelector("label[for='germany']").classList.toggle("checkWrong")
  }

  if (answerTwo == correctAnswer.scorer) {
    document.querySelector("label[for='klose']").classList.toggle("checkRight")
    counter++
  } else if (answerTwo == "pele") {
    document.querySelector("label[for='pele']").classList.toggle("checkWrong")
  } else if (answerTwo == "ronaldo") {
    document.querySelector("label[for='ronaldo']").classList.toggle("checkWrong")
  } else if (answerTwo == "maradona") {
    document.querySelector("label[for='maradona']").classList.toggle("checkWrong")
  }

  if (answerThree == correctAnswer.first) {
    document.querySelector("label[for='1930']").classList.toggle("checkRight")
    counter++
  } else if (answerThree == "1934") {
    document.querySelector("label[for='1934']").classList.toggle("checkWrong")
  } else if (answerThree == "1950") {
    document.querySelector("label[for='1950']").classList.toggle("checkWrong")
  } else if (answerThree == "1938") {
    document.querySelector("label[for='1938']").classList.toggle("checkWrong")
  }

  if (answerFour == correctAnswer.host) {
    document.querySelector("label[for='qatar']").classList.toggle("checkRight")
    counter++
  } else if (answerFour == "mexico") {
    document.querySelector("label[for='mexico']").classList.toggle("checkWrong")
  } else if (answerFour == "usa") {
    document.querySelector("label[for='usa']").classList.toggle("checkWrong")
  } else if (answerFour == "canada") {
    document.querySelector("label[for='canada']").classList.toggle("checkWrong")
  }
  console.log(counter);
});
