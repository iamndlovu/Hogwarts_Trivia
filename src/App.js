import React, { Component } from 'react';
import Header from "./components/header/Header";
import Quiz from './components/quiz/Quiz'
import Footer from './components/footer/Footer'
import appLogo from "./Hogwarts-Logo.png";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNo: 1,
      totalQuestions: 20,
      score: 0,
      highScore: 15
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
    ];
  }
  render() {
    const quizData = {
      stats: this.state,
      quizQuestions: this.quizQuestions
    };

    return (
      <div className="App">
        <Header appLogo={ appLogo } appName="Hogwarts Trivia" />
        <Quiz quizData={ quizData } />
        <Footer appName="Hogwarts Trivia" />
      </div>
    );
  }
}
 
export default App;