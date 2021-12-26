import React from "react"
import {
    Route,
    Switch, useLocation,
} from "react-router-dom"
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";


const Routes = () => {
    const location = useLocation();

    return (
        <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Main}/>
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/blog" component={BlogPage}/>
            {/*<Route exact path="/work" component={WorkPage}/>*/}
            {/*<Route exact path="/skills" component={MySkillsPage}/>*/}
        </Switch>
    )
}

export default Routes;
