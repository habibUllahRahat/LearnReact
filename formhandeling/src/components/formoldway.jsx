import { Component } from 'react'

export default class Formoldway extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "JavaScript",
            textarea: "JavaScript is a hassle",
            library: ["React", "Vue", "Anguler"],
            selected: "React",
            isChecked: true
        }
    }
    handleInput = (e) => {
        e.preventDefault()

        if (e.target.type === "text") {
            this.setState({
                title: e.target.value
            })
        } else if (e.target.type === "textarea") {
            this.setState({
                textarea: e.target.value
            })
        } else if (e.target.type === "select-one") {
            this.setState({
                selected: e.target.value
            })
        } else if (e.target.type === "checkbox") {
            this.setState({
                isChecked: e.target.value
            })
        } else {
            console.log(e.target.type);
            console.log(e.target.value);
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
    }
    render() {
        const { title, library, selected, textarea, isChecked } = this.state
        return (
            <>
                <h1>Formoldway</h1>
                <form onSubmit={() => this.handleSubmit(event)}>
                    <input type='text' name={"title"} onChange={() => this.handleInput(event)} />
                    <br />
                    <textarea type='textarea' name={"textarea"} onChange={() => this.handleInput(event)} />
                    <br />
                    <select name={"library"} onChange={() => this.handleInput(event)} selected={selected}>
                        <option value={library[0]}>{library[0]}</option>
                        <option value={library[1]}>{library[1]}</option>
                        <option value={library[1]}>{library[2]}</option>
                    </select>
                    <br />
                    <input type='checkbox' name='check' value={isChecked} onChange={() => this.handleInput(event)} />
                    <br />
                    <button type='submit'>Submit</button>
                </form>
                <div id='display'>
                    Title:{title}
                    <br />
                    Textarea:{textarea}
                    <br />
                    Select:{selected}
                    <br />
                    Checkbox:{isChecked}
                </div>
            </>
        )
    }
}

