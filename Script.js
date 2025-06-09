function predict() {
  const input = document.getElementById("inputBox").value.trim().toUpperCase();
  const colors = input.split(" ");
  if (colors.length < 3) {
    document.getElementById("result").innerText = "Please enter at least 3 previous colors.";
    return;
  }

  // Basic HGZY-style logic with random weight
  const last = colors[colors.length - 1];
  let nextColor;

  if (last === "G") nextColor = "R";
  else if (last === "R") nextColor = "V";
  else nextColor = "G";

  document.getElementById("result").innerText = "🔮 Next Color Prediction: " + nextColor;
}
