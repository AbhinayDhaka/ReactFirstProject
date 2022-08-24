import React from "react";
import './Modules.css';
import Tab from "./Table";


const Module=()=>{
    return(
        <div>
            <div id="Allmodule">


<div id="onemodule">
  <span class="dot"></span>
<h1 id="twohundred">200</h1>
<p id="users">Users</p>

</div>

<div id="twomodule">
<span class="dot"></span>
<h1 id="twohundred">200</h1>
  <p id="users">Projects</p>
</div>

<div id="threemodule">
<span class="dot"></span>
<h1 id="twohundred">200</h1>
<p id="users">Issues</p>
</div>
<Tab />
        </div>
        
        </div>
    )

}
export default Module;