/* 
**  Create an initial   app class
** with the injected external dependencies  
** 
*/ 
var PiApp = module.exports =  function (db, temperaturedevice, heatsourcedevice, gateway) {
	this.db                          = db
	this.temperaturedevice           = temperaturedevice  
	this.heatsourcedevice            = heatsourcedevice 
	this.gateway 		             = gateway
} 

/**
 *   Init functions 
 * 
 */
PiApp.prototype.init = function () { 
	this.serialnumber   = this.gateway.fingerPrint()
	this.hearthBeatInterval = 3000 
	this.temperatureUploadInterval = 30000 
	this.heatingCheckInterval = 2000
} 


/** 
 * Uploads data to database 
 */
PiApp.prototype.uploadDataToDatabase = function () {
	var self = this 
	this.temperaturedevice.actualValue(function(err,value){
		console.info('Raspberry -', self.serialnumber)
		console.info('Current temperature on sensor is', value)
		self.db.createTemperatureMessage(self.serialnumber,'1',value,new Date().getTime(),function(err){
			if (err) console.error(err)            
		})
	})
}

/** 
 * Uploads alive data to database
 */

PiApp.prototype.IsAlive = function () {
	var self = this 
	var currentDate = new Date().getTime()
	this.db.createAliveMessage(self.serialnumber, currentDate,function(err){
		if (err) console.error(err)            
	})
	console.info('Alive -',currentDate)
}
 
/** 
 * Keeps the temperature betweet tolerance values
 */
PiApp.prototype.heatingCheck = function(){
	var self = this 
	this.temperaturedevice.actualValue(function(err,value){
		console.log('Current temperature',value)
		if( value < self.heatsourcedevice.lowerHeatTolerance){
			self.heatsourcedevice.turnOnHeatRelay()
		}
		else if( value> self.device.upperHeatTolerance){
			self.heatsourcedevice.turnOffHeatRelay()
		}
	})
}

/**
 *  Set the main event loop  
 * 
 *  */ 
PiApp.prototype.setEventLoop = function () {

	setInterval(this.IsAlive.bind(this),this.hearthBeatInterval)
	setInterval(this.uploadDataToDatabase.bind(this),this.temperatureUploadInterval)
	setInterval(this.heatingCheck.bind(this),this.heatingCheckInterval)

}
