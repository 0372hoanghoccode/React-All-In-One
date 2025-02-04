import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/user/userSlice';
import { RootState, AppDispatch } from '../app/store';

const UserList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      {loading && <p>Đang tải...</p>}
      {error && <p style={{ color: 'red' }}>Lỗi: {error}</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} (<a href={`mailto:${user.email}`}>{user.email}</a>)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
