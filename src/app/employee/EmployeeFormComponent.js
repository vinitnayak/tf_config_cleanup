import redux from 'redux'
import React, { Component, PropTypes } from 'react'
import { Field, SubmissionError } from 'redux-form'

export const renderField = field => {
	const {type, label, input,meta:{touched, error, warning}} = field
	return (
		<div className="form-group">
		<label>{label}</label> 
		<br/>
		<input {...input} type={type} className="form-control"/>
		{touched &&
			((error && <span>{error}</span>) ||
			(warning && <span>{warning}</span>))}
		</div>
	)
}

class EmployeeFormComponent extends Component {
	mySubmit(values) {
		console.log(values);
		return this.props.onSave(values).then(response => {
			this.props.reset()
			return response
		}).catch(error => {
			throw new SubmissionError(error)
		})
	}

	render() {
		//const { handleSubmit} = this.props
		return (
			<div className="cBox boxTools col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
            <h1>Add Employee</h1>
            <form onSubmit={this.props.handleSubmit((event)=>this.mySubmit(event))}>
                <Field name="first_name" label="First Name" component={renderField} type="text"/>
                <Field name="last_name" label="Last Name" component={renderField} type="text"/>
                <Field name="email" label="email" component={renderField} type="email"/>
                <button type="submit" className="btn btn-primary">Add Employee</button>
            </form>
            </div>
		)
	}
}

/*EmployeeFormComponent.propTypes = {
	onSave: PropTypes.func.isRequired,

	handleSubmit: PropTypes.func.isRequired,
	reset: PropTypes.func.isRequired,
	submitting: PropTypes.bool.isRequired
}*/

export default EmployeeFormComponent