import React, { Component } from 'react';
import Header from "./components/header/Header";
import Quiz from './components/quiz/Quiz'
import Footer from './components/footer/Footer'
import appLogo from "./Hogwarts-Logo.png";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    if (!localStorage.getItem("Hogwarts_Trivia_High_Score")) {
      let highScore = 0;
      localStorage.setItem("Hogwarts_Trivia_High_Score", JSON.stringify(highScore));
    }
  
    this.quizQuestions = [
      {
        question: `Enim voluptate do tempor?1`,
        options: [
          { text: "Nulla est proident eu quis.", correct: true },
          { text: "Officia aliquip laborum.", correct: false },
          { text: "Lorem ipsum non consectetur laborum.", correct: false },
        ]
      },
      {
        question: `Enim voluptate do tempor?2`,
        options: [
          { text: "Nulla est proident eu quis.", correct: true },
          { text: "Officia aliquip laborum.", correct: false },
          { text: "Lorem ipsum non consectetur laborum.", correct: false },
        ]
      },
      {
        question: `Enim voluptate do tempor?3`,
        options: [
          { text: "Nulla est proident eu quis.", correct: true },
          { text: "Officia aliquip laborum.", correct: false },
          { text: "Lorem ipsum non consectetur laborum.", correct: false },
        ]
      }
    ]; // questions end

    this.state = {
      questionNo: 1,
      totalQuestions: this.quizQuestions.length,
      score: 0,
      highScore: Number(JSON.parse(localStorage.getItem("Hogwarts_Trivia_High_Score")))
    }

  } // constructor end

  // TODO: finish quiz
  finish = () => {
    console.log('done')
  }

  //handle click on options
  handleClick = ( correct ) => {
    const newQuestionNo = ((this.state.questionNo < this.state.totalQuestions) && this.state.questionNo + 1) || this.state.questionNo;
    const newScore = (correct && this.state.score + 1) || this.state.score;

    this.setState({
      score: newScore
    });
    // set new high score?
    if(newScore > this.state.highScore) {
      this.setState({
        highScore: newScore,
      });
      localStorage.setItem("Hogwarts_Trivia_High_Score", JSON.stringify(newScore));
    }

    switch (this.state.questionNo) {
      case this.state.totalQuestions:
        this.finish();
        break;
    
      default:
        this.setState({
          questionNo: newQuestionNo
        });
        break;
    }
  
  }

  render() {
    const quizData = {
      stats: this.state,
      quizQuestions: this.quizQuestions
    };

    return (
      <div className="App">
        <Header appLogo={ appLogo } appName="Hogwarts Trivia" />
        <Quiz quizData={ quizData } handleClick={ this.handleClick } />
        <Footer appName="Hogwarts Trivia" />
      </div>
    );
  }
}
 
export default App;