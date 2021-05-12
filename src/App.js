import React, { useState } from 'react';
import {Todos} from "./Components/Todo"
import {Rating} from "./Components/Rating";
import styled from 'styled-components'

const Wrapper = styled.section`
  background: #3f3160 ;
  min-height: 500px;
  width: 400px;
  margin: 40px auto;
`;

const Title = styled.h1`
  color: white;
  font-size: 25px;
  padding-top: 30px;
  text-align: center
`;

const Form = styled.form`
  
`;

const Input = styled.input`
  background-color: #257089;
  height: 50px;
  width: 200px;
  color: #fff;
  margin: 20px;
  font-size: 18px;
  border: none;
  padding: 0 20px;
  border-radius: 10px;
  outline: none;
  ::placeholder{
    color: rgba(255,255,255,0.5);
  }
`;

const Button = styled.button`
  border-radius: 5px;
  height: 50px;
  outline: none;
  border: none;
  padding: 0 10px;
  width: 80px;
  background-color: #ca9c24;
  cursor: pointer;
`;

function App() {
  const [Tasks, setTasks] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    text:"",
    key: ""
  });
  const HandleChange = (e)=>{
   
    setCurrentItem({text:e.target.value, key: Date.now() });
  }
  const AddTask = (e)=>{
    e.preventDefault();
    if(currentItem.text){
      const newTasks = [...Tasks, currentItem];
      setTasks(newTasks);
      setCurrentItem({
        text:"",
        key: ""
      });
    }

  };
  const DeleteTask = (key)=>{
    const newTasks = Tasks.filter((task)=> task.key !== key )
    console.log("newTasks",newTasks)
    setTasks(newTasks);
  }

  return (
    <Wrapper>

      <Title>
        TO DO APPLICATION
      </Title>

      <Form onSubmit={AddTask} >
        <Input placeholder="nettem sarath" value={currentItem.text} onChange={HandleChange} />
        <Button type="submit" > Add </Button>
      </Form>

        <Todos Tasks={Tasks} DeleteTask={DeleteTask} />
        {/* <Rating /> */}
    </Wrapper>
  );
}

export default App;
