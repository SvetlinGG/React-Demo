
import './App.css'
import Gallery from './components/render-list-demo/key-press-demo/Gallery'
import MovieList from './components/render-list-demo/MovieList'
import MovieListEffect from './components/render-list-demo/use-effect-demo/MovieListEffect'

function App() {
  

  return (
    <>
      <MovieList />

      <hr />

      <MovieListEffect />

      <hr />

      <Gallery />
    </>
  )
}

export default App
