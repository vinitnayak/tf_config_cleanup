import redux from 'redux'
import React, { Component, PropTypes } from 'react'
import { Field, SubmissionError } from 'redux-form'
import {Alert, Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Col, Form,Input } from 'reactstrap';

export const renderField = field => {
	const { type, label, input, meta: { touched, error, warning } } = field
	return (
		<div className="form-group">
			<label>{label}</label>
			<br />
			<input {...input} type={type} className="form-control" />
			{touched &&
				((error && <span>{error}</span>) ||
					(warning && <span>{warning}</span>))}
		</div>
	)
}
export const renderFieldRs = field => {
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

class PeriodicPayrollRecordForm extends Component {
	constructor(props) {
        super(props);
        this.state = {
            showAddPayrollRecordModal: false,
        };
        this.toggleAddPayrollRecordModal = this.toggleAddPayrollRecordModal.bind(this);
    }
    toggleAddPayrollRecordModal() {
        this.setState({
            showAddPayrollRecordModal: !this.state.showAddPayrollRecordModal,
          closeAll: false
        });
    }
	mySubmit(values) {
		console.log(values);
	}
	render() {
		return (
			<Modal size="lg" isOpen={this.state.showAddPayrollRecordModal} toggle={this.toggleAddPayrollRecordModal} onClosed={this.toggleAddPayrollRecordModal}>
				<ModalHeader>Add Periodic Record</ModalHeader>
				<ModalBody>
					<Form>
						<FormGroup row>
							<Label for="companyName" sm={3}>Company Name</Label>
							<Col sm={8}>
								<Input type="select" name="companyName" id="companyName" placeholder="Select Company Name" />
							</Col>
							<Col sm={1}></Col>
						</FormGroup>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={this.toggleAddPayrollRecordModal}>Save</Button>{' '}
					<Button color="secondary" onClick={this.toggleAddPayrollRecordModal}>Cancel</Button>
				</ModalFooter>
			</Modal>
		)
	}
}
export default PeriodicPayrollRecordForm