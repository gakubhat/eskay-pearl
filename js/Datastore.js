import {observable, computed, autorun} from "mobx";
import {reports} from "./Constants";
const filePath = __dirname + "/pearlData.json";
class Datastore {
    constructor() {
        this.fs = require("fs");
    }

    @observable data = [{}];
    @observable selectedMonth = 0;
    @observable selectedPhc = "";
    @observable selectedReport = "";

    @computed get reportsToShow() {
        return reports.filter((report)=> !!store.selectedPhc === report.groupByPhc)
    }

    saveData() {
        fs.writeFile(filePath, JSON.stringify(this.data), "utf8", (err)=> {
            console.log("Data saved success fully")
        });
    }
}

var store = window.store = new Datastore;
export default store;
autorun(()=> {
    console.log('store changed', store)
})