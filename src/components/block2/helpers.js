export const searchNearestCity = (listCities, requestedLongitude,requestedLatitude, exemptionSearchCity) => {
    let arrCities = Object.keys(listCities);
    let minDistance = +Infinity;
    let soughtForIndex = null;

    arrCities.forEach((item, index) => {
        let distance = (requestedLongitude - (+listCities[item].longitude)) * (requestedLongitude - (+listCities[item].longitude)) + (requestedLatitude - (+listCities[item].latitude)) * (requestedLatitude - (+listCities[item].latitude));
        distance = Math.abs(distance);
        if (distance < minDistance) {
            minDistance = distance;
            soughtForIndex = index
        }
    });
    return exemptionSearchCity (arrCities[soughtForIndex]);
};
