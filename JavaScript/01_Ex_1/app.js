function biggestSumOfTwoElements(array) {
    if (array.length === 0) {
        return false;
    } else if (array.length === 1) {
        return array[0];
    } else {
        const array2 = array.sort(function (a, b) {
            return a - b;
        });
        return array2[array2.length - 1] + array2[array2.length - 2];
    }
}

console.log(biggestSumOfTwoElements([1, 2, 3, 4])); // => 7
console.log(biggestSumOfTwoElements([])); // => false
console.log(biggestSumOfTwoElements([76])); // => 76
console.log(biggestSumOfTwoElements([23, 45, 17, 12])); // => 68