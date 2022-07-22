import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchNews } from "./redux/newsSlice";
import { fetchNav } from "./redux/navSlice";

import Home from './pages/Home/Home';
import News from "./pages/News/News";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./Layout/Layout";
import NewsItem from "./pages/NewsItem/NewsItem";
import { NewsCrumbs } from "./data/Newsdata";
import Contacts from "./pages/Contacts/Contacts";
import Auth from "./pages/Auth/Auth";

import "./App.css";


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
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
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
