function reverseString(str){
    var reverse = "";
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
 statment = "Hello alien bhai brother";
 var forAlien = reverseString(statment);
 console.log(forAlien);