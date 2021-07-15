import React from 'react';
import PropTypes from 'prop-types';
// import styles from '../Feedback/Feedback.css';


const FeedbackOptions = ({ options, onLeaveFeedback})=>{

    return(
        <>
            {options.map(button =>{
        return (
            <div key={button}>
                  <button type="button" onClick={onLeaveFeedback}>{button}</button>
            </div>
          
        );
        }
    )

};


{/* <div>
<button type="button" onClick={goodIncrement}>Good</button>
<button type="button" onClick={neutralIncrement}>Neutral</button>
<button type="button" onClick={badIncrement}>Bad</button>
</div> */}


</>
);
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
export default FeedbackOptions;