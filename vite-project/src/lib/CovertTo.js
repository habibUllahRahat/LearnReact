export const toCelsius = (temp) => {
    return (temp - 32) * 1.8
}
export const toFarenheit = (temp) => {
    return (temp * 1.8) + 32
}

export const convertToFunc = (temp, func) => {
    const output = func(temp)
    return output.toPrecision(4
    )
}