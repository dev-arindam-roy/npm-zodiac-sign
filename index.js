module.exports = {
    myZodiac(getDob) {
        let theDob = new Date(getDob);
        let zodiac =['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
        let last_day =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
        let day = theDob.getDate();
        let month = theDob.getMonth();
        return (day > last_day[month]) ? zodiac[month*1 + 1] : zodiac[month];
    }
}