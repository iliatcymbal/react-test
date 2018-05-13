import { connect } from 'react-redux';
import { setUser } from "../store";

export const LoginComponent = ({ dispatch }) => {
  const submit = (event) => {
    dispatch(setUser({ name: event.target.name.value }));
    event.preventDefault();
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        name="name"
      />
      <input type="submit" value="Login"/>
    </form>
  );
};

export const Login = connect()(LoginComponent);
