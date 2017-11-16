import React from 'react';
import Search from "./homepage/Search";
import Sidebar from "./homepage/Sidebar";
import Commonbots from "./homepage/Commonbots";
import Uploadform from "./uploadpage/Uploadform"



class App extends React.Component {
  constructor(){
    super()
    this.state ={
      fields:{}
    }
  }
  onSubmit(fields){
    this.setState({ fields})
    console.log("app.js received this data:" , this.state.fields);
  }

  render() {
    
    //<Uploadform onSubmit={this.onSubmit(this.state.fields)}/>

    var header = {
      textAlign: 'center',
      color: '#000'
    };
    return (
      <div className="App">
        <Search />
        <div>  
                
        <Commonbots />
        </div>
   
      </div>

    );
  }
}

export default App;
