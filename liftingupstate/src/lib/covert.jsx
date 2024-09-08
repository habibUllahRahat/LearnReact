export function toCelsius(temparature) {
    return ((temparature - 32) * 5) / 9;
}
export function toFarenheit(temparature) {
    return (temparature * 9) / 5 + 32;
}

export const convertTo = (temparatureInput, convert) => {
    const temparature = parseFloat(temparatureInput)

    if (isNaN(temparatureInput)) {
        return '';
    }

    const output = convert(temparature)
    const round = Math.round(output * 1000) / 1000

    return round;
}