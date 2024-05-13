const dayNumber = (dayNumber) => {
  dayNumber === 1 || dayNumber === 6
    ? console.log(`วันนี้วันหยุด`)
    : dayNumber >= 2 && dayNumber <= 5
    ? console.log(`วันนี้วันทํางาน`)
    : console.log(`Invalid day number`);
};
dayNumber(4);
