import { Route, Routes } from "react-router-dom";
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
          <Route path="*" element={<NotFound />} />
          
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
