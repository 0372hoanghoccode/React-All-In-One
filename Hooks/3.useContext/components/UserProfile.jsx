import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';

const UpdateUser = () => {
    const { setUser } = useContext(UserContext);
    const [newName, setNewName] = useState('');

    const handleUpdate = () => {
        setUser({ name: newName });
    };

    return (
        <div>
            <h1>Update User</h1>
            <input
                type="text"
                placeholder="Enter new name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
            />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default UpdateUser;
