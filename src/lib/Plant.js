class Plant {
    constructor(name,latitude,longitude,countryCode,locationName,kind="plant"){
        this.name = name
        this.latitude = latitude
        this.longitude = longitude
        this.countryCode = countryCode
        this.locationName = locationName
        this.kind = kind
    }

    log(){
        console.log("Plat: ", this);
    }
}

export default Plant