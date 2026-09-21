// Kuupäeva vormindamise funktsioon
const dateFormattedET = function(formatType) {
    let timeNow = new Date();
    
    const monthNamesET = [
        "jaanuar", "veebruar", "märts", "aprill", "mai", "juuni",
        "juuli", "august", "september", "oktoober", "november", "detsember"
    ];
    
    const folkMonthNamesET = [
        "näärikuu", "küünlakuu", "harjakuu", "mahlakuu", "lehekuu", "pärnakuu",
        "heinakuu", "lõikuskuu", "mihklikuu", "viimakuu", "talvekuu", "jõulakuu"
    ];

    let monthName = monthNamesET[timeNow.getMonth()];
    if (formatType === 1) {
        monthName = folkMonthNamesET[timeNow.getMonth()];
    }

    return timeNow.getDate() + ". " + monthName + " " + timeNow.getFullYear();
}
// Nädalapäeva funktsioon
const weekDayET = function() {
    let timeNow = new Date();
    let dayIndex = timeNow.getDay();
    const dayNamesET = [
        "pühapäev", "esmaspäev", "teisipäev", "kolmapäev",
        "neljapäev", "reede", "laupäev"
    ];
    return dayNamesET[dayIndex];
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

    return hourNow + ":" + minuteNow + ":" + secondNow;
}

// Ekspordime funktsioonid
module.exports = {
    dateFormattedET: dateFormattedET,
    weekDayET: weekDayET,
    timeFormattedET: timeFormattedET
}