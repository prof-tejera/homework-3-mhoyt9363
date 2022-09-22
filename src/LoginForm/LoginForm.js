import Panel from "components/Panel/Panel";
import Input from "components/Input/Input";
import "./LoginForm.css";

const LoginForm = ({id}) => {

  function handler() {
    alert('The Form Was Submitted');
  }

  return (
    <Panel>
      <form onSubmit = {handler}>
      <Input
        type = 'text'
        label = 'User ID: '
        placeHolder = 'User ID'
        name = 'uid'
        required = 'required'
      />
      <Input
        type = 'password'
        label = 'Password; '
        placeHolder = 'Password'
        name = 'pw'
        required = 'required'
      />
      <Input
        type = 'checkBox'
        label = 'Remember me: '
        name = 'remember'
      />
      <Input
        type = 'submit'
        value = 'Submit'
      />
      </form>
    </Panel>
  );};

export default LoginForm;
