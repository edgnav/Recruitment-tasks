import './buttons.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedAllButton } from './ButtonsSlice';

const FirstButton = () => {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.buttonsReducer.allButton);
  return (
    <button
      onClick={() => dispatch(setSelectedAllButton(!isActive))}
      className={
        isActive
          ? 'first-button-active first-button-inactive '
          : 'first-button-inactive '
      }
      style={{ outline: 'none' }}
    >
      All
    </button>
  );
};

export default FirstButton;
