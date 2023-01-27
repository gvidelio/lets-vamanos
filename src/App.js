import "./App.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.scss";
import Header from "./components/Header";
import Layout from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Api from "./components/Api";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Api /> */}
        <Header />
        <Layout />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
