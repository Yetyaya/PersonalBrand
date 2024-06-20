export function currencyFormat(val) {
  if (val) {
    return Number(val).toLocaleString()
  }
}
