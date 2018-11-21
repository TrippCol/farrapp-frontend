import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import ReactSVG from "react-svg";
import Recaptcha from "react-recaptcha";
import "../../css/register-form.css";
import logo from "../../img/logo.svg";
import { addNewUser } from "../../api/RestController";

const FormItem = Form.Item;

class RegisterForm extends Component {
  state = { verified: false };

  verifyCaptcha = () => {
    this.setState({ verified: true });
    console.log("verified!!!");
  };

  onLoadCaptcha = () => {};

  handleSubmit = e => {
    var self = this;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err && this.state.verified) {
        console.log("Received values of form: ", values);
        const user = {
          email: values.mail,
          name: values.userName,
          password: values.password
        };
        //ApiMock.addNewUser(user);
        self.addUser(user);
      }
    });
  };

  addUser = user => {
    var callback = {
      onSuccess: function(response) {
        console.log(response);
      },
      onFailed: function(error) {
        console.log(error);
      }
    };
    addNewUser(user, callback);
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Las dos contraseñas no coinciden!");
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
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    return (
      <div className="register-container">
        <a href="/">
          <div className="logo">
            <ReactSVG src={logo} />
          </div>
        </a>
        <Form
          onSubmit={this.handleSubmit}
          className="register-form"
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
          <FormItem label="Contraseña">
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Por favor escribe tu contraseña!"
                },
                {
                  validator: this.validateToNextPassword
                }
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
          <FormItem label="Confirmar contraseña">
            {getFieldDecorator("confirm", {
              rules: [
                {
                  required: true,
                  message: "Por favor confirma tu contraseña!"
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Confirmar contraseña"
                onBlur={this.handleConfirmBlur}
              />
            )}
          </FormItem>
          <FormItem>
            <Recaptcha
              sitekey="6LdYzHIUAAAAAAl3dESTfyU24XxldEtPTVs3NHzg"
              render="explicit"
              verifyCallback={this.verifyCaptcha}
              onloadCallback={this.onLoadCaptcha}
            />
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedRegisterForm = Form.create()(RegisterForm);

export default WrappedRegisterForm;
