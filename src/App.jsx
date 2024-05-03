import Header from "./components/Header/Header";
import List from "./components/List";
import Footer from "./components/Footer/Footer";
import "./style.css";
import UpdateObj from "./UpdateObj";
import UpdateArray from "./UpdateArray";

function App() {
  return (
    <>
      <UpdateArray />
      <UpdateObj />
      <Header />
      <List />
      <Footer />
    </>
  );
}

export default App;
