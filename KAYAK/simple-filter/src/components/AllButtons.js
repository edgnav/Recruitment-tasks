import React from 'react';
import './AllButtonsStyle.css';
import FirstButton from './singleButtons/FirstButton';
import MiddleButton from './singleButtons/MiddleButton';
import MoreButton from './singleButtons/MoreButton';

const middleButtonsContent = [
  {
    title: 'Small',
    price: '$422+',
  },
  {
    title: 'Medium',
    price: '$433+',
  },
  {
    title: 'Large',
    price: '$456+',
  },
  {
    title: 'SUV',
    price: '$525+',
  },
  {
    title: 'Van',
    price: '$649+',
  },
];

const AllButtons = () => {
  return (
    <div className="buttons-container">
      <FirstButton></FirstButton>
      {middleButtonsContent.map((content, key) => {
        return (
          <MiddleButton
            title={content.title}
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
