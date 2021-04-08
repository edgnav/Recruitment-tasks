import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCheckbox } from './ButtonsSlice';

const dropdownItems = [
  {
    title: 'Pickup Truck',
    price: '$594',
  },
  {
    title: 'Luxury',
    price: '$626',
  },
  {
    title: 'Commercial',
    price: '$1248',
  },
  {
    title: 'Convertible',
    price: '$1607',
  },
];
const MoreButton = () => {
  const dispatch = useDispatch();
  const [focus, setFocus] = useState(false);
  const checked = useSelector(
    (state) => state.buttonsReducer.dropDown1CheckBoxes
  );

  const handleChangeCheckBox = (key) => {
    checked[key] === 1
      ? dispatch(setSelectedCheckbox({ nth: key, action: 0 }))
      : dispatch(setSelectedCheckbox({ nth: key, action: 1 }));
  };
  return (
    <div onBlur={() => setFocus(false)} className="more-button-container">
      <button className="more-button" onFocus={() => setFocus(true)}>
        <div style={{ float: 'left', marginLeft: '16px' }}>More</div>
        <div className="rotate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fontWeight="bold"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 
              0L8 10.293l5.646-5.647a.5.5 0 0 
              1 .708.708l-6 6a.5.5 0 0 1-.708 
              0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
        <div className="dropdown-content">
          {dropdownItems.map((item, key) => {
            return (
              <div
                className="dropwdown-item"
                onClick={() => handleChangeCheckBox(key)}
                key={key}
              >
                <div className="checkboxOverride">
                  <input
                    type="checkbox"
                    name=""
                    id={`checkboxinputOverride-${key}`}
                    checked={checked[key]}
                    disabled={true}
                  />
                  <label htmlFor={`checkboxinputOverride-${key}`}></label>
                </div>
                <div>{item.title}</div>
                <div className="dropdown-price">{item.price}</div>
              </div>
            );
          })}
        </div>
      </button>
    </div>
  );
};

export default MoreButton;
