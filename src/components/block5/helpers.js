import {initialCities} from '../../constants/ initialCities'

export const addCities = (arrayData, returnObjNewCity, arrayStrNewCities) => {
    let validDataNewCity = {};
    let arrWithoutSpaces = [];
    let strDataNewCity = "";
    arrayData.forEach((item, index)=>{
        let separator = "";
        let arr = item.split(separator);
        let itemWithoutSpaces = [];
        for(let i = 0; i< arr.length; i++){
            if((arr[i]===" " && i===0) || (arr[i]===" " && i===arr.length-1)){
                 arr.splice(i, 1,)
                 i--
            }
            else{itemWithoutSpaces.push(arr[i])}
        }
        arrWithoutSpaces.push(itemWithoutSpaces.join(''));
    });
    strDataNewCity = '"' + arrWithoutSpaces[0] + ", " + arrWithoutSpaces[1] + '", ' + arrWithoutSpaces[2] + ', ' + arrWithoutSpaces[3]
    validDataNewCity = {[arrWithoutSpaces[0]]: { state:  arrWithoutSpaces[1],
                                                longitude: arrWithoutSpaces[2],
                                                latitude: arrWithoutSpaces[3]}};
    let conclusion = false;
    const returnConclusion = (result) => {
        return conclusion = result;
    };
    matchCheck(initialCities, localStorage.getItem("userCity"), strDataNewCity, arrayStrNewCities, returnConclusion);
    return returnObjNewCity(validDataNewCity,strDataNewCity, conclusion)
};

export  const matchCheck = (initialCities, localStorage, strDataNewCity, arrayStrNewCities, returnConclusion) => {
    let conclusion = false;
    if(initialCities.indexOf(strDataNewCity)!==-1 || arrayStrNewCities.indexOf(strDataNewCity)!==-1 || JSON.parse(localStorage).indexOf(strDataNewCity)!==-1){
        conclusion = false;
    }
    else{
        conclusion = true;
    }
    return returnConclusion(conclusion)
};