import './App.css'
import PracticeSummaryCard from './components/PracticeSummaryCard'
import Footer from './components/Footer'
import { practicesData } from './data/mockPractices'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Practice Summary Dashboard</h1>
        <p className="app-subtitle">Key metrics for dental practices</p>
      </header>

      <main className="cards-container">
        {practicesData.map((practice) => (
          <PracticeSummaryCard key={practice.id} data={practice} />
        ))}
      </main>

      <Footer />
    </div>
  )
}

export default App;