const dateFormattedET = function(monthType) {
    let timeNow = new Date();
    
    const monthNamesET = [
        "jaanuar", "veebruar", "märts", "aprill", "mai", "juuni",
        "juuli", "august", "september", "oktoober", "november", "detsember"
    ];
    
    const folkMonthNamesET = [
        "näärikuu", "küünlakuu", "harjakuu", "mahlakuu", "lehekuu", "pärnakuu",
        "heinakuu", "lõikuskuu", "mihklikuu", "viimakuu", "talvekuu", "jõulukuu"
    ];

    let monthName = monthNamesET[timeNow.getMonth()];
    if (monthType === 1 || monthType === true) {
    monthName = folkMonthNamesET[timeNow.getMonth()];
    }

    return timeNow.getDate() + ". " + monthName + " " + timeNow.getFullYear();
}

// Kellaaja funktsioon
const timeFormattedET = function() {
    let timeNow = new Date();
    let hourNow = timeNow.getHours();
    let minuteNow = timeNow.getMinutes();
    let secondNow = timeNow.getSeconds();

    if (hourNow < 10) { hourNow = "0" + hourNow; }
    if (minuteNow < 10) { minuteNow = "0" + minuteNow; }
    if (secondNow < 10) { secondNow = "0" + secondNow; }

    let timeFormatted = hourNow + ":" + minuteNow + ":" + secondNow;
    return timeFormatted;
}

// Nädalapäeva funktsioon
const weekDayET = function() {
    let dayIndex = new Date().getDay();
    const dayNamesET = [
        "pühapäev", "esmaspäev", "teisipäev", "kolmapäev", 
        "neljapäev", "reede", "laupäev"
    ];
    return dayNamesET[dayIndex];
}

module.exports = {
    fullDate: dateFormattedET,
    fullTime: timeFormattedET,
    weekDay: weekDayET
};