//주석

import React, { Component } from 'react';
import Customer from './component/Customer';
import './App.css';

const customers = [
    {
      'id': 1,
      'image': 'https://placeimg.com/64/64/any',
      'name': '최혁',
      'birthday': '750927',
      'gender': '남자',
      'job': '직장인',
    },
    {
      'id': 2,
      'image': 'https://placeimg.com/65/65/any',
      'name': '최용운',
      'birthday': '777777',
      'gender': '남자',
      'job': '직장인',
    },
    {
      'id': 3,
      'image': 'https://placeimg.com/66/66/any',
      'name': '홍길순',
      'birthday': '788888',
      'gender': '여자',
      'job': '직장인',
    },

]

function App() {
  
    return (
      <div>
        {
          customers.map(c => {
            return(
              <Customer 
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job} 
              />
            );
          })
        }
      </div>
    );
  
  
}

export default App ;


