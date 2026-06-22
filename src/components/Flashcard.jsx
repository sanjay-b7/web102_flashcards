import { useState } from 'react'
import './Flashcard.css'


const Flashcard = ({ card, flipFunction, isQuestion }) => {

    return (
        <div className="flashcard">
            <div
                className="flashcard-container"
                onClick={flipFunction}
            >
                <div className="flashcard-contents">
                    <h2>{isQuestion ? card.question : card.answer}</h2>
                    {isQuestion && card.image && <img src={card.image} alt={card.question} />}
                </div>
            </div>
        </div>
    )
}

export default Flashcard