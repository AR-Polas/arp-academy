import React, { createContext, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './components/About/About';
import Admission from './components/Admission/Admission';
import Blog from './components/Blog/Blog';
import CourseDetails from './components/Courses/CourseDetails';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';

export const NavContext = createContext('')
function App() {
  const [navItem,setNavItem] = useState('home')
  return (
    <NavContext.Provider value={[navItem,setNavItem]}>
      <Router>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/courses" component={Courses}/>
         <Route exact path="/about" component={About} />
         <Route exact path="/blog" component={Blog} />
         <Route exact path="/courseDetails/:id" component={CourseDetails} />
         <Route exact path="/admission" component={Admission} />
       </Switch>
    </Router>
    </NavContext.Provider>
  );
}

export default App;
