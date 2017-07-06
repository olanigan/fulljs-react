import React from 'react';
import Header from './Header';
import Preview from './Preview';

class App extends React.Component {
  state = {
    pageHeader: 'Naming contests'
  };
  componentDidMount() {
    //Add timers and listeners
  }
  componentWillUnmount() {
    //Clean timers and listeners
  }
  render(){
    return (
        <div className="App">
            <Header message={this.state.pageHeader}/> 
            <div>
                {
                    this.props.contests.map(contest =>
                        <Preview {...contest}/>
                    )
                }
                
            </div>
        </div>
    );
  }
}

export default App;