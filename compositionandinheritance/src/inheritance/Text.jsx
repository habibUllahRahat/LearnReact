import Emoji from "./Emoji";


class Text extends Emoji {
    constructor() {
        super()
    }
    render() {
        const newText= this.addemoji('Hell oh','✴️')
        return super.render(newText);
    }
}

export default Text;
