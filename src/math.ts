import Big from "big.js";

export function addition(a: number, b: number) {
  return Big(a).plus(b).toNumber();
}

export function subtraction(a: number, b: number) {
  return Big(a).minus(b).toNumber();
}

export function multiplication(a: number, b: number) {
  return Big(a).times(b).toNumber();
}

export function division(a: number, b: number) {
  return Big(a).div(b).toNumber();
}

export function percentage(a: number, b: number) {
  return Big(b).div(a).times(100).round(2).toNumber();
}
