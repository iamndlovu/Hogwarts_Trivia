import "./App.css";
import Header from "./components/header/Header";
import Quiz from './components/quiz/Quiz'
import Footer from './components/footer/Footer'
import appLogo from "./Hogwarts-Logo.png";

function App() {
  return (
    <div className="App">
      <Header appLogo={ appLogo } appName="Hogwarts Trivia" />
      <Quiz />
      <Footer appName="Hogwarts Trivia" />
    </div>
  );
}

export default App;
