import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, selectData } from './userSlice';

const User: React.VFC = () => {
  const data = useSelector(selectData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  console.log(data);
  return (
    <div>
      <h3>User</h3>
      {data.map((d) => (
        <div key={d.id}>{d.name}</div>
      ))}
    </div>
  );
};

export default User;
