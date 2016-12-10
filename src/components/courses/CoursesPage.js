import React, {PropTypes} from 'react';


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
        alert(`Saved ${this.state.course.title}`);
    }

    render(){
        return(
            <div>
                <h1>Courses</h1>
                <hr />
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

export default CoursesPage;
