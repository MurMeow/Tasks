export const convertDataToObject = (initialCities, addState, arrayStrUserCity) => {
    let listCities = {};
    let allCities = []
    // console.log(arrayStrUserCity)
    if(arrayStrUserCity===undefined){
        allCities = initialCities
    }else{
        allCities= initialCities.concat(arrayStrUserCity);
    }
    allCities.map((item)=>{
        let separator = "";
        let arr = item.split(separator);
        let arrayWithoutSpaces = [];
        arr.map((item, index)=>{
            if(item!==`"`){
               return  arrayWithoutSpaces.push(item)
            }
        });
        let re = /\s*,\s*/;
        let cityCoordinates = arrayWithoutSpaces.join('').split(re);
       return  listCities =  {...listCities,
            [cityCoordinates[0]] : {state: cityCoordinates[1], longitude: cityCoordinates[2], latitude : cityCoordinates[3]}};
    });
    return addState(listCities)
};





