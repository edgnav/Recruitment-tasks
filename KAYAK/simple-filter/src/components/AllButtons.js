import React from 'react';
import './AllButtonsStyle.css';
import FirstButton from './singleButtons/FirstButton';
import MiddleButton from './singleButtons/MiddleButton';
import MoreButton from './singleButtons/MoreButton';
import { Button } from 'react-bootstrap';

const AllButtons = () => {
  return (
    <div className="buttons-container">
      <FirstButton></FirstButton>
      <MiddleButton title={'Small'} price={'$422+'}></MiddleButton>
      <MiddleButton title={'Medium'} price={'$433+'}></MiddleButton>
      <MiddleButton title={'Large'} price={'$456+'}></MiddleButton>
      <MiddleButton title={'SUV'} price={'$525+'}></MiddleButton>
      <MiddleButton title={'Van'} price={'$649+'}></MiddleButton>
      <MoreButton></MoreButton>
    </div>
  );
};

export default AllButtons;
