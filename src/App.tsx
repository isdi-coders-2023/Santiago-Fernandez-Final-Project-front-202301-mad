import { AppRouter } from "./components/app.router/app.router";

import { Login } from "./components/login/login";
import "./App.css";
import { Header } from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Login></Login>
      <AppRouter></AppRouter>
      <div>Footer</div>
    </div>
  );
}

export default App;
