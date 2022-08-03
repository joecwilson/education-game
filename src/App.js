import React, { Component } from 'react';
import Footer from './Footer.js';
import QuestionList from './QuestionList.js';

class App extends Component{
  render(){
    return(
      <div className="dark:bg-stone-900 min-h-screen">
        <QuestionList/>
        <Footer/>
      </div>
      
    )
  }
}

export default App;