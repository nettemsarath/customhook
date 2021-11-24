import React from "react";
import {FaStar} from 'react-icons/fa';
import styled from 'styled-components'


const StyledIcon = styled(FaStar)`
    color: "red";
    height: "50p
`;

export const Rating = ()=>{
    return(
        <div> { [...Array(4)].map(star=>{
            return <FaStar size={100} />
        }) } </div>
    )
}