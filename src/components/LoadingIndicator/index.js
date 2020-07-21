// SOURCE: https://codepen.io/eight/pen/LyrPXJ

import React from 'react';
import './LoadingIndicator.scss';

function LoadingIndicator() {
  return (
    <div className='loading-container'>
      <div id='wrap'>
        <div class='loading outer'>
          <div class='loading inner'></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingIndicator;
