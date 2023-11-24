import Routing from "./routing/Routing";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Context from "./component/context/Context";

function App() {
  const User = JSON.parse(localStorage.getItem('userInfo'))
  return (
    <div>
      <Context.Provider value={{User}}>
      <Routing/>
      </Context.Provider>
    </div>
  );
}

export default App;
