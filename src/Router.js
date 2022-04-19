import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import UserLandingPage from './pages/UserLanding/UserLandingPage';
import MainPageV3 from './pages/Landing/MainPageV3';
import MakePageV2 from './pages/Make/MakePageV2';
import AdminPage from './pages/AdminPage/AdminPage';
import ResponsePage from './pages/Response/ResponsePage';
import SubmitPage from './components/Make/unused/SubmitPage';
import WhatIsSurfee from './pages/Customer/WhatIsSurfee'
import VotePage from './pages/VotePage/VotePage'
import FirstQuestions from './pages/Questions/FirstQuestions'
import ExamplePage from './pages/ExamplePage/ExamplePage'
import SourcingPage from './pages/Sourcing/SourcingPage'
import GiftPage from './pages/EventPage/GiftPage/GiftPage'
import GiftMake from './pages/EventPage/GiftPage/GiftMake'
import GiftEnd from './pages/EventPage/GiftPage/GiftEnd'
import GiftBox from './pages/EventPage/GiftPage/GiftBox'
import ContestPage from './pages/EventPage/ContestPage/ContestPage'
import ScrollToTop from './tools/ScrollToTop'
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

export const UserContext = React.createContext({
    state : {},
    action : {}
});

const AppRouter = ({userObj, isLoggedIn}) => {
    const contextValue = {
        state: {userObj, isLoggedIn},
        action : {},
    }

        return(
            <Router history={history}>
                <UserContext.Provider value={contextValue}>
                    <ScrollToTop>
                    <div className="Container" style={{ minHeight: 'calc(100vh - 80px)', zIndex:-1 }}>
                        <Switch>
                            <Route exact path="/surfeeadminpage">
                                <AdminPage history={history}/>
                            </Route>
                            <Route exact path="/" onUpdate={() => window.scrollTo(0, 0)}>
                                <MainPageV3 history={history} isLoggedIn={isLoggedIn} userObj={userObj}/>
                            </Route>
                            {/* <Route path="/response" onUpdate={() => window.scrollTo(0, 0)}>
                                <ResponsePage history={history} userObj={userObj}/> 
                            </Route>
                            <Route path="/submit">
                                <SubmitPage history={history}/>
                            </Route>
                            <Route 
                                path="/make" 
                                onUpdate={() => window.scrollTo(0, 0)}>
                                <MakePageV2 history={history} isLoggedIn={isLoggedIn} userObj={userObj}/>
                            </Route> */}
                            {/* <Route 
                                path="/make/:code" 
                                onUpdate={() => window.scrollTo(0, 0)}
                                render={(history, isLoggedIn, userObj) => <MakePageV2 history={history} isLoggedIn={isLoggedIn} userObj={userObj} />} /> */}
                            <Route path="/questions" onUpdate={() => window.scrollTo(0, 0)}>
                                <FirstQuestions history={history} isLoggedIn={isLoggedIn}/>
                            </Route>
                            <Route path="/surfeeexamples" onUpdate={() => window.scrollTo(0, 0)}>
                                <ExamplePage history={history} isLoggedIn={isLoggedIn}/>
                            </Route>
                            <Route path="/surfeeintro" onUpdate={() => window.scrollTo(0, 0)}>
                                <WhatIsSurfee history={history} isLoggedIn={isLoggedIn}/>
                            </Route>
                            <Route path="/vote" onUpdate={() => window.scrollTo(0, 0)}>
                                <VotePage history={history} isLoggedIn={isLoggedIn}/>
                            </Route>
                            <Route path="/sourcing" onUpdate={() => window.scrollTo(0, 0)}>
                                <SourcingPage history={history} isLoggedIn={isLoggedIn}/>
                            </Route>
                            <Route path="/giftevent" onUpdate={() => window.scrollTo(0, 0)}>
                                <GiftPage history={history} isLoggedIn={isLoggedIn}/>
                            </Route>
                            <Route path="/giftmake" onUpdate={() => window.scrollTo(0, 0)}>
                                <GiftMake history={history} isLoggedIn={isLoggedIn}/>
                            </Route>
                            <Route path="/giftend" onUpdate={() => window.scrollTo(0, 0)}>
                                <GiftEnd history={history} isLoggedIn={isLoggedIn}/>
                            </Route>
                            <Route path="/giftbox/:id"
                                render={(props) => <GiftBox {...props} />}/>
                            <Route path="/surfeecontest" onUpdate={() => window.scrollTo(0, 0)}>
                                <ContestPage history={history} isLoggedIn={isLoggedIn}/>
                            </Route>
                            <Route
                                path="/:id"
                                render={(props) => <UserLandingPage {...props} />}/>
                            <Route
                                path="*"
                                render={(props) => <UserLandingPage {...props} />}/>
                        </Switch>
                    </div>
                    </ScrollToTop> 
                </UserContext.Provider>
            </Router>
        )
    // }
}
export default AppRouter;