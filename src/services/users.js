export const fetchUsers = () =>
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(data => data.json());
