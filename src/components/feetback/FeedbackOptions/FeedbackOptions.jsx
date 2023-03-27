import './FeedbackOptions.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="buttonBox">
      {options.map(option => (
        <button
          key={nanoid()}
          name={option.toLowerCase()}
          type="button"
          onClick={onLeaveFeedback}
          className="btn btn-dark"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
