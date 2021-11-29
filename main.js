var finalArray = [];

function checkInput() {
  var coordObject = {};
  var root = {
    coord: {
      x: 0,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
  };
  var input = document.querySelector('input[name="rate"]:checked').value;
  var index = document.getElementById("index").value;
  index = parseInt(index);
  if (finalArray.length == 0) {
    coordObject[input] = root;
    finalArray.splice(1, 0, coordObject);
  } else {
    coordObject[input] = root;
    finalArray.splice(index, 0, coordObject);
  }
  var flag = "x";

  for (let i = 1; i < finalArray.length; i++) {
    let prevComponent = Object.keys(finalArray[i - 1])[0];
    let nextComponent = Object.keys(finalArray[i])[0];
    if (prevComponent == "center") {
      finalArray[i][nextComponent].coord[flag] =
        finalArray[i - 1][prevComponent].coord[flag] + 0.7;
      finalArray[i][nextComponent].rotation.y =
        finalArray[i - 1][prevComponent].rotation.y;
    } else if (prevComponent == "right") {
      if (flag == "x") {
        flag = "z";
      } else flag = "x";
      console.log(finalArray[i][nextComponent].coord)
      finalArray[i][nextComponent].coord[flag] =
        finalArray[i - 1][prevComponent].coord[flag] - 0.9;
      finalArray[i][nextComponent].rotation.y =
        finalArray[i - 1][prevComponent].rotation.y - 90;
    } else if (prevComponent == "left") {
      if (flag == "x") {
        flag = "z";
      } else flag = "x";
      finalArray[i][nextComponent].coord[flag] =
        finalArray[i - 1][prevComponent].coord[flag] - 0.9;
      finalArray[i][nextComponent].rotation.y =
        finalArray[i - 1][prevComponent].rotation.y + 90;
    }
  }
  console.log("Final: ", finalArray);
}

window.onload = function () {
  document.getElementById("tb").addEventListener("click", checkInput);
};
