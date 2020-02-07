export const searchCitiesMost = (listCities, param, searchParameters, exemptionSearchParameters) => {
    let arr = [];
    let arrCities = Object.keys(listCities);
    let coordinatesNorthernmost = -Infinity;
    let coordinatesEasternmost = +Infinity;
    let coordinatesSouthernmost  = +Infinity;
    let coordinatesWesternmost  = -Infinity;
    let northernmost = null;
    let easternmost = null;
    let southernmost = null;
    let westernmost = null;
    arrCities.forEach((item,index) => {
        arr.push(listCities[item][param]);
        if(param === "longitude"){
            for(let i = 0; i < arr.length; i++){
                if(arr[i] > coordinatesNorthernmost){
                    coordinatesNorthernmost = arr[i]
                }
                if(arr[i] < coordinatesSouthernmost){
                    coordinatesSouthernmost = arr[i]
                }
            }
        }
        if(param === "latitude"){
            for(let i = 0; i < arr.length; i++){
                if(arr[i] > coordinatesWesternmost){
                    coordinatesWesternmost = arr[i]
                }
                if(arr[i] < coordinatesEasternmost){
                    coordinatesEasternmost = arr[i]
                }
            }
        }
        northernmost = arrCities[arr.indexOf(coordinatesNorthernmost)];
        easternmost = arrCities[arr.indexOf(coordinatesEasternmost)];
        southernmost = arrCities[arr.indexOf(coordinatesSouthernmost)];
        westernmost = arrCities[arr.indexOf(coordinatesWesternmost)];

    });
    if(searchParameters==="northernmost"){
        return exemptionSearchParameters (northernmost)
    }
    if(searchParameters==="easternmost"){
        return exemptionSearchParameters (easternmost)
    }
    if(searchParameters==="southernmost"){
        return exemptionSearchParameters (southernmost)
    }
    if(searchParameters==="westernmost"){
        return exemptionSearchParameters (westernmost)
    }

};
