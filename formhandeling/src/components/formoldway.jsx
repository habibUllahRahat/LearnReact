import { Component } from 'react';

export default class Formoldway extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'JavaScript',
            textarea: 'JavaScript is a hassle',
            library: ['React', 'Vue', 'Angular'],
            selected: 'React',
            isChecked: true,
        };
    }

    handleInput = (e) => {
        const { type, value, checked } = e.target;

        if (type === 'text') {
            this.setState({ title: value });
        } else if (type === 'textarea') {
            this.setState({ textarea: value });
        } else if (type === 'select-one') {
            this.setState({ selected: value });
        } else if (type === 'checkbox') {
            this.setState({ isChecked: checked });
        } else {
            console.log(type);
            console.log(value);
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        const { title, library, selected, textarea, isChecked } = this.state;

        return (
            <>
                <h1>Formoldway</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={title}
                        onChange={this.handleInput}
                    />
                    <br />
                    <textarea
                        value={textarea}
                        onChange={this.handleInput}
                    />
                    <br />
                    <select
                        value={selected}
                        onChange={this.handleInput}
                    >
                        <option value={library[0]}>{library[0]}</option>
                        <option value={library[1]}>{library[1]}</option>
                        <option value={library[2]}>{library[2]}</option>
                    </select>
                    <br />
                    <input
                        type="checkbox"
                        name="check"
                        checked={isChecked}
                        onChange={this.handleInput}
                    />
                    <br />
                    <button type="submit">Submit</button>
                </form>
                <div id="display">
                    <p>Title: {title}</p>
                    <p>Textarea: {textarea}</p>
                    <p>Select: {selected}</p>
                    <p>Checkbox: {isChecked ? 'Checked' : 'Unchecked'}</p>
                </div>
            </>
        );
    }
}
