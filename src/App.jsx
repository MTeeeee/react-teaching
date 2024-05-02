import Header from "./components/Header/Header";
import List from "./components/List";
import Footer from "./components/Footer/Footer";
import "./style.css";
import Counter from "./Counter";
import UpdateObj from "./UpdateObj";

function App() {
  return (
    <>
      <UpdateObj />
      <Header />
      <List />
      <Footer />
    </>
  );
}

export default App;
