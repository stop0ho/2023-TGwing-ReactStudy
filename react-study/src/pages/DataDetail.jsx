import React from 'react';
import { useParams } from 'react-router-dom';
import { DUMMY } from '../store';

const DataDetail = () => {
  const index = useParams();
  console.log(index.id);
  const tempList = DUMMY.filter((아이템) => 아이템.id === Number(index.id))[0];
  console.log(tempList);
  return (
    <div>
      <div>{tempList.id}</div>
      <div>{tempList.title}</div>
      <div>{tempList.content}</div>
      <div>{tempList.created_at}</div>
    </div>
  );
};

export default DataDetail;
