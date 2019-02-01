import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: []
    };
  }


  render() {
    return (
      <div>
        <h2>
          Social Night Bar Picker
        </h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("App"));