import './buttons.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedAllButton } from './ButtonsSlice';
const FirstButton = () => {
  //const [isActive, setactive] = useState(0);
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.buttonsReducer.allButton);
  const ntr = 0;
  const handleChange = () => {
    isActive === 1
      ? dispatch(setSelectedAllButton(0))
      : dispatch(setSelectedAllButton(1));
  };

  return (
    <button
      onClick={handleChange}
      className={
        isActive === 0
          ? 'first-button-inactive '
          : 'first-button-inactive first-button-active'
      }
      style={{ outline: 'none' }}
    >
      All
    </button>
  );
};

export default FirstButton;
