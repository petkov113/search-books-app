import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import SearchPage from './components/SearchPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SearchPage />} />
      </Route>
    </Routes>
  )
}

export default App
