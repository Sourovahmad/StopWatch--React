
import Title from "../Tiltle/Title";
import "./App.css";
import CountDown from "../CountDown/CountDown";


function App() {
  return (
    <>
      <div className="container py-5">
        <div className="row">

          <div className="col-sm-8 offset-sm-2">
           <Title /> 
           <CountDown /> 
           
          </div>



        </div>
      </div>
    </>


  );
}

export default App;
