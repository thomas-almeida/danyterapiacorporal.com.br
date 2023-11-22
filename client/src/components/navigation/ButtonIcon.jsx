export default function ButtonIcon(props) {
    return (
        <>
            <button
                className="button confirm-button flex-image"
                id={props.specialStyleSheet}
                onClick={props.method}
            >
                <img src={props.image}></img>
                {props.text}
            </button>
        </>
    )
}