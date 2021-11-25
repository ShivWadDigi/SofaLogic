//right = right corner
//left = left corner
//center = center


//Object Format 
// {
//     coordinates: {
//         'x': 0,
//         'y': 0,
//         'z': 0
//     },
//     rotation: {
//         'x': 0,
//         'y': 0,
//         'z': 0
//     }
// }
const leftWidth = 0.7;
const rightWidth = 0.7;
const centerWidth = 0.7;
var coordRot = []
var rootObj = {
    coordinates: {
        'x': 0,
        'y': 0,
        'z': 0
    },
    rotation: {
        'x': 0,
        'y': 0,
        'z': 0
    }
}
function checkInput() {
    var userInput = window.prompt("Enter your input (right,left,center): ");
    var coordObject = {}
    if (userInput == 'right' || userInput == 'left' || userInput == 'center') {

        if (coordRot.length == 0) {
            console.log('in if')
            coordObject[userInput] = {
                coordinates: {
                    'x': 0,
                    'y': 0,
                    'z': 0
                },
                rotation: {
                    'x': 0,
                    'y': 0,
                    'z': 0
                }
            }
            coordRot.push(coordObject)
        }
        else {
            var index = document.getElementById("index").value;
            index = parseInt(index);
            let prevComponent = Object.keys(coordRot[index - 1]);
            switch (userInput) {
                case 'right':
                    break;
                case 'left':

                    break;
                case 'center':
                    console.log(coordRot[index - 1][prevComponent].coordinates.x)
                    console.log('Prev: ', prevComponent)
                    if (prevComponent == 'center') {
                        rootObj.coordinates.x = coordRot[index - 1][prevComponent].coordinates.x + centerWidth;
                        rootObj.coordinates.z = coordRot[index - 1][prevComponent].coordinates.z;
                        rootObj.rotation.y = coordRot[index - 1][prevComponent].rotation.y;
                        coordObject[userInput] = rootObj;
                        console.log('Root : ', rootObj)
                        coordRot.push(coordObject);
                        rootObj = {
                            coordinates: {
                                'x': 0,
                                'y': 0,
                                'z': 0
                            },
                            rotation: {
                                'x': 0,
                                'y': 0,
                                'z': 0
                            }
                        }
                    }
                    else if (prevComponent == 'right') {
                        rootObj.coordinates.x = coordRot[index - 1][prevComponent].coordinates.x - rightWidth;
                        rootObj.coordinates.z = coordRot[index - 1][prevComponent].coordinates.z + centerWidth;
                        rootObj.rotation.y = coordRot[index - 1][prevComponent].rotation.y - 90;
                        coordObject[userInput] = rootObj;
                        console.log('Root : ', rootObj)
                        coordRot.push(coordObject);
                        rootObj = {
                            coordinates: {
                                'x': 0,
                                'y': 0,
                                'z': 0
                            },
                            rotation: {
                                'x': 0,
                                'y': 0,
                                'z': 0
                            }
                        }
                    }

                    else if (prevComponent == 'left') {
                        rootObj.coordinates.x = coordRot[index - 1][prevComponent].coordinates.x + centerWidth;
                        rootObj.coordinates.z = coordRot[index - 1][prevComponent].coordinates.z;
                        rootObj.rotation.y = coordRot[index - 1][prevComponent].rotation.y
                        coordObject[userInput] = rootObj;
                        coordRot.push(coordObject);
                        rootObj = {
                            coordinates: {
                                'x': 0,
                                'y': 0,
                                'z': 0
                            },
                            rotation: {
                                'x': 0,
                                'y': 0,
                                'z': 0
                            }
                        }

                    }
                    break;
                default:
                    window.alert('Wrong Input');

                    break;
            }
        }
    }
    else {
        window.alert('Wrong Input');

    }

    console.log(coordRot)
}

window.onload = function () {
    document.getElementById('tb').addEventListener('click', checkInput)
}
