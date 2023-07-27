
import Ionicon from "./Ionicon"
import { useRef, useState } from "react"


export default function Accordion(props) {

    const accAnswer = useRef(null)
    const accHead = useRef(null)
    const chevronIcons = ['chevron-down-outline', 'chevron-up-outline']
    const [isAnswerVisible, setAnswerVisible ] = useState(false)

    function showAccAnswer() {
        setAnswerVisible(!isAnswerVisible)
    }

    return (
        <>
            <div className="accordion">
                <section ref={accHead} onClick={showAccAnswer} className="accordion-head">
                    <h3>{props.doubtName}</h3>
                    <Ionicon name={isAnswerVisible ? chevronIcons[1] : chevronIcons[0]} />
                </section>
                
                <section 
                    ref={accAnswer}
                    style={{display: isAnswerVisible ? "block" : "none"}}
                    className="accordion-answer"
                >
                    <p>
                        {props.doubtAnswer}
                    </p>
                
                </section>
            </div>
        </>
    )
}