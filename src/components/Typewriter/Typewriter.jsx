// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Typewriter = ({ text, speed, className, style }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;

    const type = () => {
      if (currentIndex < text.length) {
        const nextChar = text[currentIndex];
        setDisplayedText((prev) => prev + (nextChar === '\n' ? '<br/>' : nextChar));
        currentIndex++;
        timeoutId = setTimeout(type, speed);
      }
    };

    type();

    return () => {
      clearTimeout(timeoutId);
      setDisplayedText(''); // Reset the displayed text if the component unmounts or text changes
    };
  }, [text, speed]);

  return (
    <div
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: displayedText }}
    />
  );
};

// PropTypes validation
Typewriter.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

// Default props
Typewriter.defaultProps = {
  speed: 100,
  className: '',
  style: {},
};

export default Typewriter;
