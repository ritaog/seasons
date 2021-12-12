import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = {
    latitude: null,
    errorMessage: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("I was just updated!!");
  }
  render() {
    if (this.state.latitude && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.latitude} />;
    }

    if (!this.state.latitude && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    return <Spinner />;
  }
}
/*
const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
    },
    (err) => console.log(err)
  );
  return <div>Latitude:</div>;
};
*/

ReactDOM.render(<App />, document.querySelector("#root"));
