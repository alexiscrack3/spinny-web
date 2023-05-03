import { BrowserRouter } from "react-router-dom";
import { Routes } from "../../foundation";
import { Layout } from '../../pages/Layout';
import "./App.css";

const App = () =>{
  return (
    <Layout>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
