import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import News from "./pages/News/News";

function App() {
  return (
    <>
      <Header></Header>

      <main className="main">
        <Routes>
          <Route path="/" element={<News />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
