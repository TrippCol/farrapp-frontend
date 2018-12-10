import React, { Component } from "react";
import { Form, Input, Button, TimePicker, DatePicker } from "antd";
import "../../css/new-party-form.css";
import { addParty } from "../../api/RestController";

const FormItem = Form.Item;

class NewPartyForm extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const party = {
          creator: JSON.parse(localStorage.profileInfo).name,
          partyName: values.name,
          description: values.description,
          eventDate: values.date.format("YYYY-MM-DD"),
          eventHour: values.time.format("HH:mm"),
          address: values.address,
          place: values.place,
          price: values.cover,
          optionalDescription: "",
          assistants: [],
          categories: [],
          cartaDeProductos: [],
          minAge: 18,
          dressCode: ""
        };
        console.log(party);
        var callback = {
          onSuccess: function(response) {
            console.log(response);
          },
          onFailed: function(error) {
            console.log(error);
          }
        };
        addParty(party, callback);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    return (
      <div className="party-container">
        <Form onSubmit={this.handleSubmit} className="party-form">
          <FormItem {...formItemLayout} label="Nombre">
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "Ponle un nombre a la farra!"
                }
              ]
            })(<Input />)}
          </FormItem>

          <FormItem {...formItemLayout} label="Descripcion">
            {getFieldDecorator("description", {
              rules: [
                {
                  required: true,
                  message: "Ponle una descripcion a la farra!"
                }
              ]
            })(<Input />)}
          </FormItem>

          <FormItem {...formItemLayout} label="Fecha">
            {getFieldDecorator("date", {
              rules: [
                {
                  type: "object",
                  required: true,
                  message: "Ponle una fecha a la farra!"
                }
              ]
            })(<DatePicker />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Hora">
            {getFieldDecorator("time", {
              rules: [
                {
                  type: "object",
                  required: true,
                  message: "Ponle una hora a la farra!"
                }
              ]
            })(<TimePicker format="HH:mm" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Direccion">
            {getFieldDecorator("address", {
              rules: [
                {
                  required: true,
                  message: "Ponle una direccion a la farra!",
                  whitespace: true
                }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Lugar">
            {getFieldDecorator("place", {
              rules: [
                {
                  required: true,
                  message: "Dale una lugar a la Farra!",
                  whitespace: true
                }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Precio">
            {getFieldDecorator("cover", {
              rules: [
                {
                  required: true,
                  message: "Dale un precio al cover!",
                  whitespace: true
                }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
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
