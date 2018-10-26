import * as React from 'react';
import './App.css';


import Backdrop from './Components/Backdrop/Backdrop';
import Navbar from './Components/Navbar/Navbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';

interface ISideDrawerState {
  isOpen: boolean;
}

class App extends React.Component<{}, ISideDrawerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.drawToggleClickHandler = this.drawToggleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
  };

  public render() {
    // let sideDrawer;
    let backDrop;

    if (this.state.isOpen) {
      // sideDrawer = <SideDrawer />;
      backDrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />;
    }

    return (
      <div className="App">
        <Navbar drawToggleClickHandler={this.drawToggleClickHandler}/>
        <SideDrawer show={this.state.isOpen}/>;
        {backDrop}
        <main className="main">
          <p>"Why do it yourself when robots do it better."</p>
          <p>- echo -</p>
        </main>
      </div>
    );
  }

  private drawToggleClickHandler = () => {
    this.setState((prevState) => {
      return {isOpen: !prevState.isOpen};
    });
  };

  private backdropClickHandler = () => {
    this.setState({isOpen: false});
  };
}

export default App;
