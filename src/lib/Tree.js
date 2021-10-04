import Plant from "./Plant"
class Tree extends Plant{
    constructor(name,latitude,longitude,countryCode,locationName){
        super(name,latitude,longitude,countryCode,locationName);
        this.kind = "tree";
    }
}

export default Tree