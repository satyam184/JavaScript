const LeapYear = (yr) => {
  return (yr % 4 == 0 && yr % 100 != 0) || yr % 400 == 0
    ? "Leap year"
    : "Not a leap year";
};

console.log(LeapYear(2000))