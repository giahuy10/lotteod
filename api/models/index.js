var mongoose = require('mongoose');
var mlabURI = 'mongodb://eddy:giahuytk102L@ds113866.mlab.com:13866/currency'

mongoose.connect(mlabURI, (error) => {
	if(error){
		console.log("Error " + error);
	}else{
		console.log("Connected successfully to server")
	}
});

module.exports = mongoose;