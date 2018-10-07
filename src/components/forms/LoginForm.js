import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import "../../css/login-form.css";
import apimock from "../../ApiMock";
import logo from "../../img/logo.svg";
import ReactSVG from "react-svg";

const FormItem = Form.Item;

class LoginForm extends Component {
  /*handleLogin = () => {
    let self = this;
    apimock.enterLogin(this.state.email, this.state.password,
        function (response) {
            localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem("isLoggedIn", true);
        });
    apimock.getUserByEmail(this.state.email,
        function(response){
            localStorage.setItem("profileInfo", JSON.stringify(response.data));
        });
  };*/

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        apimock.enterLogin(values.mail, values.password, function(response) {
          localStorage.setItem("token", response.data.accessToken);
          localStorage.setItem("isLoggedIn", true);
        });
        apimock.getUserByEmail(values.mail, function(response) {
          localStorage.setItem("profileInfo", JSON.stringify(response.data));
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <a href="/">
          <div className="logo">
            <ReactSVG src={logo} />
          </div>
        </a>
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
            <a href="/register">Registrate!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(LoginForm);

export default WrappedNormalLoginForm;
