export function getPositiveNumber(value) {
  const integerVal = parseInt(value);
  const floorVal = Math.floor(integerVal);
  const positiveVal = Math.abs(floorVal);
  return positiveVal;
}

export function getPositiveFloat(value) {
  const positiveVal = Math.abs(value);
  return positiveVal;
}