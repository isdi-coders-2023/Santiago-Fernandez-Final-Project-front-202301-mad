import { AppRouter } from "./components/app.router/app.router";
import { Header } from "./components/header/header";
import { Login } from "./components/login/login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Login></Login>
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
