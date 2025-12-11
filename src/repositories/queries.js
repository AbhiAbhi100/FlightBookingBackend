function addRawLockFlights(flightId){
    return `Select * from flights where Flights.id = ${flightId} for update` ;
}

export {addRawLockFlights}