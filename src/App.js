import "./App.css";
import Body from "./component/Body/Body";
import Header from "./component/Header/Header";
import background from "./image/background3.jpg";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <header className="App-header">
        <Header></Header>
      </header>
      <div className="body">
        <Body></Body>
      </div>
    </div>
  );
}

export default App;
