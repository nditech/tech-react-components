import React, { Component } from "react";
import {
    Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import LoaderBtn from "../LoaderBtn";
import "./Signup.css";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    this.setState({ newUser: "test" });

    this.setState({ isLoading: false });
  }

  handleConfirmationSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });
  }

  renderConfirmationForm() {
    return (
      <Form onSubmit={this.handleConfirmationSubmit}>
        <FormGroup>
          <Label for="confirmationCode">Confirmation Code</Label>
          <Input
            autoFocus
            type="tel" name="confirmationCode" id="confirmationCode"
            value={this.state.confirmationCode}
            onChange={this.handleChange}
          />
          <FormText color="muted">Please check your email for the code.</FormText>
        </FormGroup>
        <LoaderBtn
          block
          bssize="large"
          disabled={!this.validateConfirmationForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Verify"
          loadingText="Verifying…"
        />
      </Form>
    );
  }

  renderForm() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
            <Label for="email">Email</Label>
            <Input
                autoFocus
                type="email" name="email" id="email" 
                value={this.state.email}
                onChange={this.handleChange}
            />
        </FormGroup>
        <FormGroup>
            <Label for="password">Password</Label>
            <Input 
                type="password" name="password" id="password"
                value={this.state.password}
                onChange={this.handleChange}
            />
        </FormGroup>
        <FormGroup>
            <Label for="confirmPassword">Confirm Password</Label>
            <Input 
                type="password" name="confirmPassword" id="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
            />
        </FormGroup>
        <LoaderBtn
          block
          bssize="large"
          disabled={!this.validateForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Signup"
          loadingText="Signing up…"
        />
      </Form>
    );
  }

  render() {
    return (
      <div className="Signup">
        {this.state.newUser === null
          ? this.renderForm()
          : this.renderConfirmationForm()}
      </div>
    );
  }
}
