const buttonLift = () => {
  const main = document.getElementById("main");
  const button = document.createElement("button");
  button.className = "test";
  const buttonText = document.createTextNode('Lift Player Project!');

  button.appendChild(buttonText);
  main.appendChild(button);
}

export default buttonLift;
