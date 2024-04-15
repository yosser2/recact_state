import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Actuer from "./component/Actuer";

import "./App.css";

 export default class App extends React.Component {
   state = {
     Acteur: {
       fullName: "Lionel Messi",
       bio: "Lionel Messi, a forward for Inter Miami CF, is one of the world’s greatest soccer players and helped the Argentina national team win its third FIFA World Cup in 2022.",
       imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Lionel_Messi_WC2022.jpg/375px-Lionel_Messi_WC2022.jpg",
       profession: "Football Player",
     },
     shows: false,
   };
   toggleShow = () => {
     this.setState((prevState) => ({
       shows: !prevState.shows,
     }));
   };
   render() {
     return (
       <div className="App">
         {this.state.shows && <Actuer Acteur={this.state.Acteur} />}
         <div className="btn">
           <button onClick={this.toggleShow}>toggle me!</button>
         </div>
       </div>
     );
   }
 }
