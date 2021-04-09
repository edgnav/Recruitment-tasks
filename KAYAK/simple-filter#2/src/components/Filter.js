import React from 'react';
import './Filter.scss';
import MiddleButton from './singleButtons/MiddleButton';
import MoreButton from './singleButtons/MoreButton';
import { setInitialState } from './singleButtons/ButtonsSlice';
import { useDispatch, useSelector } from 'react-redux';
const middleButtonsContent = [
  {
    title: 'Small',
    icon:
      'https://content.r9cdn.net/rimg/carimages/generic/01_mini_white.png?width=108&height=72',
    price: '$225+',
  },
  {
    title: 'Medium',
    icon:
      'https://content.r9cdn.net/rimg/carimages/generic/02_economy_white.png?width=108&height=72',
    price: '$233+',
  },
  {
    title: 'Large',
    icon:
      'https://content.r9cdn.net/rimg/carimages/generic/03_standard_white.png?width=108&height=72',
    price: '$237+',
  },
  {
    title: 'SUV',
    icon:
      'https://content.r9cdn.net/rimg/carimages/generic/05_suv-small_white.png?width=108&height=72',
    price: '$271+',
  },
];

const Filter = () => {
  const dispatch = useDispatch();
  const resetActive = useSelector((state) => state.buttonsReducer.count);
  return (
    <div className="filter-container">
      <div className="filter-header">
        <div className="filter-title">Car type</div>
        {resetActive > 0 ? (
          <div
            className="filter-header-button"
            onClick={() => dispatch(setInitialState())}
          >
            Reset
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="buttons-container">
        {middleButtonsContent.map((content, key) => {
          return (
            <MiddleButton
              title={content.title}
              icon={content.icon}
              price={content.price}
              nth={key}
              key={key}
            ></MiddleButton>
          );
        })}
        <MoreButton></MoreButton>
      </div>
    </div>
  );
};

export default Filter;
