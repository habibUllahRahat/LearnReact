
export default function TemparatureInput({ temparature, scale, foreignFunctionForSatate }) {
    const scaleName = {
        c: 'Celsius',
        f: 'Farenheit'
    }
    return (
        <div>
            <fieldset>
                <legend >
                    Enter {scaleName[scale]}
                </legend>
                <input type="number" value={temparature} onChange={(e) => foreignFunctionForSatate(e, scale)} />
            </fieldset>

        </div>
    )
}
