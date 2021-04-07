import './buttons.scss';
import { useState } from 'react';

const FirstButton = () => {
  const [isActive, setactive] = useState(0);
  const handleChange = () => {
    console.log(isActive);
    isActive === 1 ? setactive(0) : setactive(1);
  };

  return (
    <button
      onClick={handleChange}
      class={isActive === 1 ? 'first-button-active' : 'first-button-inactive'}
      style={{ outline: 'none' }}
    >
      All
    </button>
  );
};

export default FirstButton;
