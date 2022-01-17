import React, { useState} from "react";
import { Table, Button, Card, Input } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { DeleteFilled, SearchOutlined } from '@ant-design/icons';
import { GET_STUDENTS } from "../Graphql/Queries";
import { DELETE_STUDENT } from "../Graphql/Mutation";
import { useQuery, useMutation } from "@apollo/client";
import { useHistory } from 'react-router-dom';

function ListStudents() {
  const history = useHistory();
  const { data } = useQuery(GET_STUDENTS);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');

  const [deleteStudent] = useMutation(DELETE_STUDENT);


  interface Student {
    id: number;
    name: string;
    cpf: string;
    email: string;
  }

  const columnsDetails: ColumnsType<Student> = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      align: "center",
      render: (record: string) => (
        <div style={{fontSize:14}}>
          {record}
        </div>
      )
    }, 
    {
      title: 'CPF',
      dataIndex: 'cpf',
      key: 'cpf',
      align: "center",
      render: (record: string) => (
        <div style={{fontSize:14}}>
          {record}
        </div>
      )
    }, 
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
      align: "center",
      render: (record: string) => (
        <div style={{fontSize:14}}>
          {record}
        </div>
      )
    }, 
    {
      title: 'Deletar',
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (record: number) => (
        <Button
          shape="circle"                 
          onClick={() => {
            deleteStudent({ variables: { id: Number(record) } });  
            // refetch();
            }
          }
        >
          <DeleteFilled />
        </Button>
      )
    }, 
  ]; 

  function onFinish() {
    console.log(name, cpf, email)
  }

  return (
    <div>
      <Card         
        bordered={false}          
        style={{ width: 1100,  borderRadius: '8px', marginBottom: 15}}
      >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>

            <Input style={{ marginRight: 10}} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
            
            <Input style={{ marginRight: 10}} onChange={(e) => setCpf(e.target.value)} placeholder="CPF" />
              
            <Input style={{ marginRight: 10}} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />

            <Button 
              onClick={onFinish}
              type="primary"
              shape="circle">
              <SearchOutlined />
            </Button>
              
          </div>
          <div style={{display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
            <Button type="primary" onClick={() => history.push('/register')}>
              Cadastrar
            </Button>
          </div>
        </div>
      </Card>
      <div>
        <Card 
          bordered={false}
          title="Estudantes"
          style={{ width: 1100,  borderRadius: '8px'}}
        >
          <Table<Student>                                      
            dataSource={data?.getAllStudents}                     
            columns={columnsDetails} 
            rowKey={(record) => record.id}
            scroll={{ x: "none", y: "400px" }}
            pagination={{ pageSize: 10 }}        
          />
        </Card>
      </div>
    </div>
  );          
  
}

export default ListStudents;