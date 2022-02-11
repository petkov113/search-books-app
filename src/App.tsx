import { Route, Routes } from 'react-router-dom'
import { AboutPage, Layout, SearchPage } from './components'

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
