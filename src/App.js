import React, { Component } from 'react';
import './App.css';

// creating a new context
const MyContext = React.createContext();


// creating a provider
class MyProvider extends Component {
  state = {
    open: false
  };

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        toggleNavBar: () => this.setState({
          open: !this.state.open
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

class NavBarComponent extends Component {
  render () {
    return (
      <div>
        <MyContext.Consumer>
          { (context) => (
            context.state.open ?
              <div className="navbar">
                <div className="container">
                  <h1> Context API Demo.</h1>
                  <h2> Hidden Navbar</h2>
                </div>
              </div> : <span></span>
            
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

class CardComponent extends Component {
  render () { 
    return (
      <div>
        <MyContext.Consumer>
         { (context) => (
           <React.Fragment>
             <div className="CardComponent">
              <p>{context.state.open ? 'Navbar Open': 'Navbar Closed'}</p>
              <button onClick={context.toggleNavBar}>Toggle Navbar</button>
             </div>
           </React.Fragment>
         )} 
        </MyContext.Consumer>
      </div>
    );
  }
}


class App extends Component {

  render() {
    return (
      <MyProvider>
        <div className="App">
          <NavBarComponent/>
          <CardComponent/>
      </div>
      </MyProvider>
    );
  }
}



export default App;
