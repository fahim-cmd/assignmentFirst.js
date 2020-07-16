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