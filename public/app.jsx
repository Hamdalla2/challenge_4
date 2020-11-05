class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    render () {
      return (<div id='o'><div id='turn'>Connect Four</div>
       <div id="x">
        <button onClick={a}>Play</button>
        </div></div>)
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('app'));