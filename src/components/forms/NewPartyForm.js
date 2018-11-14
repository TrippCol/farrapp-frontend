import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import "../../css/new-party-form.css";
import {} from "../../api/RestController";
const FormItem = Form.Item;

class NewPartyForm extends Component {
  state = {};
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="party-container">
        <Form
          onSubmit={this.handleSubmit}
          className="party-form"
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
              Crear
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedNormalNewPartyForm = Form.create()(NewPartyForm);

export default WrappedNormalNewPartyForm;
