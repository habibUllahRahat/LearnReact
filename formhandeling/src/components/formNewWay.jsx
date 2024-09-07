import { Component } from 'react'

export default class FormNewWay extends Component {

    state = {
        title: "JavaScript",
        text: "JavaScript is a hassle",
        library: ["React", "Vue", "Anguler"],
        selected: "React",
        isChecked: true
    }

    handleInput = (e) => {

        // const { name, value, type, checked } = e.target;
        // this.setState({
        //     [name]: type === 'checkbox' ? checked : value,
        // });

        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
    }
    render() {
        const { title, selected, text, isChecked } = this.state
        return (
            <>
                <h1>FormNewWay</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name="title"
                        onChange={this.handleInput}
                        value={title} />

                    <br />

                    <textarea
                        name="text"
                        value={text}
                        onChange={this.handleInput} />

                    <br />
                    <select
                        value={selected}
                        name="selected"
                        onChange={this.handleInput}
                        selected={selected}>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Anguler">Anguler</option>
                    </select>
                    <br />
                    {/* <input 
                    type='checkbox' 
                    name='isChecked' 
                    checked={isChecked} 
                    onChange={this.handleInput} /> */}
                    <br />
                    <button type='submit'>Submit</button>
                </form>

                <div id='display'>
                    Title:{title}
                    <br />
                    Textarea:{text}
                    <br />
                    Select:{selected}
                    <br />
                    Checkbox:{isChecked ? 'checked' : 'not Checked'}
                </div>
            </>
        )
    }
}

