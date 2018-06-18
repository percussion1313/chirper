import React, {Component} from "react";


class Header extends Component {
    render(){
        return (
           <nav className="Nav">
             <div className="Nav-menus">
               <div className="Nav-brand display-3 d-flex justify-content-center">
                 <a>chirper</a>
               </div>
             </div>
           </nav>
       );
    }   
}
export default Header;