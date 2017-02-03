var React = require('react');
var ReactDOM = require('react-dom');


class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name ? this.props.name : "User",
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div id="Greeting">
        <h1>Hello, {this.state.name}</h1>
        <p>The current time is: {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Greeting />,
  document.getElementById('root')
);
