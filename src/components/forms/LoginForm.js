import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import "../../css/login-form.css";
import logo from "../../img/logo.svg";
import ReactSVG from "react-svg";
import {login, getUser} from "../../api/RestController"
const FormItem = Form.Item;

class LoginForm extends Component {
  handleSubmit = e => {
    var self = this;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        self.enterLogin(
          {
            email: values.mail,
            password: values.password
          });
        
      }
    });
  };

  enterLogin = (user) => {
    var self = this;
    var callback = {
      onSuccess: function(response){
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("isLoggedIn", true);
        self.getProfileInfo(encodeURI(user.email));
      },
      onFailed: function(error){
        console.log(error);
      }
    };

    login(user, callback)
  };


  getProfileInfo = (email) => {
    var callback = {
      onSuccess: function(response){
        localStorage.setItem("profileInfo", JSON.stringify(response.data));
        window.location.assign("/");
      },
      onFailed: function(error){
        console.log(error);
      }
    };

    getUser(email, callback)
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
              htmlType="primary"
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
        <Button
        onClick={this.handleSubmit}/>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(LoginForm);

export default WrappedNormalLoginForm;
