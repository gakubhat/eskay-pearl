// import React, {Component} from  'react';
// import datastore from '../datastore';
//
// export default class BirthAndDeathComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             datastore:datastore,
//             birthThisMonth:0,
//             deathThisMonth:0,
//             birthMissed:0,
//             deathMissed:0
//         }
//     }
//
//     saveData=()=>{
//         this.state.datastore.data.birthAndDeath[this.props.month]={
//             birthThisMonth:this.state.birthThisMonth,
//             deathThisMonth:this.state.deathThisMonth,
//             birthMissed:this.state.birthMissed,
//             deathMissed:this.state.deathMissed
//         };
//         this.state.datastore.save();
//     };
//     render() {
//         return (
//             <div className="ui segments">
//                 <div className="ui secondary segment">
//                     <div className="ui text">
//                         ಈ ತಿಂಗಳು ವರದಿ ಆದದ್ದು:
//                     </div>
//                     <div className="ui horizontal segments">
//                         <div className="ui segment">
//                             <div className="ui labeled input">
//                                 <div className="ui label">
//                                     ಜನನ
//                                 </div>
//                                 <input type="text"  defaultValue="0" value={this.state.birthThisMonth}/>
//                             </div>
//                         </div>
//
//                     </div>
//                 </div>
//                 <div className="ui secondary segment">
//                     <div className="ui text">
//                         ಹಿಂದಿನ ತಿಂಗಳು ವರದಿ ಮಾಡದೇ ಇದ್ದದ್ದು:
//                     </div>
//                     <div className="ui horizontal segments">
//                         <div className="ui segment">
//                             <div className="ui labeled input">
//                                 <div className="ui label">
//                                     ಜನನ
//                                 </div>
//                                 <input type="text" defaultValue="0" value={this.state.birthMissed}/>
//                             </div>
//                         </div>
//                         <div className="ui segment">
//                             <div className="ui labeled input">
//                                 <div className="ui label">
//                                     ಮರಣ
//                                 </div>
//                                 <input type="number"  defaultValue="0" value={this.state.deathMissed}/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="ui  clearing segment">
//                     <div className="ui right floated primary button saveButton " onClick={this.saveData}>Save</div>
//                 </div>
//             </div>
//     )
//     }
//     }