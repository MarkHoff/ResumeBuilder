

// Biographical information
var bio = {
	"name" : "Mark Hoffman",
	"role" : "Web Developer",
	"contactInfo" : {
		"email" : "mark.hoffman9@gmail.com",
		"mobile" : "404-889-1335",
		"location" : "Woodstock, GA"
	},
	"picture_url" : "images/ProfilePic2011_175pxw.jpg",
	"welcome_msg" : "Thank you for looking at my resume!",
	"skills" : [
		"HTML", "CSS", "JavaScript", "JQuery"
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

var formattedBioPic = HTMLbioPic.replace("%data%", "images/ProfilePic2011_175pxw.jpg");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);

var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcome_msg);
$("#header").append(formattedWelcomeMsg);

// Work history information.
var work = {
	"jobs" : [
	{
		"company" : "General Electric",
		"url" : "http://www.ge.com",
		"position" : "Field Engineer",
		"location" : "Springfield, IL",
		"dates" : "1989 - 1996",
		"description" : "Working in various medical facilities, clinics, hospitals, etc., installing radiological equipment," +
		" including X-Ray equipment, Computerized Tomography (CT) scanners, Magnetic Resonance Imaging (MRI) equipment" +
		" and Nuclear Medicine equipment."
	},
	{
		"company" : "AT&T",
		"url" : "http://www.att.com",
		"position" : "Technical Architect",
		"location" : "Alpharetta, GA",
		"dates" : "1996 - Present",
		"description" : "Began working in the mobility Central Office maintaining the Mobility Switching Center (MSC) as well" +
		" as ancillary equipment such as Digital Cross Connects, Voice Mail, Voice-activated dialing, etc.  Moved to " + 
		" headquarters in Alpharetta, GA for Cingular Wireless managing call routing translations, and later moved into" +
		" IT as a technical architect for Oracle database applications."
	}
	],
	
	//Function to display my work information
 display: function(){
	
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkURL = HTMLworkURL.replace("#", work.jobs[job].url);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].company);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		var formattedEmployerTitle = formattedWorkURL + formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
	};
	
}

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
			"name" : "Front-End Web Development Nanodegree",
			"url" : "http://www.udacity.com",	
			"school" : "Udacity",
			"dates" : "October 2014 - May 2015"
		},
		{
			"name" : "Responsive Web Design",
			"url" : "http://www.att.com",
			"school" : "AT&T CELL",
			"dates" : "August 2014 - October 2014"
		},
		{
			"name" : "Big Data",
			"url" : "http://www.att.com",
			"school" : "AT&T CELL",
			"dates" : "May 2014 - July 2014"
		}
	],
	
	//Function to display my education history	
	display: function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolUrl = HTMLschoolURL.replace("#", education.schools[school].url);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedUrlName = formattedSchoolUrl + formattedSchoolName + formattedSchoolDegree;
			$(".education-entry:last").append(formattedUrlName);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
		
//Online classes
		$("#education").append(HTMLonlineClasses);
		for (online in education.onlines) {
			$("#education").append(HTMLonlineStart);
			var formattedOnlineUrl = HTMLonlineURL.replace("#", education.onlines[online].url);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlines[online].name);
			var formattedOnlineUrlTitle = formattedOnlineUrl + formattedOnlineTitle;
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlines[online].school);
			var formattedOnlineTitleSchool = formattedOnlineUrl + formattedOnlineTitle + formattedOnlineSchool;
			$(".online-entry:last").append(formattedOnlineTitleSchool);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlines[online].dates);
			
		}
	}
};

//Project I've worked on
var projects = {
	"proj" : [
	{
		"title" : "Project 1 - Mockup to Web Design",
		"dates" : " 2014",
		"description" : "My first project, using Bootstrap to build a website from a mockup.",
		"images" : "images/Project1.jpg",
		"url" : "http://markhoff.github.io/Project1/"
	},
	{
		"title" : "Project 2 - Dynamic Web Design",
		"dates" : "2014",
		"description" : "My second project, using Javascript to build a resume.",
		"images" : "images/Project2.jpg",
		"url" : "http://markhoff.github.io/ResumeBuilder/"	
	}
	],
	
	//Function to display the projects I've worked on.
	display: function() {
		for (pro in projects.proj) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectUrl = HTMLprojectURL.replace("#", projects.proj[pro].url);
			var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.proj[pro].title);
			var formattedProjUrlTitle = formattedProjectUrl + formattedProjTitle;
			$(".project-entry:last").append(formattedProjUrlTitle);
			var formattedProjDates = HTMLprojectDates.replace("%data%", projects.proj[pro].dates);
			$(".project-entry:last").append(formattedProjDates);
			var formattedProjDescrip = HTMLprojectDescription.replace("%data%", projects.proj[pro].description);
			$(".project-entry:last").append(formattedProjDescrip);
			var formattedProjImg = HTMLprojectImage.replace("%data%", projects.proj[pro].images);
			var formattedProjImgUrl = formattedProjectUrl + formattedProjImg;
			$(".project-entry:last").append(formattedProjImgUrl);
			//$(".project-entry:last").append(formattedProjImg);		
		}
	}	

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




//These three statements call the various functions defined above.		
work.display();
projects.display();
education.display();

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
