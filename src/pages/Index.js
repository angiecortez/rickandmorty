import React, { useState, useEffect } from 'react';
import Card from '../components/atoms/Card';

import { GridUser } from '../components/atoms/Grid';
import Header from '../components/atoms/Header';
import Input from '../components/atoms/Input';
import { getUsers } from '../services';

const Index = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await getUsers();
      console.log('response', response.results);
      setUsers(response.results);
    } catch (e) {
      console.log('error', e);
    }
  };

  const filterName = (e) => {
    users.filter((user) => user.name.includes(e));
    setUsers(users);
    // console.log('data', data);
  };
  return (
    <div>
      <Header />
      <Input onChange={(e) => filterName(e.target.value)} />
      <GridUser>
        {users.map((user, i) => (
          <Card
            key={i}
            image={user.image}
            name={user.name}
            origen={user.origin}
            gender={user.gender}
            tipe={user.type}
            status={user.status}
          />
        ))}
      </GridUser>
    </div>
  );
};

export default Index;
