import React, { Fragment } from 'react'
import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';
import FlipMove from 'react-flip-move';
import { FaEdit } from 'react-icons/fa';

const ListItem = styled.p`
    background-color: #bf07ac;
    width: 270px;
    margin: 20px auto;
    padding: 15px 10px;
    border-radius: 5px;
    font-size: 18px;
    color:white;
    span {
        cursor:pointer;
        float: right;
        padding: 0px 5px
    }
`;

const Task22 = [
    {
        text:"HIII 11",
        key: "1"
    },
    {
        text:"HIII 22",
        key: "2"
    },
    {
        text:"HIII 33",
        key: "3"
    },
    {
        text:"HIII 44",
        key: "4"
    }
];

export const Todos = ({Tasks, DeleteTask})=>{
    
    return(
        <Fragment>
            <FlipMove>
            {
                 Tasks.map((task)=> {
                    return( <ListItem key={task.key} >  {task.text} <span> <FaEdit /> </span> <span> <FaTrash onClick={ ()=> DeleteTask(task.key) } /> </span>  </ListItem> ) 
                })
            }
            </FlipMove>    
        </Fragment>
    )
}
