var marks = [45, 33, 88, 75, 95, 70];
var max = 0;
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        var max = element;
    }
}
console.log(max);