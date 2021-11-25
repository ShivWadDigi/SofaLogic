var finalArray = ["none", "none"];

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
    console.log(coordObject);
  } else {
    coordObject[input] = root;

    finalArray.splice(index, 0, coordObject);
  }
  for (let i = 1; i < finalArray.length - 1; i++) {}
  console.log(finalArray);
}

window.onload = function () {
  document.getElementById("tb").addEventListener("click", checkInput);
};
