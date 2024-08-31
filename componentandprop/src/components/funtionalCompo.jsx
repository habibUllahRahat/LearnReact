const ClockFn = ({ locale }) => {
    return (
        <>
            <h1>Hello Clock Function</h1>
            <span className="clock">
                Time is {new Date().toLocaleString(locale)}
            </span>
        </>
    )
}

export default ClockFn;
