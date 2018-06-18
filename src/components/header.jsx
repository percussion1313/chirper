import React from "react";

class Header extends React.Component{
    render(){
        return (
           <nav className="Nav">
             <div className="Nav-menus">
               <div className="Nav-brand">
                 <a className="Nav-brand-logo d-flex justify-content-center" href="/">
                   Chirper
                 </a>
               </div>
             </div>
           </nav>
       );
    }   
}
export default Header;