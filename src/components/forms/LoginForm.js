import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import "../../css/login-form.css";
import logo from "../../img/logo.svg";
import ReactSVG from "react-svg";

const FormItem = Form.Item;

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <div className="logo">
          <ReactSVG src={logo} />
        </div>
        <Form
          onSubmit={this.handleSubmit}
          className="login-form"
          style={{ paddingTop: "50px" }}
        >
          <FormItem>
            {getFieldDecorator("mail", {
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
          <FormItem>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Por favor escribe tu contraseña!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Contraseña"
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Entrar
            </Button>
            <a className="login-form-forgot" href="">
              ¿Problemas para entrar?
            </a>
            <a href="">Registrate!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(LoginForm);

export default WrappedNormalLoginForm;
