const request = require("request")

const temperature = (location,callback) => {
    const url = "http://api.weatherstack.com/current?access_key=538ac69f544f112a6dae88f9179ea02f&query="+location
    request({ url: url, json: true }, (error, response) => { 
        if (error) {
            callback("Unable to connect the weather Server",undefined)
        } else if (response.body.error) {
            callback('Unable to find the location',undefined)
        } else {  
            callback(undefined,response.body.current.temperature)
        }
    })
}

module.exports=temperature