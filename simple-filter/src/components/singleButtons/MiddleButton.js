import { useState } from 'react';
import './buttons.scss';

const MiddleButton = ({ title, price }) => {
  const [isActive, setactive] = useState(0);
  const handleChange = () => {
    isActive === 1 ? setactive(0) : setactive(1);
  };
  return (
    <button
      onClick={handleChange}
      class={isActive === 1 ? 'middle-button' : 'middle-button-active'}
    >
      <div class="middle-button-container">
        <div class="middle-button-medium">{title}</div>
        <div class="middle-button-numbers">{price}</div>
      </div>
    </button>
  );
};

export default MiddleButton;
