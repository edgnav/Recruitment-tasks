import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSelectedCheckbox,
  setSelectedDropdown,
  deleteDropdownContent,
} from './ButtonsSlice';

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
  useEffect(() => {
    var ignoreClickOnMeElement = ref.current;
    document.addEventListener('click', function (event) {
      var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
      if (!isClickInsideElement) {
        dispatch(setSelectedDropdown(false));
      }
    });
  }, [dispatch]);
  const ref = useRef(null);
  const checked = useSelector(
    (state) => state.buttonsReducer.dropDown1CheckBoxes
  );
  const selected = useSelector((state) => state.buttonsReducer.checkBoxContent);
  const dropdownActive = useSelector(
    (state) => state.buttonsReducer.dropDownActive
  );
  const handleDelete = () => {
    dispatch(deleteDropdownContent());
  };
  const handleChangeCheckBox = (key) => {
    dispatch(
      setSelectedCheckbox({
        nth: key,
        action: !checked[key],
        title: dropdownItems[key].title,
      })
    );
  };

  return (
    <div ref={ref}>
      <button
        className={
          dropdownActive || selected.length > 0
            ? 'more-button more-button-active'
            : 'more-button '
        }
        onClick={() => dispatch(setSelectedDropdown(!dropdownActive))}
      >
        <div
          className={
            selected.length === 0
              ? 'more-button-title more-button-title-no-margin'
              : 'more-button-title'
          }
        >
          More{' '}
          <div className="selected">
            {selected.length === 0
              ? ''
              : selected.length === 1
              ? selected[0]
              : `${selected.length} Selected`}
          </div>
        </div>
        <div className="rotate">
          {selected.length > 0 ? (
            <div classname="delete-checkbox-content" onClick={handleDelete}>
              &#x2715;
            </div>
          ) : (
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
          )}
        </div>
      </button>
      <div
        className={
          dropdownActive ? ' dropdown-content' : ' dropdown-content-inactive'
        }
      >
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
              <div style={{ color: 'black' }}>{item.title}</div>
              <div className="dropdown-price">{item.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoreButton;
