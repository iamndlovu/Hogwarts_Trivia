import React from 'react'

const FinishedComp = ({ stats }) => {
  const { totalQuestions, score, highScore } = stats;

  return (
    <div>
      <h1>Congratulations you have completed the quiz!</h1>
        <section>
          <h3>Your Stats:</h3>
          <ul>
            <li>Questions Attempted: { ` ${totalQuestions}` }</li>
            <li>Your Score: { ` ${100 * score / totalQuestions}%` }</li>
            <li>High Score: { ` ${100 * highScore / totalQuestions}%` }</li>
          </ul>
        </section>
      <button>RESTART</button>
    </div>
  )
}

export default FinishedComp
