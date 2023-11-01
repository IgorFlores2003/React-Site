import Time from "../TimeLine/Time";
import Timew from "../TimeLine/TimeL";
import * as React from 'react';
import './HeaderStyle.css';

function Header(){
    return(
        <div><nav class="menu">
      <ul>
      <li><a href="http://localhost:3000/">Home</a></li>
        <li><a href="http://localhost:3000/TimeLine">Linha do Tempo</a></li>
        <li><a href="http://localhost:3000/Filminho">Supresa Final</a></li>
      </ul>
    </nav>
    
        <Timew/>
    
    </div>
    
    )
}

export default Header;