import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPages from './pages/MainPages'
import Header from './component/header'
import MovieDetail from './pages/MovieDetail'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<MainPages/>}/>  
      <Route path='/movie/:movieId' element={<MovieDetail/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
