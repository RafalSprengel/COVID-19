import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Overall from '../pages/Overall';
import Find from '../pages/Find';

const Page = (props) => {
    return (<>
        <Switch >
            <Route path='/' exact component={Overall} />
            <Route exact path='/overall' component={Overall} />
            <Route path='/find' render={() => <Find {...props} />} />
            <Route render={() => ('Page not found')} />
        </Switch>
    </>
    )
}
export default Page