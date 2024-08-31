console.log(React);
console.log(ReactDOM);
const { useState } = React
const root = document.getElementById("root")

// const helloElement = React.createElement("ul", null, [React.createElement("li", null, "Hello React1"), React.createElement("li", null, "Hello React2"), React.createElement("li", null, "Hello React3")])

let arrays = ["Tomato", "Korma", "Shorma", "Korma", "Shorma", "Korma", "Shorma", "Korma", "Shorma", "Korma", "Shorma", "Korma", "Shorma", "Korma", "Shorma", "Korma", "Shorma", "Korma", "Shorma", "Korma", "Shorma"]

const IncrementButton = () => {
    const [number, setNumber] = useState(0)
    return (
        <div key="1">
            <h1 id="display">{number}</h1>
            <button id="btn" onClick={() => setNumber(number + 1)}>Click</button>
        </div>
    )
}


ReactDOM.render(arrays.map(x => <IncrementButton key={x} />), root)

