import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSelectedCheckbox,
  setSelectedDropdown,
  deleteDropdownContent,
} from './ButtonsSlice';
import './buttons.scss';
const dropdownItems = [
  {
    title: 'Van',
    price: '$726',
    image:
      'https://content.r9cdn.net/rimg/carimages/generic/11_van_white.png?width=108&height=72',
  },
  {
    title: 'Luxury',
    price: '$413',
    image:
      'https://content.r9cdn.net/rimg/carimages/generic/04_premium.png?width=108&height=72',
  },
  {
    title: 'Pickup Truck',
    price: '$546',
    image:
      'https://content.r9cdn.net/rimg/carimages/generic/12_truck_white.png?width=108&height=72',
  },

  {
    title: 'Convertible',
    price: '$762',
    image:
      'https://content.r9cdn.net/rimg/carimages/generic/08_convertible_white.png?width=108&height=72',
  },
  {
    title: 'Commercial',
    price: '$867',
    image:
      'https://content.r9cdn.net/rimg/carimages/generic/14_commercial_white.png?width=108&height=72',
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
            <div className="delete-checkbox-content" onClick={handleDelete}>
              <svg
                className="svg-image"
                role="img"
                width="14"
                height="14"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M180 37.918L162.082 20L100 82.208L37.918 20L20 37.918L82.208 100L20 162.082L37.918 180L100 117.792L162.082 180L180 162.082L117.792 100z"
                ></path>
              </svg>
            </div>
          ) : (
            <svg
              className="svg-image"
              role="img"
              width="14"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
            >
              <path d="M100 132.5c-3.873 0 .136 2.376-64.801-51.738l9.603-11.523L100 115.237l55.199-45.999l9.603 11.523C99.806 134.924 103.855 132.5 100 132.5z"></path>
            </svg>
          )}
        </div>
      </button>
      <div
        className={
          dropdownActive ? ' dropdown-content' : ' dropdown-content-inactive'
        }
      >
        {dropdownItems &&
          dropdownItems.map((item, key) => {
            return (
              <div
                className="my-dropdown-item"
                onClick={() => handleChangeCheckBox(key)}
                key={key}
              >
                <div className="checkboxOverride">
                  <input
                    type="checkbox"
                    name=""
                    id={`checkboxinputOverride-${key}`}
                    checked={checked[key] || 0}
                    disabled={true}
                    key={key || ''}
                  />
                  <label htmlFor={`checkboxinputOverride-${key}`}></label>
                </div>
                <img alt="" className="dropdown-image" src={item.image}></img>
                <div className="checkbox-item-title">{item.title}</div>
                <div className="dropdown-price">{item.price}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MoreButton;
