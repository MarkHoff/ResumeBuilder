

// Biographical information
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
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", "images/fry.jpg");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);

// Work history information.
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


// Education information
var education = {
	"schools" : [
		{
			"name": "Missouri State University",
			"url": "http://www.missouristate.edu",
			"location": "Springfield, MO",
			"degree": "BS",
			"major" : "Electrical Engineering"
		},
		{
			"name": "University of Illinois at Springfield",
			"url": "http://www.uis.edu",
			"location": "Springfield, IL",
			"degree": "MS",
			"major" : "Management Information Systems"
		}	
	],
	"onlines" : [
	{
		"title" : "Front-End Web Development Nanodegree",
		"school" : "Udacity",
		"dates" : "October 2014 - May 2015",
		"url" : "http://www.udacity.com"	
	},
	{
		"title" : "Responsive Web Design",
		"school" : "AT&T CELL",
		"dates" : "August 2014 - October 2014",
		"url" : "http://www.att.com"
	}
	]
};

//Project I've worked on
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
		"dates" : "2014",
		"description" : "My second project, using Javascript to build a resume.",
		"images" : "images/197x148.gif"	
	}
	]	

};


//If statement to display skills.
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

//Function to display my work information
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

//Function to display the projects I've worked on.
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

//Function to display my education history	
	function displayEducation() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolUrl = HTMLschoolURL.replace("#", education.schools[school].url);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedUrlName = formattedSchoolUrl + formattedSchoolName;
			$(".education-entry:last").append(formattedUrlName);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedSchoolDegree);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);
			//var formattedSchoolURL = HTMLSchoolName.replace("#", education.schools[school].url);
			//$(".education-entry:last").append(formattedSchoolURL);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
		
		$("#education").append(HTMLonlineClasses);
		for (online in education.onlines) {
			$("#education").append(HTMLonlineStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlines[online].title);
			//$(".online-entry:last").append(formattedOnlineTitle);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlines[online].school);
			//$(".online-entry:last").append(formattedOnlineSchool);
			var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
			$(".online-entry:last").append(formattedOnlineTitleSchool);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlines[online].dates);
			$(".online-entry:last").append(formattedOnlineDates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlines[online].url);
			$(".online-entry:last").append(formattedOnlineURL);
		}
	}

//These three statements call the various functions defined above.		
displayWork();
displayProjects();
displayEducation();

//This function is used to internationalize my name (i.e. all caps)
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

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
