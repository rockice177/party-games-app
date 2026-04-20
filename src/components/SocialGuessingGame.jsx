export default function SocialGuessingGame() {
  const [round, setRound] = useState(0)
  const [answers, setAnswers] = useState([])

  const handleSubmit = (text) => {
    if (!text.trim()) return
    setAnswers([...answers, { text, id: Date.now() }])
    setRound(round + 1)
  }

  const handleClear = () => {
    setAnswers([])
    setRound(0)
  }

  return (
    <div style={styles.gameCard}>
      <h2>🤔 Social Guessing</h2>
      <p><strong>Round:</strong> {round}</p>
      <p>Type a guess and press Enter to submit!</p>
      <input
        type="text"
        placeholder="Type your answer..."
        style={styles.input}
        onKeyPress={(e) => e.key === "Enter" && handleSubmit(e.target.value)}
      />
      {answers.length > 0 && (
        <>
          <button onClick={handleClear} style={styles.clearBtn}>Clear All</button>
          <div style={styles.answersList}>
            {answers.map((ans, i) => (
              <p key={ans.id} style={styles.answerItem}>{i + 1}. {ans.text}</p>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

const styles = {
  gameCard: {
    background: "rgba(255,255,255,0.95)",
    borderRadius: "20px",
    padding: "2rem",
    color: "#333",
    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
  },
  input: {
    width: "100%",
    padding: "1rem",
    border: "none",
    borderRadius: "12px",
    marginBottom: "1rem",
    fontSize: "1rem",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  answersList: {
    marginTop: "1rem",
    maxHeight: "300px",
    overflowY: "auto",
  },
  answerItem: {
    padding: "0.8rem",
    background: "#f0f0f0",
    borderRadius: "8px",
    marginBottom: "0.5rem",
  },
  clearBtn: {
    padding: "0.6rem 1.2rem",
    border: "none",
    borderRadius: "8px",
    background: "#f5576c",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  }
}
