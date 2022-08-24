import React from "react";
import './Table.css';


const Tab=()=>{
    return(
        <div>
              <div id="fourmodule">
       <hr></hr>       
<span id="Recents">Recents Issues </span>
<span id="view">viewAll</span>
<hr></hr>
<span id="first">Issues</span>
<span id="first">Assigned To</span>
<span id="first">Assigned By</span>
<span id="first">Due Date</span>
<span id="status">Status</span>
<hr></hr>
<span id="second">Issues 1</span>
<span id="second">user 1</span>
<span id="user2">user 8</span>
<span id="date">22/02/2021</span>
<button id="Resolved1" class="Resolved">Resolved</button>
<hr></hr>
<span id="second">Issues 2</span>
<span id="second">user 1</span>
<span  id="user2">user 8</span>
<span id="date">18/02/2021</span>
<button id="Resolved1" class="Resolved">Resolved</button>
<hr></hr>
<span id="second">Issues 3</span>
<span id="second">user 2</span>
<span  id="user2">user 8</span>
<span id="date">02/02/2021</span>
<button id="Resolved1" class="Resolved" style={{background: "orange"}}>Conflicts</button>
<hr></hr>
<span id="second">Issues 4</span>
<span id="second">user 3</span>
<span  id="user2">user 8</span>
<span id="date">02/02/2021</span>
<button id="Resolved1" class="Resolved" style={{background: "red"}} >Overdue</button>
<hr></hr>
<span id="second">Issues 5</span>
<span id="second">user 2</span>
<span  id="user2">user 8</span>
<span id="date">01/02/2021</span>
<button id="Resolved1" class="Resolved">Resolved</button>
<hr></hr>

    
  </div>
        </div>
    )
}
export default Tab;