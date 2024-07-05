function calculateTotalInRubles(rubles, dollars, exchangeRate) {
    let dollarsInRubles = dollars * exchangeRate;
    
    let totalInRubles = rubles + dollarsInRubles;

    console.log(`Bütün depozitlər üzrə məbləğ: ${totalInRubles} rubl`);
}

let rubleAccount = 1200;
let dollarAccount = 20;
let exchangeRate = 75;

calculateTotalInRubles(rubleAccount, dollarAccount, exchangeRate);