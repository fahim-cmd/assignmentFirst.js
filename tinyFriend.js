//How we get longest string in array

function tinyFriend (arr){
    var longestString = arr[0];
    for ( var i = 0; i < arr.length; i++){
        var updatedstrng =  arr[i].length;
        if( updatedstrng > longestString.length){
            longestString = arr[i];
        }
    }
    return longestString;
}
var friends =[ "sakib", "mashrafi bin murtaza", "Mahmudul hasan mahmudullah vai","tamim iqbal", "mushfiq","rubel"];
console.log(tinyFriend(friends));