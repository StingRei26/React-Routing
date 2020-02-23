import React, { Component } from 'react';
// #1 Route  // #2 Link  #2 NavLink #3 Switch #8 Redirect
import { Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';
// #3 Import course
import Course from './containers/Course/Course';
// #7 import NoMatch
import NoMatch from './components/NoMatch/NoMatch';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <div className="App">
        <ol style={{textAlign: 'left'}}>
          <li>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
          <li>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
          <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
          <li>Pass the course ID to the "Course" page and output it there</li>
          <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
          <li>Load the "Course" component as a nested component of "Courses"</li>
          <li>Add a 404 error page and render it for any unknown routes</li>
          <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
        </ol>
      
      {/*#2 simple nave to Users and Courses*/} 
      {/*#2 changed 'Link' to 'NavLink' to apply styling*/}
      <nav>
        <ul style={{listStyle: 'none', margin: 'auto', padding: '0'}}>
          <li style={{margin: '10px', display: 'inline-block'}}> 
            <NavLink to ="/courses">Courses</NavLink>
          </li>
          <li style={{margin: '10px', display: 'inline-block'}}> 
            <NavLink to ="/users">Users</NavLink>
          </li>
        </ul>
      </nav>


      {/*#1 adding the routs for the users and courses components  */}
      {/*#3 adding Switch if you dont want to use exact / the order of the maths changes 'courses' at the bottom */}
       <Switch>
        <Route path="/users" component={Users} />
        {/*#3 creating a path to the course component which fired the individual course's in courses */}
        {/*#4 adding (courseID) to pass the course id to the courses page */}
        {/*#5 adding another value to courses path to pass the title for each id (coursesTitle)*/}
        <Route path="/courses/:courseID/:coursesTitle" component={Course} />
        <Route path="/courses" component={Courses} />
        {/*#8 adding Redirect*/}
        <Redirect from="/all-courses" to="/courses" />
        {/*#7 adding the 404 NoMatch with a plain Route tag*/}
        <Route component={NoMatch}/>

      </Switch>
      </div>
    );
  }
}

export default App;
