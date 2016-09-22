import React, {Component} from "react";
import {observer} from "mobx-react";
@observer
export default class LabeledDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        $(this.dropdown).dropdown({
            onChange: this.props.onChange
        });
        if(this.props.selectFirst && this.props.menuItems.length>0) $(this.dropdown).dropdown("set selected", 0);
    }

    onClearClicked = ()=> {
        $(this.dropdown).dropdown('clear');
        $(this.dropdown).dropdown("restore defaults");
        this.props.onChange(-1, "");
    }

    componentDidUpdate() {
        $(this.dropdown).dropdown("refresh");
    }

    render() {
        let menuItems = this.props.menuItems.map((item, index)=>
            <div className="item" data-value={index+''} key={index}>{item}</div>
        )

        let clearButton = this.props.clearButton ?
            <div className="ui  right button"  style={{marginLeft:5}} onClick={this.onClearClicked}>Clear</div> : null;

        return <div className="ui  segment">
                        <span className="ui blue ribbon label">{this.props.label}</span>
                <span className="ui selection dropdown" ref={(ref) => this.dropdown = ref}>
                    <input type="hidden" name="month"></input>
                     <div className="default text">{this.props.placeholder}</div>
                    <div className="menu">{menuItems}</div>
                     <i className="dropdown icon"></i>
                </span>
            {clearButton}
        </div>
    }
}

LabeledDropdown.propTypes = {
    label: React.PropTypes.string,
    menuItems: React.PropTypes.array,
    onChange: React.PropTypes.func,
    clearButton: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    selectFirst:React.PropTypes.bool
};
LabeledDropdown.defaultProps = {
    clearButton: false,
    placeholder: "Select",
    selectFirst:false
}
// <span className="ui  text">{this.props.label}:</span>