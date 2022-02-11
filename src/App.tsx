import { Route, Routes } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import Layout from './components/Layout'
import SearchPage from './components/SearchPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SearchPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  )
}

export default App
