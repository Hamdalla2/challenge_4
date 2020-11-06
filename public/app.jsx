class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    render () {
      return (<div id='o'><div id='turn'>Connect Four</div>
        <br></br>
        <div className="x" id="x">
        <button onClick={a}>Play</button>
        </div>
        <br></br>
        <div className="x"><button onClick={reset}>Reset</button></div> 
        </div>)
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('app'));