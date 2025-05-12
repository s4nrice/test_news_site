import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NewsListPage from "./pages/NewsListPage";
import NewsDetailPage from "./pages/NewsDetailPage";

const App = () =>  {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<NewsListPage />} />
              <Route path="/news/:id" element={<NewsDetailPage />} />
          </Routes>
      </BrowserRouter>
  )
}
export default App
