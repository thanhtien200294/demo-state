import { memo } from "react";

const Children1 = (props) => {


    return(
        <div>
        <h1>{props.title}</h1>
        <button onClick={props.handleCount}>add</button>

      </div>
    )
}

export default Children1;
