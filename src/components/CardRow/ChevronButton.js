import React from 'react';

function CheckronButton({ type }) {
  return (
    <button className='chevron-btn'>
      {type === 'right' ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='#fff'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' />
          <polyline points='9 6 15 12 9 18' />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='#fff'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' />
          <polyline points='15 6 9 12 15 18' />
        </svg>
      )}
    </button>
  );
}

export default CheckronButton;
