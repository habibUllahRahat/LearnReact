export default function Text({ addemoji }) {
    const text = addemoji('Hell oh', '✴️✴️')
    return (
        <div>{text}</div>
    )
}
