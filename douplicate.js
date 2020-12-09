var name = [3,5,15,27,15,3,8,6,8];
var uniqeName = [];
for(var i = 0; i < name.length; i++){
    var element = name[i];
    var index =  uniqeName.indexOf(element);
    if(index == -1){
        uniqeName.push(element);
    }
}
console.log(uniqeName);