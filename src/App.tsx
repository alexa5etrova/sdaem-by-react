import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./Layout/Layout";
import NewsItem from "./pages/NewsItem/NewsItem";
import Contacts from "./pages/Contacts/Contacts";
import Auth from "./pages/Auth/Auth";
import Flats from "./pages/Flats/Flats";

import "./App.css";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:newsId" element={<NewsItem />} />
          <Route path="/flats" element={<Flats />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
