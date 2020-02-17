import React, { Fragment } from 'react';
import './dashboard.css';
import Meetingrooms from './Meetingrooms';
import Createmeeting from './Mymeetings';
import Mymeetings from './Mymeetings';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const routes = [
    {
        path: '/dashboard/meetingrooms',
        exact: true,
        main: () => <Meetingrooms />
    },
    {
        path: '/dashboard/mymeetings',
        main: () => <Mymeetings />
    },
    {
        path: '/dashboard/createmeeting',
        main: () => <Createmeeting />
    }
]

const Dashboard = () => {
    return (
        <Fragment>
            <Router>
                <div className='container-fluid mrcontainer'>
                    <div className='row'>
                        <div className='col-md-3 roomsidebar'>
                            <ul>
                                <Link to='/dashboard/mymeetings'>
                                    <li>My meetings</li>
                                </Link>
                                < Link to='/dashboard/meetingrooms'>
                                    <li>Meeting rooms</li>
                                </Link>
                                <Link to='/dashboard/createmeeting'>
                                    <li>Create a Meeting</li>
                                </Link>
                            </ul>
                            <Switch>
                                {routes.map((route, index) => (
                                    <Route key={index} path={route.path} exact={route.exact} />
                                ))}
                            </Switch>
                        </div>
                        <div className='col-md-9'>
                            <Switch>
                                {routes.map((routes, index) => (
                                    <Route key={index} path={routes.path} exact={routes.exact} children={<routes.main />} />
                                ))}
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </Fragment>
    )
}

export default Dashboard;