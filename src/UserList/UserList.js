export const UserList = ({ users }) => (
  <ul>
    {users.map((user) => <li>{user.name}</li>)}
  </ul>
);
