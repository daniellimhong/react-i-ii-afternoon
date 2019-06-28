import React, { Component } from 'react';
import data from "./data"
import Header from "./Components/Header";
import Card from "./Components/Card";
import NavBar from "./Components/NavBar";
import './App.css';

class App extends Component {
 constructor(prop){
   super(prop);

   this.state = {
     data: data,
     index: 0
  }
  this.handleNext = this.handleNext.bind(this);
  this.handlePrevious = this.handlePrevious.bind(this);
 }

handleNext(){
  let {index, data} = this.state;
  if(data[index + 1]){
    this.setState({
      index: this.state.index += 1
    }) 
   } else {
     this.setState({
      index: 0
    })
    }
  }


handlePrevious(){
  let {index, data} = this.state;
  if (data[index - 1]){
  this.setState({
    index: this.state.index -= 1
  }) 
} else {
  this.setState({
    index: 24
  })
  }
}



render(){
  console.log(this.state.data)
  return (
    <div className="App">
      <Header /> 
      <Card parentData = {this.state.data[this.state.index]}/>
      <NavBar 
      handleNextFn = {this.handleNext}
      handlePreviousFn = {this.handlePrevious}/>
    </div>
  );
 }
}

export default App;
