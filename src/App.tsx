import React from 'react';
import QuestionCard from './components/QuestionsCard'
import { GlobalStyle, Wrapper } from './App.styles';

const App = () => {

  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
     <h1>React Quiz</h1>
     <button className="start" onClick={startTrivia}>Start</button>
     <p className="score">Score: </p>
     <p>Loading Questions...</p>
     <QuestionCard/>
    </div>
  );
}

export default App;
