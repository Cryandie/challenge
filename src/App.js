import React from "react";
import "./App.css";
import Timer from "./Component/timer";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Timer />
      </div>
    );
  }
}
export default App;
