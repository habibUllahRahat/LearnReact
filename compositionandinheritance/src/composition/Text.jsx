export default function Text({ addemoji, addbrackets }) {
    const text = addemoji('Hell oh', '✴️✴️')
    const newText = addbrackets(text)
    return (
        <div>{newText}</div>
    )
}
