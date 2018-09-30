import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import ReactSVG from "react-svg";
import Recaptcha from "react-recaptcha";
import "../../css/register-form.css";
import logo from "../../img/logo.svg";

const FormItem = Form.Item;

class RegisterForm extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="register-container">
        <div className="logo">
          <ReactSVG src={logo} />
        </div>
        <Form
          onSubmit={this.handleSubmit}
          className="login-form"
          style={{ paddingTop: "50px" }}
        >
          <FormItem label="Nombre">
            {getFieldDecorator("userName", {
              rules: [
                { required: true, message: "Por favor escribe tu nombre!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Nombre"
              />
            )}
          </FormItem>
          <FormItem label="Correo electrónico">
            {getFieldDecorator("Mail", {
              rules: [
                { type: "email", message: "No escribiste un correo valido!" },
                { required: true, message: "Por favor escribe tu correo!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Correo electrónico"
              />
            )}
          </FormItem>
          <FormItem label="Password">
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Please input your password!"
                },
                {
                  validator: this.validateToNextPassword
                }
              ]
            })(<Input type="password" />)}
          </FormItem>
          <FormItem label="Confirm Password">
            {getFieldDecorator("confirm", {
              rules: [
                {
                  required: true,
                  message: "Please confirm your password!"
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
          </FormItem>
          <FormItem>
            <Recaptcha />
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedRegisterForm = Form.create()(RegisterForm);

export default WrappedRegisterForm;
