import React from 'react'

const FinishedComp = ({ stats, restart }) => {
  const { totalQuestions, score, highScore } = stats;

  return (
    <div>
      <h1 style={{
        fontSize: "1.3rem",
        marginBottom: "1.7rem",
        color: "green"
      }}>CONGRATULATIONS YOU HAVE COMPLETED THE QUIZ!</h1>
        <section style={{
          background: "#008045b3",
          color: "#f9f7f7",
          borderRadius: "7px",
          minHeight: "10rem",
          padding: "1.5rem 0.5rem",
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.32rem",
        }}>
          <h3>Your Stats</h3>
          <i style={{
            width: "60%",
            height: "2px",
            margin: "9px",
            background: "#eee"
          }}></i>
          <ul style={{ listStyle: "none" }}>
            <li><span style={{ fontWeight: "500" }}>Questions Attempted</span>: { ` ${totalQuestions}` }</li>
            <li><span style={{ fontWeight: "500" }}>Your Score</span>: { ` ${100 * score / totalQuestions}%` }</li>
            <li><span style={{ fontWeight: "500" }}>High Score</span>: { ` ${100 * highScore / totalQuestions}%` }</li>
          </ul>
        </section>
      <button onClick={ restart } style={{
        padding: "1rem 2rem",
        margin: "1rem",
        fontSize: "1.2rem",
        background: "#3f72af",
        border: "transparent",
        borderRadius: "5px",
        color: "aliceblue"
      }}>RESTART</button>
    </div>
  )
}

export default FinishedComp
