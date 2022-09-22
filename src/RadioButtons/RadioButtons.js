import "./RadioButtons.css";

const RadioButtons = ({selections}) => {

  let items = selections.map((i, index) => {
    return(<span className="radioSelections" key={index}>
      <input type="radio" id={i} name="items" value={i}></input>
      <label htmlFor={i}>{i}</label>
    </span>);
  })

  return (<fieldset id="items">{items}</fieldset>);
};

export default RadioButtons;