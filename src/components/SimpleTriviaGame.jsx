import { useState } from 'react'

const triviaQuestions = [
  { q: "What's the capital of France?", a: ["Paris", "paris", "PARIS"] },
  { q: "Which planet is known as the Red Planet?", a: ["Mars", "mars", "MARS"] },
  { q: "What is H2O?", a: ["Water", "water", "WATER"] },
]

export default function SimpleTriviaGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)

  return (
    <div style={styles.gameCard}>
      <h2>🧠 Trivia Challenge</h2>
      <p><strong>Score:</strong> {score}/{currentQuestion}</p>
      {currentQuestion < triviaQuestions.length ? (
        <>
          <p><strong>Q{currentQuestion + 1}:</strong> {triviaQuestions[currentQuestion].q}</p>
          <div style={styles.answersGrid}>
            {["Paris", "London", "Tokyo"].map((ans) => (
              <button
                key={ans}
                onClick={() => handleAnswer(triviaQuestions[currentQuestion], ans)}
                style={styles.answerBtn}
              >
                {ans}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div style={styles.results}>
          <p>🎉 All questions answered!</p>
          <p><strong>Final Score: {score}/{triviaQuestions.length}</strong></p>
          <button onClick={() => { setCurrentQuestion(0); setScore(0); }}>Play Again</button>
        </div>
      )}
    </div>
  )

  function handleAnswer(question, answer) {
    const correct = question.a.includes(answer)
    if (correct) {
      setScore(score + 1)
      setCurrentQuestion(currentQuestion + 1)
    } else {
      alert(`Wrong! The answer was: ${question.a[0]}`)
    }
  }
}

const styles = {
  gameCard: {
    background: "rgba(255,255,255,0.95)",
    borderRadius: "20px",
    padding: "2rem",
    color: "#333",
    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
  },
  answersGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "0.8rem",
    marginTop: "1rem",
  },
  answerBtn: {
    padding: "0.8rem",
    border: "none",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1rem",
  },
  results: {
    textAlign: "center",
    padding: "2rem 0",
  }
}
