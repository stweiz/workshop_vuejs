export default function (value) {
    if (typeof value !== "number") {
        return value
    }
    const formatter = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2
    })
    return formatter.format(value)
}

