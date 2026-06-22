import { useState } from 'react'
import './Flashcard.css'


const Flashcard = (flashcardJson) => {

    // delete every child from parent
    const deleteChildElements = (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    // Get flashcard-container elemnt
    let isQuestion = false;

    const flipCard = () => {
        deleteChildElements(flashcardContainer);
        // add the answer json element
        const temp_contents = document.createElement('div')
        // add flashcard content className to temp
        temp_answer.classList.add("flashcard-contents")
        if (isQuestion) {
            temp_contents.innerHTML = `
                <h2>${promps.answer}</h2>
            `;
            isQuestion = false;
        }
        else {
            temp_contents.innerHTML = `
                <h2>${promps.question}</h2>
                <img src=${image}/>
            `;
            isQuestion = true; 
        }
        flashcardContainer.appendChild(temp_contents)
    }

    let exampleImg = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/86e5b9a6-3899-4729-a348-5486c452350f/dc7znf-45c2eecf-43a7-499d-b1d6-7ae6f78cf42c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi84NmU1YjlhNi0zODk5LTQ3MjktYTM0OC01NDg2YzQ1MjM1MGYvZGM3em5mLTQ1YzJlZWNmLTQzYTctNDk5ZC1iMWQ2LTdhZTZmNzhjZjQyYy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.AMTFjhgAyPOFipu-QxO7cp0nCmlhkzjQJIi5PR5Suik"

    return (
        <div className="flashcard">
            <div className="flashcard-container">
                <div className="flashcard-contents">
                    <h2>This is a question replace with prop </h2> 
                    <img src={exampleImg}/>
                </div>
            </div>
        </div>
    )
}

export default Flashcard