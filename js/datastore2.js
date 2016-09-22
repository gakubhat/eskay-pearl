const filePath=__dirname+"/data.json";

class DataStore {
    constructor() {
        this.fs = require("fs");
        this.data = JSON.parse(this.fs.readFileSync(filePath, 'utf8'));
        console.log("loaded data",this.data);

    }

    data = {};

    save() {
        let data=JSON.stringify(this.data);
        console.log("Save data",filePath,data);

        this.fs.writeFileSync(filePath,new Buffer(data),'utf8');
            console.log("Data:",JSON.parse(this.fs.readFileSync(filePath, 'utf8')));

        // this.fs.writeFile(filePath, JSON.stringify(this.data), (err)=> {
        //     console.log("err",err)
        //     if (err) console.error("Error in saving data", err);
        //     else
        //         console.log("Data saved successfully");
        //     console.log("Data:",JSON.parse(this.fs.readFileSync(filePath, 'utf8')));
        // })
    }
}

export default new DataStore;   