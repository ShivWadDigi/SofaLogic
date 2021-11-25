var finalArray = [{ none: "" }, { none: "" }];

function checkInput() {
  var coordObject = {};
  var root = {
    coordinates: {
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
  if (finalArray.length == 2) {
    coordObject[input] = root;
    finalArray.splice(1, 0, coordObject);
  } else {
    coordObject[input] = root;
    finalArray.splice(index, 0, coordObject);
  }
  var flag = "x";
  for (let i = 1; i < finalArray.length - 1; i++) {
    let prevComponent = Object.keys(finalArray[i - 1]);
    if (prevComponent == "center") {
      finalArray[i][input].coordinates[flag] =
        finalArray[i - 1][input].coordinates[flag] + 0.7;
    } else if (prevComponent == "right") {
      if (flag == "x") {
        flag = "z";
      } else flag = "x";
    } else if (prevComponent == "left") {
      if (flag == "x") {
        flag = "z";
      } else flag = "x";
    }
  }
  console.log("Final: ", finalArray);
}

window.onload = function () {
  document.getElementById("tb").addEventListener("click", checkInput);
};
