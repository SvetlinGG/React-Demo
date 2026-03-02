
import './App.css'
import AdvancedCounter from './components/AdvancedCounter.jsx'
import Component from './components/Component'
import Counter from './components/Counter'
import MovieList from './components/MovieList'
import Timer from './components/Timer'

function App() {
  

  return (
    <main>
      <Component />
      <hr />
      <MovieList />
      <hr />
      <Timer />
      <hr />
      <Counter />
      <hr />
      <AdvancedCounter />
    </main>
  )
}

export default App
