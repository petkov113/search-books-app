import { Route, Routes } from 'react-router-dom'
import { AboutPage, Layout, SearchPage, ExplorePage } from 'components'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SearchPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="explore" element={<ExplorePage />} />
      </Route>
    </Routes>
  )
}

export default App
