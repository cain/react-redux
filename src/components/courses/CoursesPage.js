import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            course: { title: "" }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course });
    }

    onClickSave() {
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    courseRow(course, index){
        return (<div className="row" key={index}>
                <div className="col-xs-12">
                    <h3>{course.title}</h3>
                </div>
                </div>);
    }

    render(){
        return(
            <div className="col-xs-12">
                <h1>Courses</h1>
                <hr />
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>

                    <div className="form-group row">
                        <label className="col-xs-2 col-form-label">Title</label>
                        <div className="col-xs-8">
                        <input className="form-control " type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
                    </div>
                        <div className="col-xs-2">
                            <input className="btn btn-primary" type="submit" value="Save" onClick={this.onClickSave} />
                        </div>
                    </div>

                </div>

        );
    }
}

CoursesPage.PropTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        courses: state.courses
    };
}
export default connect(mapStateToProps)(CoursesPage);
