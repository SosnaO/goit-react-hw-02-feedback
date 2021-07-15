import React from 'react';
import PropTypes from 'prop-types';
// import styles from '../Feedback/Feedback.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
    return(
        <>
    <p className="heading">Statistics</p>
        <div  className="counter">
        <span>Good:{good} </span>
        <span>Neutral:{neutral} </span>
        <span>Bad:{bad} </span>
        <span>Total:{total} </span>
        <span>Positive feedback:{positivePercentage} %</span>
    
        </div>
        </>
);
};
Statistics.defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };
Statistics.propTypes={
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
 
}

export default Statistics;