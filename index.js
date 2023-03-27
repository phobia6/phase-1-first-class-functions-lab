// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
  const firstArray = drivers.slice(0,2);
  return firstArray;
}
//const firstDrivers = returnFirstTwoDrivers();
//console.log(newDrivers);

function returnLastTwoDrivers (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    let secondArray = drivers.slice(2);
    return secondArray; 
}
//const lastDrivers = returnLastTwoDrivers();

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function fareMultiplier (fare) {
        return fare * multiplier;
    };
}
function fareDoubler(fare) {
    return fare * 2;
}
function fareTripler(fare) {
    return fare * 3;
}

function selectDifferentDrivers(drivers, fn) {
    if (fn === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    } else if (fn === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    }
}