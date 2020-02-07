export const returnStrStates = (listCities, exemptionStrStates) => {
    let arrayState = []
    let arrCities = Object.keys(listCities);
    arrCities.forEach((item,index) => {
        if(arrayState.indexOf(listCities[item].state)===-1){
            arrayState.push(listCities[item].state);
        }
    });
    return exemptionStrStates(arrayState.join(" "), arrayState.join(" ").length);
};