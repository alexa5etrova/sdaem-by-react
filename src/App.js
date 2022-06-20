import { Route, Routes } from "react-router-dom";
import "./App.css";
import News from "./pages/News/News";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<News />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
