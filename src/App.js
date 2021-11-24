import React, { useState } from "react";
import { Todos } from "./Components/Todo";
import { Rating } from "./Components/Rating";
import styled from "styled-components";
import UseQuery from "Components/UseQuery";
import useTest from "Components/useTest";
import LifecycleDemo from "Components/mountDemo";
import axios from "axios";
import Items from "Components/List";

const Wrapper = styled.section`
  background: #3f3160;
  min-height: 500px;
  width: 400px;
  margin: 40px auto;
`;

const Title = styled.h1`
  color: white;
  font-size: 25px;
  padding-top: 30px;
  text-align: center;
`;

const Form = styled.form``;

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
  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
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

const ItemsList = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  },
];

function App() {
  const [bool, setBool] = useState(true);
  const [tag, setTag] = useState(4);
  const Increment = () => {
    setTag((tag) => tag + 1);
  };
  const { isLoading, data: user, fetchUsers, error } = useTest(tag);
  console.log("data", user);
  console.log("isLoading", isLoading);
  console.log("error", error);

  const [Tasks, setTasks] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    text: "",
    key: "",
  });
  const AddUser = async (ID) => {
    try {
      const data = await axios.get(`https://reqres.in/api/products/${ID}`);
      return data;
    } catch (error) {
      throw error;
    }
  };
  // const { data: posts, loading, error } = UseQuery(AddUser,7);
  const HandleChange = (e) => {
    setCurrentItem({ text: e.target.value, key: Date.now() });
  };
  const AddTask = (e) => {
    e.preventDefault();
    if (currentItem.text) {
      const newTasks = [...Tasks, currentItem];
      setTasks(newTasks);
      setCurrentItem({
        text: "",
        key: "",
      });
    }
  };
  const DeleteTask = (key) => {
    const newTasks = Tasks.filter((task) => task.key !== key);
    console.log("newTasks", newTasks);
    setTasks(newTasks);
  };

  return (
    <Wrapper>
      <Title>TO DO APPLICATION</Title>

      <Form onSubmit={AddTask}>
        <Input
          placeholder="nettem sarath"
          value={currentItem.text}
          onChange={HandleChange}
        />
        <Button type="submit"> Add </Button>
      </Form>

      <Todos Tasks={Tasks} DeleteTask={DeleteTask} />
      {/* <Rating /> */}
      {/* <Items posts={ItemsList} /> */}

      <button onClick={Increment}> Increment </button>
      <button onClick={() => fetchUsers(tag)}> Increment </button>
      <br />
      {bool && <LifecycleDemo />}
      <button onClick={() => setBool(!bool)}>setBool</button>
    </Wrapper>
  );
}

export default App;
