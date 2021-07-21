import React from 'react';
import {CircleProgress} from 'react-gradient-progress';
import '../App.css';

const Gas = ({level}) => {
  return (
    <div className="container">
      <CircleProgress
        percentage={level} 
        strokeWidth={3}
        width={75}
        primaryColor={['#f53803','#f5d020' ]}
      />
    </div>
  );
}

export default Gas;