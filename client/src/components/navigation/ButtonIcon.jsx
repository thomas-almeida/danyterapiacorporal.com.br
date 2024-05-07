/* eslint-disable react/prop-types */
export default function ButtonIcon(props) {

    const hidden = { display: 'none' }

    return (
        <>
            <button
                className="button confirm-button flex-image"
                id={props.specialStyleSheet}
                onClick={props.method}
                style={props.isVisible ? {} : hidden}
            >
                <img src={props.image}></img>
                {props.text}
            </button>
        </>
    )
}