var myArray = [25, 8, 7, 41, -5, 3, 12, 34]
myArray.sort(function(a, b) {
    return a - b;
})

console.log(myArray[myArray.length - 3]);