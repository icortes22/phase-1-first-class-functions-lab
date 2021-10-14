const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
const firstTwoDrivers = drivers.slice(0,2)
const lastTwoDrivers = drivers.slice(-2)
function returnFirstTwoDrivers(){
    return firstTwoDrivers
}
function returnLastTwoDrivers(){
    return lastTwoDrivers
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(integer){
    return function(){
        return integer * integer
    }
}
const fareDoubler = fare => fare * 2
const fareTripler = fare => fare * 3
function selectDifferentDrivers(drivers, selectFunction){
   return selectFunction(drivers)
}