import {Switch, Route} from "react-router-dom";
import Accounts from "./View/mainView/accounts/Accounts";
import Association from "./View/mainView/association/Association";
import Events from "./View/mainView/events/Events";
import Home from './View/mainView/home/Home';
import Spaces from "./View/mainView/spaces/Spaces";


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/dashboard/home' component={Home} />
            <Route exact path='/dashboard/associations' component={Association} />
            <Route exact path='/dashboard/spaces' component={Spaces} />
            <Route  path='/dashboard/accounts' component={Accounts} />
            <Route  path='/dashboard/events' component={Events} />
        </Switch>
    )
}

export default Routes;