'use babel';
import React, {Component} from "react";
import {months, talukK, year, phcList} from "./Constants";
import {observer} from "mobx-react";
import store from "./Datastore";
import LabeledDropdown from "./modules/LabeledDropdown";
import ReportType from "./modules/ReportType";
@observer
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onMonthChange = (value, text)=> store.selectedMonth = value;
    onPhcChange = (value, text)=>store.selectedPhc = text;

    render() {
        return <div>
            <div className="ui segments">
                <div className="ui  horizontal  segments">
                    <div className="ui segment inverted  blue">
                        <h1>Eskay Pearl</h1>
                    </div>
                    <div className="ui segment inverted blue">
                        <p>Year : {year}</p>
                    </div>
                    <div className="ui segment inverted  blue">
                        <p>{talukK} ತಾಲೂಕು</p>
                    </div>
                </div>
                <div className="ui  horizontal segments">
                    <LabeledDropdown label="ತಿಂಗಳು" menuItems={months} onChange={this.onMonthChange} selectFirst={true}/>
                    <LabeledDropdown label="ಪ್ರಾಥಮಿಕ ಆರೋಗ್ಯ ಕೇಂದ್ರ" menuItems={phcList} onChange={this.onPhcChange} clearButton={true}/>
                    <ReportType />
                </div>
            </div>
        </div>;
    }
}