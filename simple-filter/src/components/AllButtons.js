import React from 'react';
import './AllButtonsStyle.css';
import FirstButton from './singleButtons/FirstButton';
import MiddleButton from './singleButtons/MiddleButton';
const AllButtons = () => {
  return (
    <div class="buttons-container">
      <FirstButton></FirstButton>
      <MiddleButton title={'Medium'} price={'$178+'}></MiddleButton>
      <MiddleButton title={'Medium'} price={'$178+'}></MiddleButton>
    </div>
  );
};

export default AllButtons;
