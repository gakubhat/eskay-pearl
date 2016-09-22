import React, {Component} from 'react';

class Hello extends Component {

    selectionChanged=(value, text, $selectedItem)=>{
        console.log("Value is ",value,text,$selectedItem);
    };

    componentDidMount(){
        $('.ui.dropdown').dropdown({
            onChange:this.selectionChanged
        });

    }
    render() {

        return (
            <div>
                <h3>Details of your Hero</h3>
                <div>{__dirname}</div>
                <select className="ui dropdown">
                    <option value="">Gender</option>
                    <option value="1">Male</option>
                    <option value="0">Female</option>
                </select>
            </div>
        )
    }
}
export default Hello;