import React, { Component } from 'react';

//3 to make the Courses clickable
import { Link } from 'react-router-dom';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            {/*#3 you can manually add the path to="courses/courses" to each course or use state like below*/}
                            {/*#4 update the '/course' path with the course id in the state (course.id)*/}
                            return (
                          <Link key={course.id} to={this.props.match.url + '/' + course.id + '/' + course.title}>
                             
                             <article className="Course">{course.title}</article>
                         </Link>
                        
                            );                       
                        } )
                    }
                </section>
            </div>
        );
    }
}

export default Courses;