import React from "react";
import { Button, Card, Form, Input } from 'antd';
import { CREATE_STUDENT } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";
import { useHistory } from 'react-router-dom';

function NewStudent() {
  const history = useHistory();
  const [createStudent] = useMutation(CREATE_STUDENT);

  interface Student {
    name: string;
    cpf: string;
    email: string;
  }

  function onFinish(values: Student) {
    const {name, cpf, email} = values;
    createStudent({ variables: { name, cpf, email } });  
    history.push('/')
  }
  return (
    <div style={{ height: '100%', 
                  display: 'flex',
                  alignItems: 'center', 
                  justifyContent: 'space-around' 
              }}
    >
      <Card 
        style={{ width: 500,  borderRadius: '8px'}} 
        bordered={false}
      >
        <Form 
          layout='vertical' 
          onFinish={onFinish}
        >
          <h1>Novo Estudannte</h1>
          <hr style={{ marginBottom: 10}}/>
          <Form.Item 
            name='name' 
            label='Nome' 
            rules={[{ required: true }]}>
            <Input/>
          </Form.Item>
          <Form.Item 
            name='cpf' 
            label='CPF' 
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item 
            name='email' 
            label='Email' 
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>               
          <br />
          <Button 
            htmlType="submit"
            type="primary"
            style={{ marginBottom: 15, width: 90}}>
            Cadastrar
          </Button>
        </Form>                       
      </Card>
    </div>
  )
}

export default NewStudent