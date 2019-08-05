function menuFunction(section){

var string;

string=""

/* Intro.html */

if (section=='intro'){

	string+="<a href=\"intro.html\"><div class=\"link2active\">Introduction</div> </a>";
	string+="<div class=\"submenu show\">";
	
}else{

	string+="<a href=\"intro.html\"><div class=\"link2\">Introduction</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* henri_s1_s2.html */

if (section=='henri_s1_s2'){
	
	string+="<a href=\"henri_s1_s2.html\"><div class=\"link2active\">HENRI S1 & S2</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#external_issues\"><div class=\"link2\">External Issues</div> </a>";
	string+="<a href=\"#good_practices\"><div class=\"link2\">Good Practices</div> </a>";
	string+="<a href=\"#team_concerns\"><div class=\"link2\">Internal Issues</div> </a>";
	string+="<a href=\"#action_points\"><div class=\"link2\">Action Points</div> </a>";
	string+="<a href=\"#additional_comments\"><div class=\"link2\">Additional Comments</div> </a>";

	
}else{
	
	string+="<a href=\"henri_s1_s2.html\"><div class=\"link2\">HENRI S1 & S2</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* grace_s2.html */

if (section=='grace_s2'){
	
	string+="<a href=\"grace_s2.html\"><div class=\"link2active\">GRACE S2</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#external_issues\"><div class=\"link2\">External Issues</div> </a>";
	string+="<a href=\"#good_practices\"><div class=\"link2\">Good Practices</div> </a>";
	string+="<a href=\"#team_concerns\"><div class=\"link2\">Internal Issues</div> </a>";
	string+="<a href=\"#action_points\"><div class=\"link2\">Action Points</div> </a>";
	string+="<a href=\"#additional_comments\"><div class=\"link2\">Additional Comments</div> </a>";

	
}else{
	
	string+="<a href=\"grace_s2.html\"><div class=\"link2\">GRACE S2</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* dogma_rewrite.html */

if (section=='dogma_rewrite'){
	
	string+="<a href=\"dogma_rewrite.html\"><div class=\"link2active\">DOGMA REWRITE</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#external_issues\"><div class=\"link2\">External Issues</div> </a>";
	string+="<a href=\"#good_practices\"><div class=\"link2\">Good Practices</div> </a>";
	string+="<a href=\"#team_concerns\"><div class=\"link2\">Internal Issues</div> </a>";
	string+="<a href=\"#action_points\"><div class=\"link2\">Action Points</div> </a>";
	string+="<a href=\"#additional_comments\"><div class=\"link2\">Additional Comments</div> </a>";

	
}else{
	
	string+="<a href=\"dogma_rewrite.html\"><div class=\"link2\">DOGMA REWRITE</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* claudette_s1.html */

if (section=='claudette_s1'){
	
	string+="<a href=\"claudette_s1.html\"><div class=\"link2active\">CLAUDETTE S1</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#external_issues\"><div class=\"link2\">External Issues</div> </a>";
	string+="<a href=\"#good_practices\"><div class=\"link2\">Good Practices</div> </a>";
	string+="<a href=\"#team_concerns\"><div class=\"link2\">Internal Issues</div> </a>";
	string+="<a href=\"#action_points\"><div class=\"link2\">Action Points</div> </a>";
	string+="<a href=\"#additional_comments\"><div class=\"link2\">Additional Comments</div> </a>";

	
}else{
	
	string+="<a href=\"claudette_s1.html\"><div class=\"link2\">CLAUDETTE S1</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* bill_s1_s2.html */

if (section=='bill_s1_s2'){
	
	string+="<a href=\"bill_s1_s2.html\"><div class=\"link2active\">BILL S1/S2</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#external_issues\"><div class=\"link2\">External Issues</div> </a>";
	string+="<a href=\"#good_practices\"><div class=\"link2\">Good Practices</div> </a>";
	string+="<a href=\"#team_concerns\"><div class=\"link2\">Internal Issues</div> </a>";
	string+="<a href=\"#action_points\"><div class=\"link2\">Action Points</div> </a>";
	string+="<a href=\"#additional_comments\"><div class=\"link2\">Additional Comments</div> </a>";

	
}else{
	
	string+="<a href=\"bill_s1_s2.html\"><div class=\"link2\">BILL S1/S2</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* isaia_s1.html */

if (section=='isaia_s1'){
	
	string+="<a href=\"isaia_s1.html\"><div class=\"link2active\">ISAIA S1</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#external_issues\"><div class=\"link2\">External Issues</div> </a>";
	string+="<a href=\"#good_practices\"><div class=\"link2\">Good Practices</div> </a>";
	string+="<a href=\"#team_concerns\"><div class=\"link2\">Internal Issues</div> </a>";
	string+="<a href=\"#action_points\"><div class=\"link2\">Action Points</div> </a>";
	string+="<a href=\"#additional_comments\"><div class=\"link2\">Additional Comments</div> </a>";

	
}else{
	
	string+="<a href=\"isaia_s1.html\"><div class=\"link2\">ISAIA S1</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* hanna_s1.html */

if (section=='hanna_s1'){
	
	string+="<a href=\"hanna_s1.html\"><div class=\"link2active\">HANNA S1</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#external_issues\"><div class=\"link2\">External Issues</div> </a>";
	string+="<a href=\"#good_practices\"><div class=\"link2\">Good Practices</div> </a>";
	string+="<a href=\"#team_concerns\"><div class=\"link2\">Internal Issues</div> </a>";
	string+="<a href=\"#action_points\"><div class=\"link2\">Action Points</div> </a>";
	string+="<a href=\"#additional_comments\"><div class=\"link2\">Additional Comments</div> </a>";

	
}else{
	
	string+="<a href=\"hanna_s1.html\"><div class=\"link2\">HANNA S1</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* gonzalo_s1.html */

if (section=='gonzalo_s1'){
	
	string+="<a href=\"gonzalo_s1.html\"><div class=\"link2active\">GONZALO S1</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#external_issues\"><div class=\"link2\">External Issues</div> </a>";
	string+="<a href=\"#good_practices\"><div class=\"link2\">Good Practices</div> </a>";
	string+="<a href=\"#team_concerns\"><div class=\"link2\">Internal Issues</div> </a>";
	string+="<a href=\"#action_points\"><div class=\"link2\">Action Points</div> </a>";
	string+="<a href=\"#additional_comments\"><div class=\"link2\">Additional Comments</div> </a>";

	
}else{
	
	string+="<a href=\"gonzalo_s1.html\"><div class=\"link2\">GONZALO S1</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* industry_s2.html */

if (section=='industry_s2'){
	
	string+="<a href=\"industry_s2.html\"><div class=\"link2active\">INDUSTRY S2</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#external_issues\"><div class=\"link2\">External Issues</div> </a>";
	string+="<a href=\"#good_practices\"><div class=\"link2\">Good Practices</div> </a>";
	string+="<a href=\"#team_concerns\"><div class=\"link2\">Internal Issues</div> </a>";
	string+="<a href=\"#action_points\"><div class=\"link2\">Action Points</div> </a>";
	string+="<a href=\"#additional_comments\"><div class=\"link2\">Additional Comments</div> </a>";

	
}else{
	
	string+="<a href=\"industry_s2.html\"><div class=\"link2\">INDUSTRY S2</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* dolly_s1.html */

if (section=='dolly_s1'){
	
	string+="<a href=\"dolly_s1.html\"><div class=\"link2active\">DOLLY S1</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#external_issues\"><div class=\"link2\">External Issues</div> </a>";
	string+="<a href=\"#good_practices\"><div class=\"link2\">Good Practices</div> </a>";
	string+="<a href=\"#team_concerns\"><div class=\"link2\">Team Concerns</div> </a>";
	string+="<a href=\"#action_points\"><div class=\"link2\">Action Points</div> </a>";
	string+="<a href=\"#additional_comments\"><div class=\"link2\">Additional Comments</div> </a>";

	
}else{
	
	string+="<a href=\"dolly_s1.html\"><div class=\"link2\">DOLLY S1</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* industry_s1.html */

if (section=='industry_s1'){
	
	string+="<a href=\"industry_s1.html\"><div class=\"link2active\">INDUSTRY S1</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#external_issues\"><div class=\"link2\">External Issues</div> </a>";
	string+="<a href=\"#good_practices\"><div class=\"link2\">Good Practices</div> </a>";
	string+="<a href=\"#team_concerns\"><div class=\"link2\">Team Concerns</div> </a>";
	string+="<a href=\"#action_points\"><div class=\"link2\">Action Points</div> </a>";
	string+="<a href=\"#additional_comments\"><div class=\"link2\">Additional Comments</div> </a>";

	
}else{
	
	string+="<a href=\"industry_s1.html\"><div class=\"link2\">INDUSTRY S1</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* cristobal_s2.html */

if (section=='cristobal_s2'){
	
	string+="<a href=\"cristobal_s2.html\"><div class=\"link2active\">CRISTOBAL S2</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#external_issues\"><div class=\"link2\">External Issues</div> </a>";
	string+="<a href=\"#good_practices\"><div class=\"link2\">Good Practices</div> </a>";
	string+="<a href=\"#team_concerns\"><div class=\"link2\">Team Concerns</div> </a>";
	string+="<a href=\"#action_points\"><div class=\"link2\">Action Points</div> </a>";
	string+="<a href=\"#additional_comments\"><div class=\"link2\">Additional Comments</div> </a>";

	
}else{
	
	string+="<a href=\"cristobal_s2.html\"><div class=\"link2\">CRISTOBAL S2</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* bertha_s1.html */

if (section=='bertha_s1'){
	
	string+="<a href=\"bertha_s1.html\"><div class=\"link2active\">BERTHA S1</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#external_issues\"><div class=\"link2\">External Issues</div> </a>";
	string+="<a href=\"#good_practices\"><div class=\"link2\">Good Practices</div> </a>";
	string+="<a href=\"#team_concerns\"><div class=\"link2\">Team Concerns</div> </a>";
	string+="<a href=\"#action_points\"><div class=\"link2\">Action Points</div> </a>";
	string+="<a href=\"#additional_comments\"><div class=\"link2\">Additional Comments</div> </a>";

	
}else{
	
	string+="<a href=\"bertha_s1.html\"><div class=\"link2\">BERTHA S1</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* fsd_s2.html */

if (section=='fsd_s2'){
	
	string+="<a href=\"fsd_s2.html\"><div class=\"link2active\">FSD UNIVERSE S2</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#external_issues\"><div class=\"link2\">External Issues</div> </a>";
	string+="<a href=\"#good_practices\"><div class=\"link2\">Good Practices</div> </a>";
	string+="<a href=\"#team_concerns\"><div class=\"link2\">Team Concerns</div> </a>";
	string+="<a href=\"#action_points\"><div class=\"link2\">Action Points</div> </a>";
	string+="<a href=\"#additional_comments\"><div class=\"link2\">Additional Comments</div> </a>";

	
}else{
	
	string+="<a href=\"fsd_s2.html\"><div class=\"link2\">FSD UNIVERSE S2</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* arthur_s2.html */

if (section=='arthur_s2'){
	
	string+="<a href=\"arthur_s2.html\"><div class=\"link2active\">ARTHUR S2</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#external_issues\"><div class=\"link2\">External Issues</div> </a>";
	string+="<a href=\"#good_practices\"><div class=\"link2\">Good Practices</div> </a>";
	string+="<a href=\"#team_concerns\"><div class=\"link2\">Team Concerns</div> </a>";
	string+="<a href=\"#action_points\"><div class=\"link2\">Action Points</div> </a>";
	string+="<a href=\"#additional_comments\"><div class=\"link2\">Additional Comments</div> </a>";

	
}else{
	
	string+="<a href=\"arthur_s2.html\"><div class=\"link2\">ARTHUR S2</div> </a>";
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

/* script_tips/st_intro.html */

string+="<a href=\"../Script_tips/st_intro.html\"><div class=\"link4\"><b>Script Tips</b></div> </a>";

/* quiz/intro.html */

string+="<a href=\"../quiz/intro.html\"><div class=\"link4\"><b>Quiz Home</b></div> </a>";

/* ccp_qa/intro.html */

string+="<a href=\"../ccp_qa/intro.html\"><div class=\"link4\"><b>CCP QA</b></div> </a>";

/* Replace the division with this whole set */

document.getElementById("result").innerHTML=string;

}
