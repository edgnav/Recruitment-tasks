import React from 'react';
import './AllButtonsStyle.css';
import MiddleButton from './singleButtons/MiddleButton';
import MoreButton from './singleButtons/MoreButton';

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

const AllButtons = () => {
  return (
    <div className="buttons-container">
      {middleButtonsContent.map((content, key) => {
        return (
          <MiddleButton
            title={content.title}
            icon={content.icon}
            price={content.price}
            nth={key}
          ></MiddleButton>
        );
      })}
      <MoreButton></MoreButton>
    </div>
  );
};

export default AllButtons;
