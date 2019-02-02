import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import BarList from "./BarList.jsx"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.pickBar = this.pickBar.bind(this);
    this.state = {
      barList: []
    };
  }

 componentDidMount() {
    this.getBars();
  }

 getBars() {
     axios
        .get('/api/bars')
        .then((response) => {
            this.setState({barList: response.data});
            console.log(this.state.barList);
          })
        .catch(err => {
            console.log("Failure getting bars", err);
          })
 }
 
 
 pickBar(pick) {
    axios
        .post('/api/user', {
        vote: pick,
        user: window.location.pathname.slice(1, (window.location.pathname.length -1))
      })
        .catch(err => {
        console.log("Failure posting bar choice", err);
      })
 }

  render() {
    return (
      <div>
        <h2>
          Social Night Bar Picker
        </h2>
        <BarList bars={this.state.barList} pick={this.pickBar.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("App"));