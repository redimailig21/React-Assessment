
import { Route } from 'react-router';
import Home from './components/Home.js';
import MainHeader from './components/MainHeader.js';
import SignUp from './components/SignUp';



function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/Signup">
          <SignUp></SignUp>
        </Route>
        
      </main>  
    </div>
  );
}

export default App;