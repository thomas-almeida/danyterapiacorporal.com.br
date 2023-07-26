
import Ionicon from "./Ionicon"

export default function Accordion(props) {
    return (
        <>
            <div className="accordion">
                <div className="doubt">
                    <section className="doubt-head">
                        <h3>{props.doubtName}</h3>
                        <Ionicon name="chevron-down-outline"/>
                    </section>
                    <section className="doubt-answer">
                        <p>
                            {props.doubtAnswer}
                        </p>
                    </section>

                </div>
            </div>
        </>
    )
}