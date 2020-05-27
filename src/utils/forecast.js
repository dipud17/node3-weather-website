const request=require('request')

const forecast = (latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=42543fb461d8763d57eab169f88dc48a&query= ' + latitude +','+ longitude +' &units=f'
    
    request({url,json:true},(error,{body})=>{

        if(error){
            callback('Unable to connect weather service',undefined)
        }else if(body.error){
            callback('Unable to find location',undefined)
        }else{
           
            callback(undefined, body.current.weather_descriptions[0]+" It is currently "+ body.current.temperature+" degrees out. It feels like "+ body.current.feelslike+" deegrees Out. The humidity is "+ body.current.humidity+" %.")
        }

    })
}


module.exports = forecast