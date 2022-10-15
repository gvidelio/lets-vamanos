import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.scss";
import Typography from "@mui/material/Typography";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Header title="Let's Vamanos" />
      <Layout />
    </div>
  );
}

export default App;
