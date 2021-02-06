const React = require("react");
const ReactDOM = require("react-dom");

class App extends React.Component {
	render() {
		return <h1>HI FROM REACT!</h1>;
	}
}

const root = document.querySelector("#root");

ReactDOM.render(<App />, root);
