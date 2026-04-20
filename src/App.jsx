import { useState } from 'react'
import SimpleTriviaGame from './components/SimpleTriviaGame'

export default function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>🎉 Party Games</h1>
        <p>Built with React • iOS Compatible PWA</p>
      </header>

      <main style={styles.main}>
        <SimpleTriviaGame />
      </main>

      <footer style={styles.footer}>
        <p>📱 iOS Ready • Add to Home Screen</p>
      </footer>
    </div>
  )
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    fontFamily: "'Segoe UI', Tahoma, sans-serif",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    textAlign: "center",
    padding: "2rem",
    background: "rgba(0,0,0,0.2)",
  },
  main: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "2rem",
    flex: 1,
  },
  footer: {
    textAlign: "center",
    padding: "1.5rem",
    background: "rgba(0,0,0,0.2)",
    marginTop: "auto",
  }
}
