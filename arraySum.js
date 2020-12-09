var numbers = [45, 50, 60, 81, 75, 66];
function getArray(numbers){
        var sum = 0;
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var result = getArray(numbers);
console.log(result);
var total = getArray(numbers);
console.log(total);



