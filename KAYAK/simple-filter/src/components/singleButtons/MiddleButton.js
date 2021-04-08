import { useState } from 'react';
import './buttons.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedMiddleButton } from './ButtonsSlice';
const MiddleButton = ({ title, price, nth }) => {
  const dispatch = useDispatch();
  const isActive = useSelector(
    (state) => state.buttonsReducer.middleButtons[nth]
  );
  const handleChange = () => {
    isActive === 1
      ? dispatch(setSelectedMiddleButton({ nth: nth, action: 0 }))
      : dispatch(setSelectedMiddleButton({ nth: nth, action: 1 }));

    console.log(isActive);
  };
  return (
    <button
      onClick={handleChange}
      className={
        isActive === 0
          ? 'middle-button-inactive middle-button-container'
          : 'middle-button-inactive middle-button-active middle-button-container'
      }
      style={{ outline: 'none' }}
    >
      <p className="middle-button-medium">{title}</p>
      <p className="middle-button-numbers">{price}</p>
    </button>
  );
};

export default MiddleButton;
