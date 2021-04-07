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
      className={
        isActive === 0
          ? 'middle-button-inactive'
          : 'middle-button-inactive middle-button-active'
      }
      style={{ outline: 'none' }}
    >
      <div className="middle-button-container">
        <div className="middle-button-medium">{title}</div>
        <div className="middle-button-numbers">{price}</div>
      </div>
    </button>
  );
};

export default MiddleButton;
