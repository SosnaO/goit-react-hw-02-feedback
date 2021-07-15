import React from 'react';
// import PropTypes from 'prop-types';
// import styles from '../Feedback/Feedback.css';


const FeedbackOptions = ({ options, onLeaveFeedback})=>{

    return(
        <>
            {options.map(button =>{
        return (
            <button type="button" onClick={onLeaveFeedback}>{button}</button>
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
export default FeedbackOptions;