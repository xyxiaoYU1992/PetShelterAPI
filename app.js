var http = require("http");
var path = require("path");
// var mongoose = require("mongoose");
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");

var app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());

// use MongoDB
// connect to our database
// mongoose.connect("mongodb://localhost/pets");



// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');


// set the global variable to store the pet information
// pet array
var pets = [{id:1, name:"a", type:"cat", breed:"some", location:"Boston, MA", latitude: 42.3601,longitude: -71.0589}];
// var petsModel = require("./models/pets")
// pet id
var petID = 0;

// three end points of the RESTful API

// An index of Pets
app.get('/', function(request, response){
	response.json(pets);
	// petsModel.find({}, function(allpet){
	// 	response.send(allpet);
	// })
});

// Pet search by id
app.get('/:id', function(request, response){
	pets.forEach(function(pet){
		if(pet.id == request.params.id){
			response.json(pet);
		}
	})
	// petsModel.find({id: request.params.id},function(pet){
	// 	response.send(pet);
	// })
});
// Pet creation and check
// check info: 1.Unique Name and Breed 2.Valid location information
app.post('/addPets', function(request, response){
	var CreationOrNot = true;
	var responsePet = request.body;
	var name = request.body.name;
    var breed = request.body.breed;
    var location = request.body.location;
    var latitude = request.body.latitude;
    var longitude = request.body.longitude;
    //check the info and then create
    //check the uniqueName and breed
    pets.forEach(function (pet) {
        if(!name || name === pet.name){
           resPet.name = null;
           CreationOrNot = false;
           console.log("use different name");
        }
        if(!breed || breed === pet.breed){
           resPet.breed = null;
           CreationOrNot = false; 
           console.log("use different breed");       	
        }
    });
    //check the latitude
    if(isNaN(latitude) || latitude >90 || latitude < -90){
    	CreationOrNot = false;
    	console.log("invalidate latitude");
    }
    if(isNaN(longitude) || latitude >180 || latitude < -180){
    	CreationOrNot = false;
    	console.log("invalidate longitude");
    }
    if(CreationOrNot){
    	pets.push(responsePet);
    	res.json(responsePet);
    }
})
// app.post("/create",function(req,res){
// 	var CreationOrNot = true;
// 	var responsePet = request.body;
//     var name = request.body.name;
//     var breed = request.body.breed;
//     var location = request.body.location;
//     var latitude = request.body.latitude;
//     var longitude = request.body.longitude;
//     //check the info and then create
//     //check the uniqueName and breed
//     pets.forEach(function (pet) {
//         if(!name || name === pet.name){
//            resPet.name = null;
//            CreationOrNot = false;
//            console.log("use different name");
//         }
//         if(!breed || breed === pet.breed){
//            resPet.breed = null;
//            CreationOrNot = false; 
//            console.log("use different breed");       	
//         }
//     });
//     //check the latitude
//     if(isNaN(latitude) || latitude >90 || latitude < -90){
//     	CreationOrNot = false;
//     	console.log("invalidate latitude");
//     }
//     if(isNaN(longitude) || latitude >180 || latitude < -180){
//     	CreationOrNot = false;
//     	console.log("invalidate longitude");
//     }
//     if(CreationOrNot){
//     	var newPet = {
//     		id: petID,
//     		name: name,
//     		type: request.body.type,
//     		breed: breed,
//     		location: location,
//     		latitude: latitude,
//     		longitude: longitude
//     	}
//     	petsModel.create(newPet);

//     }


// });
app.listen("4000",function(){
	console.log("Server started");
})

