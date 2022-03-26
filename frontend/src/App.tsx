import { gql, useQuery } from '@apollo/client'
import { useState } from 'react';
import { NewUserForm } from './components/NewUserForm';

type User = {
  id: string;
  name: string;
}

export const GET_USER = gql`
query {
  users {
    id
    name
  }
}`;

function App() {
  const { data, loading, error } = useQuery<{users: User[]}>(GET_USER);
  console.log(data)
  if(loading) {
    return <p>Carregando...</p>
  }
  return (
    <div>
      <NewUserForm/>
      <ul>
        {data?.users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default App
