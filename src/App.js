import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import News from "./pages/News/News";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./Layout/Layout";
import NewsItem from "./pages/NewsItem/NewsItem";
import { NewsCrumbs } from "./data/Newsdata";

function App() {
  // let { newsId } = useParams();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<News />} />

          <Route
            path="/news/131"
            element={<NewsItem crumbs={NewsCrumbs} id={131} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
