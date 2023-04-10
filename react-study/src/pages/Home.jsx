import React from 'react';
import Navigation from '../components/Navigation';
import { DUMMY } from '../store/index';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex'>
      <Navigation />
      <div className='container'>
        {DUMMY.map((item) => (
          <Link to={`/data/${item.id}`} key={item.id}>
            <div className='flex data-box'>
              <div className='data-id'>{item.id}</div>
              <div className='data-title'>{item.title}</div>
              <div className='data-content'>{item.content}</div>
              <div className='data-date'>{item.created_at}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
