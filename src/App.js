import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import News from "./pages/News/News";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./Layout/Layout";
import NewsItem from "./pages/NewsItem/NewsItem";
import { NewsCrumbs } from "./data/Newsdata";
import { fetchNews } from "./redux/newsSlice";
import Contacts from "./pages/Contacts/Contacts";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(fetchNews());
  }, [dispatch]);

  return (
    
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route path="/news" element={<News />} />
          <Route
            path="/news/:newsId"
            element={<NewsItem crumbs={NewsCrumbs} />}
          />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    
  );
}

export default App;
