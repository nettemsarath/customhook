import React, {useMemo, memo} from "react";

const Items = ({posts})=>{
    return(
        <ul>
            {
                posts.map((post, index)=>  <Item post={post} key={index} /> )
            }
        </ul>
    )
};

const Item = ({post,index})=>{
    console.log("ITEM", post.email );
    return(
        <li key={index} >{post.email}</li>
    )
}

export default memo(Items);