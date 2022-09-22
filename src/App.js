import MediaButtons from "MediaButtons/MediaButtons";
import LoginForm from "LoginForm/LoginForm";
import Pager from "Pager/Pager";
import RadioButtons from "RadioButtons/RadioButtons";
import "./App.css";

const App = () => {
// used for radio buttons as the selections
const selections = ["Pear", "Apple", "Orange", "Bannana"]; 
// used for the pager panel as the starting point
const pagerStatus = { 
  startPage: '1',             // starting page of the display
  endPage: '10',              // ending (last) page of the dispay
  activePage: '1',            // where the active page is now
}
  return (
    <div>
      <div className="App-component">
        <header className="App-header">
          Media Buttons Component (Example)
        </header>
        <div className="App-content">
          <MediaButtons />
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">Login form component</header>
        <div className="App-content">
          <LoginForm />
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">Pager component</header>
        <div className="App-content">
          <Pager pagerStatus = {pagerStatus}/>
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">Radio Buttons component</header>
        <div className="App-content">
          <RadioButtons selections={selections}/>
        </div>
      </div>
    </div>
  );
};

export default App;
