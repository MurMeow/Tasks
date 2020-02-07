export  const searchByStates = (listCities, requestedState, foundCity) => {
    let arrCities = Object.keys(listCities);
    let arrayFoundCity = [];
    arrCities.forEach((item, index) => {
        if(listCities[item].state.toUpperCase()===requestedState.toUpperCase()){
            arrayFoundCity.push(arrCities[index])
        }
    });
    if(arrayFoundCity.length!==0){
        foundCity(arrayFoundCity);
    }else{
        foundCity(["The search has not given any results"]);
    }

};