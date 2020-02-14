import React, { Component } from 'react';
// import logo from './logo.svg';
import classes from './App.module.css';
import Layout from './Components/Layout/Layout'

class App extends Component {
// state = {
//     data: null,
//     data2: null
//   };

  // componentDidMount() {
  //     // Call our fetch function below once the component mounts
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.express }))
  //     .catch(err => console.log(err));

  //     // this.callBackendAPI2()
  //     // .then(res => this.setState({ data2: res.express }))
  //     // .catch(err => console.log(err));
  // }
  //   // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };

  // callBackendAPI2 = async () => {
  //   const response = await fetch('/express_backend2');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };

  render() {
    return (
      <div className={classes.App}>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}

        {/* <p className="App-intro">{this.state.data}</p> */}
        
        <Layout>

        </Layout>
      </div>
    );
  }
}

export default App;
