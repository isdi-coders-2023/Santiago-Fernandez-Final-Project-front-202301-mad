import { menuOptions } from "../../models/menu.model";
import { AppRouter } from "../../routers/app.router";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AppRouter menuOptions={menuOptions}></AppRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
