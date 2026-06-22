import { useState } from 'react'
import Flashcard from './components/Flashcard'
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import questionBankData from "./assets/questionBank.json"
import './App.css'

function App() {

  const deckSize = questionBankData.length

  const [currentIndex, setCurrentIndex] = useState(0)

  const onNext = () => {
    setCurrentIndex(Math.floor(Math.random() * 49.9))
    setIsQuestion(true)
  }

  const [isQuestion, setIsQuestion] = useState(true)

  const flipCard = () => {
      setIsQuestion(prev => !prev)
  }


  return (
    <div className="App">
      <div className="header">
        <h1>Geography Flashcards!</h1>
        <h3>Do you know your geography? Test ur skills here!</h3>
        <p>Number of cards: {deckSize}</p>
      </div>
      <Flashcard card={questionBankData[currentIndex]} flipFunction={flipCard} isQuestion={isQuestion}/>
      <div className="button-container">
        <button onClick={onNext}><HiArrowLeft size={30}/></button>
        <button onClick={onNext}><HiArrowRight size={30}/></button>
      </div>
    </div>
  )
}

export default App
