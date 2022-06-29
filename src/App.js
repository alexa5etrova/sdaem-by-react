import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import News from "./pages/News/News";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./Layout/Layout";
import NewsItem from "./pages/NewsItem/NewsItem";
import { NewsCrumbs } from "./data/Newsdata";

function App() {
  
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/news" element={<News />} />
           
          <Route
            path="/news/:newsId"
            element={<NewsItem crumbs={NewsCrumbs}/>}/>
          
          
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
