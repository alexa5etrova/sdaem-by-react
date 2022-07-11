import { Route, Routes } from "react-router-dom";
import "./App.css";
import News from "./pages/News/News";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./Layout/Layout";
import NewsItem from "./pages/NewsItem/NewsItem";
import { NewsCrumbs } from "./data/Newsdata";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNews } from "./redux/newsSlice";
import { fetchNav } from "./redux/navSlice";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNav());
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<News />} />
          <Route path="/news" element={<News />} />
          <Route
            path="/news/:newsId"
            element={<NewsItem crumbs={NewsCrumbs} />}
          />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
