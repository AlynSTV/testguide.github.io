function menuFunction(section){

var string;

string=""

/* intro.html */

if (section=='intro'){

	string+="<a href=\"intro.html\"><div class=\"link2active\">Introduction</div> </a>";
	string+="<div class=\"submenu show\">";
	
}else{
	string+="<a href=\"intro.html\"><div class=\"link2\">Introduction</div> </a>";
	string+="<div class=\"submenu hide\">";	
}

string+="</div>";

/* quiz1.html */

if (section=='quiz1'){

	string+="<a href=\"quiz1.html\"><div class=\"link2active\">Quiz 1 - EVE Lore</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#intro\"><div class=\"link2\">Introduction</div> </a>";
	string+="<a href=\"#quiz\"><div class=\"link2\">Quiz</div> </a>";
	string+="<a href=\"#results\"><div class=\"link2\">Results</div> </a>";
	
}else{
	string+="<a href=\"quiz1.html\"><div class=\"link2\">Quiz 1 - EVE Lore</div> </a>";
	string+="<div class=\"submenu hide\">";	
}

string+="</div>";

/* quiz2.html */

if (section=='quiz2'){

	string+="<a href=\"quiz2.html\"><div class=\"link2active\">Quiz 2 - Missions and Agents</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#intro\"><div class=\"link2\">Introduction</div> </a>";
	string+="<a href=\"#quiz\"><div class=\"link2\">Quiz</div> </a>";
	string+="<a href=\"#results\"><div class=\"link2\">Results</div> </a>";
	
}else{
	string+="<a href=\"quiz2.html\"><div class=\"link2\">Quiz 2 - Missions and Agents</div> </a>";
	string+="<div class=\"submenu hide\">";	
}

string+="</div>";

/* quiz3.html */

if (section=='quiz3'){

	string+="<a href=\"quiz3.html\"><div class=\"link2active\">Quiz 3</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#intro\"><div class=\"link2\">Introduction</div> </a>";
	string+="<a href=\"#quiz\"><div class=\"link2\">Quiz</div> </a>";
	string+="<a href=\"#results\"><div class=\"link2\">Results</div> </a>";
	
}else{
	string+="<a href=\"quiz3.html\"><div class=\"link2\">Quiz 3</div> </a>";
	string+="<div class=\"submenu hide\">";	
}

string+="</div>";


/* Break Before Main Page Links */
string+="</p>";
string+="<hr/>";
string+="</p>";

/* EVE_Testing.html */



string+="<a href=\"../testing_guide/EVE_Testing.html\"><div class=\"link4\"><b>Test Home</b></div> </a>";

/* script_tips/testing.html */

string+="<a href=\"../testing_guide/intro.html\"><div class=\"link4\"><b>Testing Guide</b></div> </a>";

/* quiz/script_tips.html */

string+="<a href=\"../script_tips/st_intro.html\"><div class=\"link4\"><b>Script Tips</b></div> </a>";

/* retrospectives/intro.html */

string+="<a href=\"../retrospectives/intro.html\"><div class=\"link4\"><b>Retrospectives</b></div> </a>";

/* ccp_qa/intro.html */

string+="<a href=\"../ccp_qa/intro.html\"><div class=\"link4\"><b>CCP QA</b></div> </a>";

/* Replace the division with this whole set */

document.getElementById("result").innerHTML=string;

}
