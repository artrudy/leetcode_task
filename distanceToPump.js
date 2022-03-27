const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let result = ((mpg * fuelLeft) / distanceToPump) >= 1? true: false;
  return result
};
