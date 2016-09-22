import React, {Component} from "react";
import store from "../Datastore";
import {observer} from "mobx-react";
@observer
export default class ReportType extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        $('.ui.dropdown.reportType').dropdown({onChange: this.reportChanged});
        $('.ui.dropdown.reportType').dropdown("set selected", 0);
    }

    componentDidUpdate() {
        $('.ui.dropdown.reportType').dropdown("refresh");
        $('.ui.dropdown.reportType').dropdown("restore defaults");
        $('.ui.dropdown.reportType').dropdown("set selected", 0);
        store.selectedReport = $('.ui.dropdown.reportType').dropdown("get text")
    }

    reportChanged = (value, text, $selectedItem)=> store.selectedReport = text || "";

    render() {
        let reportTypeMenu = store.reportsToShow.map(
            (report, index)=><div className="item" data-value={index} data-text={report.name}
                                  key={index}>{report.name}</div>)
        return <div className="ui  segment">
            <span className="ui blue ribbon label">ಮಾಹಿತಿ</span>
            <div className="ui  selection dropdown reportType">
                <input type="hidden" name="month"></input>
                <div className="default text">Select a report.</div>
                <div className="menu">
                    {reportTypeMenu}
                </div>
                <i className="dropdown icon"></i>
            </div>
        </div>
    }
}