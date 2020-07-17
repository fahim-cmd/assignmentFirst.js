//How can we convert feet to mile?

function feetToMile (feet){
    const mile = feet/5280;
    return mile;
}
const getFeetToMile = feetToMile(5280);
console.log(getFeetToMile);

//Determining the amount of wood through the function.

function woodCalculator (chair1, table1, bed1){
    const totalChairWood = chair1 * 1;
    const totalTableWood = table1 * 3;
    const totalBedWood   = bed1   * 5;
    const totalNumOfWood = totalChairWood + totalTableWood + totalBedWood ;
    return totalNumOfWood;
}
const result = woodCalculator(1,1,1);
console.log(result);


// How to find out how many bricks will be needed to build a building? 

function brickCalculator (n){
    if( n <= 10 && n >= 1){
        const bricks = n * 15 * 1000;
        return bricks;
    }
    else if ( n >= 11 && n <=20 ){
        const bricks = (10 * 15 * 1000) + ( ( n - 10 ) * 12 * 1000);
        return bricks;
    }
    else if ( n > 20 ){
        const bricks = ( 10 * 15 * 1000) + ( 10 * 12 * 1000) + (( n - 20) * 10 * 1000);
        return bricks;
    }
}
const numberOfBricks = brickCalculator( 11);
console.log( numberOfBricks);


//How we get longest string in a array?

function tinyFriend (arr){
    const longestString = arr [0];
    for ( var i = 0 ; i < arr.length ; i++){
        const updatedstrng =  arr[i].length;
        if( updatedstrng > longestString.length){
            longestString = arr[i];
        }
    }
    return longestString;
}
var friends =[ "sakib", "mashrafi bin murtaza", "Mahmudul hasan mahmudullah vai","tamim iqbal", "mushfiq","rubel"];
console.log(tinyFriend(friends));
