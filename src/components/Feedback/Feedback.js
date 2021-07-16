import React, { Component } from 'react';
import styles from './Feedback.module.css';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notitfication/Notification'
class Feedback extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
    
  show = isShowing => {
    return isShowing;
  };

    onLeaveFeedback = event => {
    const value = event.target.textContent.toLowerCase();
    this.setState(prevState => {
        if (value === 'good') return { good: prevState[value] + 1 };
        if (value === 'neutral') return { neutral: prevState[value] + 1 };
        if (value === 'bad') return { bad: prevState[value] + 1 };
      });
    };
    
    countTotalFeedback = () => {
        return Object.values(this.state).reduce((acc, value) => acc + value);
    };
    
   countPositiveFeedbackPercentage=(total)=>{
        return Math.round((this.state.good/total)*100);
    };

    render(){
    const total = this.countTotalFeedback();
    const positiveFeedback=this.countPositiveFeedbackPercentage(total);
    const show = this.show(total);
        return(
        <div className={styles.feedback}>

    <Section title={'Plese leave feedback'}>
        <FeedbackOptions 
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.onLeaveFeedback} />
    </Section>

    <Section title={'Statistics'}>
        <Notification message="No feedback given" show={show}>
            <Statistics
             good={this.state.good} 
             neutral={this.state.neutral}
             bad={this.state.bad} 
             total={total} 
             positivePercentage={positiveFeedback}/>
         </Notification>
    </Section>
</div>
)
}
}

export default Feedback;