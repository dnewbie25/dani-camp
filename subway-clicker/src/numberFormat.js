export function numberFormat (value) {
  return new Intl.NumberFormat({ minimumFractionDigits: 0 }).format(value)
}
