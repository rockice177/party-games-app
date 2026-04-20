const wordChainAnswers = {
  "cat": ["dog", "hat", "bat", "rat"],
  "dog": ["cat", "hat", "sun", "cup"],
  "hat": ["cat", "dog", "tan", "mat"],
  "party": ["hat", "rat", "bat", "piano"],
  "piano": ["party", "sailor", "rain"],
}

export default function WordChainGame() {
  const [currentWord, setCurrentWord] = useState("cat")
  const [turn, setTurn] = useState(0)
  const [streak, setStreak] = useState(0)

  const nextWords = wordChainAnswers[currentWord] || ["party"]

  return (
    <div style={styles.gameCard}>
      <h2>🔗 Word Chain</h2>
      <p><strong>Current Word:</strong> {currentWord}</p>
      <div style={styles.streakInfo}>
        <span>🔥 Streak: {streak}</span>
        <span>⚡ Turns: {turn}</span>
      </div>
      <div style={styles.wordsGrid}>
        {nextWords.map((word, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentWord(word)
              setTurn(turn + 1)
              setStreak(streak + 1)
            }}
            style={styles.wordBtn}
          >
            {turn === 0 ? word : `+${word}`}
          </button>
        ))}
      </div>
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
  streakInfo: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
    fontWeight: "bold",
  },
  wordsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "0.8rem",
    marginTop: "1rem",
  },
  wordBtn: {
    padding: "0.8rem",
    border: "none",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1rem",
  }
}
