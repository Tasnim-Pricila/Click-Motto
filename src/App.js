import Banner from "./components/Banner/Banner";
import Content from "./components/Content/Content";
import Header from "./components/Layout/Header";
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner/>
      <Content/>
    </div>
  );
};

export default App;
