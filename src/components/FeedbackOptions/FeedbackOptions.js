import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option, index) => (
        <button key={index} name={[option]} type="button" onClick={onLeaveFeedback}>{[option]}</button>
      ))}
    </div>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
}