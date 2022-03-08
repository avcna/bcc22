import React from 'react';
import '../App.css';
import styled from 'styled-components';

export const A = styled.a`
  color: #FFB703;
  font-family: Poppins;

  &.active{
    background-color: #FFB703;
    color: white;
    }

  &:hover{
    background-color: #FFB703;
    color: white;
    }

`;

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (

      <ul className='pagination' >
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <A onClick={() => paginate(number)} href='#' className='page-link'>
              {number}
            </A>
          </li>
        ))}
      </ul>

  );
};

export default Pagination;
