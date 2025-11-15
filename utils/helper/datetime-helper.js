function compareTimeStrings(timeString1, timeString2) {
    let dateTime1 = new Date(timeString1);
    let dateTime2 = new Date(timeString2);
    return dateTime1.getTimeme() > dateTime2.getTime();
}

export { compareTimeStrings };