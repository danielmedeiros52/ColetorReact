import React from 'react'
import {Link} from 'react-router-dom'


export default props =>(
<div>
  <Link to={props.link}/>
      <div id="aba-confirma-entrada">
            <Link to={props.link}>
              <div className="aba">
                    <label>{props.menu}</label>
              </div>
           </Link>
      </div>
</div>




)
