import './App.css';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SignInAdmin from './Component/Sign In/Signin';
import Dashboardadmin from './Component/Dashboard/Dashboard-Admin/Dashboardadmin';
import { Addassociation } from './View/mainView/association/addAssociation/Addassociation';
import { CreateAccount } from './View/mainView/accounts/createAccount/CreateAccount';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route  path="/signin" component={SignInAdmin}/>
        <Route path="/dashboard" component={Dashboardadmin}/>
        <Route path="/add-association" component={Addassociation}/>
        <Route path="/create-account" component={CreateAccount}/>
        {/* Redirection par defaut */}
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </div>
  );
}

export default App;
