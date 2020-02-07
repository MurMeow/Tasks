export const groupData = (listCities,  returnArrayData) => {
    let arrayDataState = [];
    let arrayDataCount = [];
    let arrCities = Object.keys(listCities);

    arrCities.forEach((item,index)=>{
        if(arrayDataState.indexOf(listCities[item].state)===-1){
            arrayDataState.push(listCities[item].state)
            arrayDataCount.push(1)
        }
        else{
            arrayDataCount[arrayDataState.indexOf(listCities[item].state)] = +arrayDataCount[arrayDataState.indexOf(listCities[item].state)] + 1;
        }

    });
    return returnArrayData(arrayDataState,arrayDataCount);
};
