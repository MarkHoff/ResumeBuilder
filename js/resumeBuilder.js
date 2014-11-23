


var bio = {
	"name" : "Mark Hoffman",
	"role" : "Web Developer",
	"contactInfo" : {
		"email" : "mark.hoffman9@gmail.com",
		"mobile" : "404-889-1335",
		"location" : "Woodstock, GA"
	},
	"picture_url" : "images/fry.jpg",
	"welcome_msg" : "Hello there!",
	"skills" : [
		"awesomeness", " programming", " teaching", " JS"
		],
};

var formattedName = HTMLheaderName.replace ("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace ("%data%", bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
//var formattedContactGeneric = HTMLcontactGeneric.replace("%data%",formattedMobile + " " + formattedEmail);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedLocation);
//$("#header").append(formattedContactGeneric);

var formattedBioPic = HTMLbioPic.replace("%data%", "images/fry.jpg");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);

var work = {
	"jobs" : [
	{
		"company" : "General Electric",
		"position" : "Field Engineer",
		"location" : "Springfield, IL",
		"dates" : "1989 - 1996",
		"description" : "Installation and maintenance of radiological equipment."
	},
	{
		"company" : "AT&T",
		"position" : "Technical Architect",
		"location" : "Alpharetta, GA",
		"dates" : "1996 - Present",
		"description" : "Designing database applications for configuration management of mobility network elements."
	}
	]
};



var education = {
	"schools" : [
		{
			"name": "Missouri State University",
			"location": "Springfield, MO",
			"degree": "BS",
			"major" : "Electrical Engineering"
		},
		{
			"name": "University of Illinois at Springfield",
			"location": "Springfield, IL",
			"degree": "MS",
			"major" : "Management Information Systems"
		}	
	]
};

var projects = {
	"proj" : [
	{
		"title" : "Project 1",
		"dates" : " 2014",
		"description" : "My first project, using Bootstrap to build a website from a mockup.",
		"images" : "images/197x148.gif"	
	},
	{
		"title" : "Project 2",
		"date" : "2014",
		"description" : "My second project, using Javascript to build a resume.",
		"images" : "images/197x148.gif"	
	}
	]	

};

/*function displayContacts() {
	$("#header").append(HTMLcontactGeneric);
	var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
		$(".work-entry:last").append(formattedEmail);
	
};
*/

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);	
};

function displayWork(){
	
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].company);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
	};
	
};


	function displayProjects() {
		for (pro in projects.proj) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.proj[pro].title);
			$(".project-entry:last").append(formattedProjTitle);
			var formattedProjDates = HTMLprojectDates.replace("%data%", projects.proj[pro].dates);
			$(".project-entry:last").append(formattedProjDates);
			var formattedProjDescrip = HTMLprojectDescription.replace("%data%", projects.proj[pro].description);
			$(".project-entry:last").append(formattedProjDescrip);
			var formattedProjImg = HTMLprojectImage.replace("%data%", projects.proj[pro].images);
			$(".project-entry:last").append(formattedProjImg);		
		}
	};
	
	function displayEducation() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedSchoolName);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedSchoolDegree);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
	}
		
displayWork();
displayProjects();
displayEducation();


function inName(name) {
	var name = name.trim().split(" ");
	//console.log(name);
	name[1] = name[1].toUpperCase();
	//console.log(name[1]);
	name[0] = name[0].slice(0,1).toUpperCase() +
	name[0].slice(1).toLowerCase();
	//console.log(name[0]);
	
	return name[0] + " " + name[1];
}



/*$("#main").append("</br>" + bio.name + "</br>") ;
$("#main").append(bio.role + "</br>");
$("#main").append(bio.contactInfo.email + "</br>");
$("#main").append(bio.contactInfo.mobile + "</br>");
$("#main").append(bio.contactInfo.location + "</br>");
$("#main").append(bio.skills + "</br>");
$("#main").append(bio.picture_url + "</br>");
$("#main").append(bio.welcome_msg + "</br>");
$("#main").append(work["position"] + "</br>");
//$("#main").append(education.schools.name + "</br>");*/
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
