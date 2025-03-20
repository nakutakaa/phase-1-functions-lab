
// Calculating distance in blocks from hq
function distanceFromHqInBlocks(pickupPlace) {
  const mainLocation = 42;
  return Math.abs(pickupPlace - mainLocation);
}
// Calculating distance in feet from hq
function distanceFromHqInFeet(pickupPlace) {
  const blocks = distanceFromHqInBlocks(pickupPlace);
  const feetPerBlock = 264;
  return blocks * feetPerBlock;
}
//Calculating distance traveled in feets
function distanceTravelledInFeet(startPoint, destination) {
  const feetPerBlock = 264;
  return Math.abs(destination - startPoint) * feetPerBlock;
}
// fare price
function calculatesFarePrice(startPoint, destination) {
  const distance = distanceTravelledInFeet(startPoint, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}