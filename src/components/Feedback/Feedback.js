import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import styles from './Feedback.css';
//import { render } from '@testing-library/react';

class Feedback extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  goodIncrement=()=>{
      this.setState(prevState=>({
        good:prevState.good+1,
     }))
  };
  neutralIncrement=()=>{
    this.setState(prevState=>({
      neutral:prevState.neutral+1,
   }))
};
badIncrement=()=>{
    this.setState(prevState=>({
      bad:prevState.bad+1,
   }))
};

countTotalFeedback=()=>{
    this.setState(prevState=>({
       
    total:this.good+5,
  }))
    // this.setState(prevState=>{
    //       return{  
    //   total:prevState.good+prevState.neutral+prevState.bad,
    // }
// })

};



render(){
return(
<div className={styles.feedback}>
    <p className={styles.heading}>Please leave feedback</p>
    <div>
        <button type="button" onClick={this.goodIncrement}>Good</button>
        <button type="button" onClick={this.neutralIncrement}>Neutral</button>
        <button type="button" onClick={this.badIncrement}>Bad</button>
    </div>
    <p className={styles.heading}>Statistics</p>
    <div  className={styles.counter}>
    <span>Good:{this.state.good} </span>
    <span>Neutral:{this.state.neutral} </span>
    <span>Bad:{this.state.bad} </span>
    <span>Total:{this.state.total} </span>
    <span>Positive feedback:{this.state.positiveFeedback} %</span>

    </div>
   



</div>
);
}

}






export default Feedback;