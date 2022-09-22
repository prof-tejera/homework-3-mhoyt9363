
const Input = ({type, label, placeHolder, name, required, ...inputProps }) => {
    return (
      <div>
      <label htmlFor = {name} className="labelStyles">{label}  </label>
      <input 
        type = {type}
        placeholder = {placeHolder}
        name = {name}
        className="inputStyles"
        required={required}
      >
      </input>
      </div>
    );
  }

export default Input;
