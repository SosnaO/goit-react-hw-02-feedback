//import { element } from 'prop-types';
import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import styles from './Feedback.css';
//import { render } from '@testing-library/react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
class Feedback extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
//   countTotalFeedback()={`(${this.state.good}+${this.state.neutral}+${this.state.bad})`};

    onLeaveFeedback = event => {
    const value = event.target.textContent.toLowerCase();

    this.setState(prevState => {
        if (value === 'good') return { good: prevState[value] + 1 };
        if (value === 'neutral') return { neutral: prevState[value] + 1 };
        if (value === 'bad') return { bad: prevState[value] + 1 };
      });
    };

//   goodIncrement=()=>{
//       this.setState(prevState=>({
//         good:prevState.good+1,

//      }))
//   };
//   neutralIncrement=()=>{
//     this.setState(prevState=>({
//       neutral:prevState.neutral+1,
//    }))
// };
// badIncrement=()=>{
//     this.setState(prevState=>({
//       bad:prevState.bad+1,
//    }))
// };

countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value);
    
  };
  countPositiveFeedbackPercentage=(total)=>{
    return Math.round((this.state.good/total)*100);
  }

// {`(${this.state.good}+${this.state.neutral}+${this.state.bad})`};
// console.log(countTotalFeedback())
// countTotalFeedback=()=>{
//     this.setState(prevState=>({
       
//     total:prevState.bad+15,
//   }))
    // this.setState(prevState=>{
    //       return{  
    //   total:prevState.good+prevState.neutral+prevState.bad,
    // }
// })

// };

render(){
    const total = this.countTotalFeedback();
    const positiveFeedback=this.countPositiveFeedbackPercentage(total)
return(
<div className={styles.feedback}>
    <p className={styles.heading}>Please leave feedback</p>
    {/* <div>
        <button type="button" onClick={this.goodIncrement}>Good</button>
        <button type="button" onClick={this.neutralIncrement}>Neutral</button>
        <button type="button" onClick={this.badIncrement}>Bad</button>
    </div> */}
    <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={this.onLeaveFeedback} />

    <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={positiveFeedback}/>
    {/* <p className={styles.heading}>Statistics</p>
    <div  className={styles.counter}>
    <span>Good:{this.state.good} </span>
    <span>Neutral:{this.state.neutral} </span>
    <span>Bad:{this.state.bad} </span>
    <span>Total:{total} </span>
    <span>Positive feedback:{positiveFeedback} %</span>

    </div>
    */}

    {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}> */}

</div>
);
}

}






export default Feedback;