export default function BoilVerdict({ temparature = 0 }) {
    return (
        temparature >= 80 ? temparature >= 100 ? <h1>Water is evaporating </h1> : <h1>Water is boiling</h1> : temparature <= 0 ? <h1>Water is Freezing</h1> : <h1>Water is not Boiling</h1>
    )
}