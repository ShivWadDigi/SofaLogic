var finalArray = [{
  none: {
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
  }
}, {
  none: {
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
  }
}];

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

  if (finalArray.length == 2) {
    coordObject[input] = root;
    finalArray.splice(1, 0, coordObject);
  } else {

    coordObject[input] = root;
    finalArray.splice(index, 0, coordObject);

    //adding corner constraints left x right and left x left same for right
    let prevComponent = Object.keys(finalArray[index - 1])[0];
    let nextComponent = Object.keys(finalArray[index + 1])[0];
    console.log(prevComponent, nextComponent)
    if (input == 'right') {

      if (prevComponent == 'left' || prevComponent == 'right') {
        window.alert("Previous compoent is : " + prevComponent);
        finalArray.splice(index, 1);

      }

      else if (nextComponent == 'left' || nextComponent == 'right') {
        window.alert("Next compoent is : " + nextComponent);
        finalArray.splice(index, 1);
      }

    }

    if (input == 'left') {

      if (prevComponent == 'right' || prevComponent == 'left') {
        window.alert("Previous compoent is : " + prevComponent);

        finalArray.splice(index, 1);

      }

      else if (nextComponent == 'right' || nextComponent == 'left') {
        window.alert("Next compoent is : " + nextComponent);

        finalArray.splice(index, 1);

      }

    }
  }



  var flag = "x";
  var leftFlag = 1;
  var rightFlag = 1;


  //calculating component coordinates and rotation
  for (let i = 1; i < finalArray.length; i++) {
    //Taking Previous component and next component
    let prevComponent = Object.keys(finalArray[i - 1])[0];
    let nextComponent = Object.keys(finalArray[i])[0];

    if (prevComponent == "center") {
      if (flag == 'x') {
        finalArray[i][nextComponent].coord['x'] =
          finalArray[i - 1][prevComponent].coord['x'] + 0.8;
        finalArray[i][nextComponent].rotation.y =
          finalArray[i - 1][prevComponent].rotation.y;
        finalArray[i][nextComponent].coord['z'] = finalArray[i - 1][prevComponent].coord['z'];
      }
      else {
        flag = 'z'
        finalArray[i][nextComponent].coord['z'] = finalArray[i - 1][prevComponent].coord['z'] + 0.8;
        finalArray[i][nextComponent].rotation.y = finalArray[i - 1][prevComponent].rotation.y;
        finalArray[i][nextComponent].coord['x'] = finalArray[i - 1][prevComponent].coord['x'];

      }

    } else if (prevComponent == "right") {
      if (rightFlag < 3) {
        rightFlag += 1;
        if (flag == "x") {
          flag = "z";
          finalArray[i][nextComponent].coord['x'] =
            finalArray[i - 1][prevComponent].coord['x'];
          finalArray[i][nextComponent].rotation.y =
            finalArray[i - 1][prevComponent].rotation.y - 90;
          finalArray[i][nextComponent].coord['z'] =
            finalArray[i - 1][prevComponent].coord['z'] + 0.8;
        } else {
          flag = "x";
          finalArray[i][nextComponent].coord['z'] =
            finalArray[i - 1][prevComponent].coord['z'];
          finalArray[i][nextComponent].rotation.y =
            finalArray[i - 1][prevComponent].rotation.y - 90;
          finalArray[i][nextComponent].coord['x'] =
            finalArray[i - 1][prevComponent].coord['x'] - 0.8;
        }
      }
      else if (rightFlag > 2) {
        if (flag == "x") {
          flag = "z";
          finalArray[i][nextComponent].coord['x'] =
            finalArray[i - 1][prevComponent].coord['x'];
          finalArray[i][nextComponent].rotation.y =
            finalArray[i - 1][prevComponent].rotation.y - 90;
          finalArray[i][nextComponent].coord['z'] =
            finalArray[i - 1][prevComponent].coord['z'] - 0.8;
        } else {
          flag = "x";
          finalArray[i][nextComponent].coord['z'] =
            finalArray[i - 1][prevComponent].coord['z'];
          finalArray[i][nextComponent].rotation.y =
            finalArray[i - 1][prevComponent].rotation.y - 90;
          finalArray[i][nextComponent].coord['x'] =
            finalArray[i - 1][prevComponent].coord['x'] - 0.8;
        }
      }
    } else if (prevComponent == "left") {
      if (leftFlag < 3) {
        leftFlag += 1;
        if (flag == "x") {
          flag = "z";
          finalArray[i][nextComponent].coord['x'] =
            finalArray[i - 1][prevComponent].coord['x'];
          finalArray[i][nextComponent].coord['z'] = finalArray[i - 1][prevComponent].coord['z'] + 0.8;
          finalArray[i][nextComponent].rotation.y =
            finalArray[i - 1][prevComponent].rotation.y + 90;

        } else {
          flag = "x";
          finalArray[i][nextComponent].coord['z'] =
            finalArray[i - 1][prevComponent].coord['z'];
          finalArray[i][nextComponent].coord['x'] = finalArray[i - 1][prevComponent].coord['x'] + 0.8;
          finalArray[i][nextComponent].rotation.y =
            finalArray[i - 1][prevComponent].rotation.y + 90;
        }
      }
      else if (leftFlag > 2) {
        if (flag == "x") {
          flag = "z";
          finalArray[i][nextComponent].coord['x'] =
            finalArray[i - 1][prevComponent].coord['x'];
          finalArray[i][nextComponent].coord['z'] = finalArray[i - 1][prevComponent].coord['z'] - 0.8;
          finalArray[i][nextComponent].rotation.y =
            finalArray[i - 1][prevComponent].rotation.y + 90;

        } else {
          flag = "x";
          finalArray[i][nextComponent].coord['z'] =
            finalArray[i - 1][prevComponent].coord['z'];
          finalArray[i][nextComponent].coord['x'] = finalArray[i - 1][prevComponent].coord['x'] - 0.8;
          finalArray[i][nextComponent].rotation.y =
            finalArray[i - 1][prevComponent].rotation.y + 90;
        }
      }

    }
  }
  console.log("Final: ", finalArray);
}

window.onload = function () {
  document.getElementById("tb").addEventListener("click", checkInput);
};
