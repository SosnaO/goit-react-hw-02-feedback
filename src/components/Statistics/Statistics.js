import React from 'react';
// import PropTypes from 'prop-types';
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

export default Statistics;