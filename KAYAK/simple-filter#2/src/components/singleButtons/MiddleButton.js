import './buttons.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedMiddleButton } from './ButtonsSlice';

const MiddleButton = ({ title, icon, nth, price }) => {
  const dispatch = useDispatch();
  const isActive = useSelector(
    (state) => state.buttonsReducer.middleButtons[nth]
  );

  return (
    <button
      onClick={() =>
        dispatch(setSelectedMiddleButton({ nth: nth, action: !isActive }))
      }
      className={
        !isActive
          ? 'middle-button-inactive middle-button-container'
          : 'middle-button-inactive middle-button-active middle-button-container'
      }
      style={{ outline: 'none' }}
    >
      <div className="dialog">
        <div className="dialog-content">
          <div className="dialog-title">{price}</div>
        </div>
      </div>
      <img alt="" className="middle-button-icon" src={icon}></img>
      <p className="middle-button-medium">{title}</p>
    </button>
  );
};

export default MiddleButton;
