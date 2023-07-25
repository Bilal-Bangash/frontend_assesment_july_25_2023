import React from 'react'
import PropTypes from 'prop-types'

const Star = ({ value, color, threshold, halfThreshold }) => (
  <span>
    <i
      style={{ color }}
      className={
        value >= threshold
          ? 'fas fa-star'
          : value >= halfThreshold
          ? 'fas fa-star-half-alt'
          : 'far fa-star'
      }
    ></i>
  </span>
)

Star.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  threshold: PropTypes.number.isRequired,
  halfThreshold: PropTypes.number.isRequired,
}

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((threshold) => (
        <Star
          key={threshold}
          value={value}
          color={color}
          threshold={threshold}
          halfThreshold={threshold - 0.5}
        />
      ))}
      <span>{text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825',
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Rating
