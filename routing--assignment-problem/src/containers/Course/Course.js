import React, { Component } from 'react';

class Course extends Component {
    render () {
        return (
            <div>
                <h1>{this.props.match.params.coursesTitle}</h1>
                {/*#4 making the id content in the state from courses appear for each course id*/}
                <p>You selected the Course with ID: {this.props.match.params.courseID}</p>
            </div>
        );
    }
}

export default Course;