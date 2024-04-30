numbers = [23, 55, 12, 14, 69, 60, 80];
let newarreven = [];
let oddelement = [];
function filterArray(arr, callback) {

    arr.forEach((element) => {
        let n = callback(element)
        if (n === true) {
            newarreven.push(element);
        }
        if (n === false) {
            oddelement.push(element);
        }

    })

    function callback(element) {
        if (element % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

filterArray(numbers);
console.log('array is', numbers)
console.log("filtered even and odd element array are", newarreven, oddelement);
