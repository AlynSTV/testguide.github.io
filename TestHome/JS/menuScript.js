function menuFunction(section){

var string;

string=""

/* Intro.html */

if (section=='intro'){

	string+="<a href=\"intro.html\"><div class=\"link2active\">Introduction</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#primary\"><div class=\"link2\">Primary Workload</div> </a>";
	string+="<a href=\"#ccp_wiki\"><div class=\"link2\">CCP Wiki - Confluence</div> </a>";
	string+="<a href=\"#release_schedule\"><div class=\"link2\">Release Schedule</div> </a>";
	
}else{

	string+="<a href=\"intro.html\"><div class=\"link2\">Introduction</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* Testing_EVE.html */

if (section=='testing_eve'){
	
	string+="<a href=\"testing_eve.html\"><div class=\"link2active\">Testing Valkyrie</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#day_structure\"><div class=\"link2\">Day-To-Day Structure</div> </a>";
	string+="<a href=\"#daily\"><div class=\"link2\">Daily Routine</div> </a>";
	string+="<a href=\"#skype\"><div class=\"link2\">Skype</div> </a>";
	string+="<a href=\"#lync\"><div class=\"link2\">Lync</div> </a>";
	string+="<a href=\"#sprint\"><div class=\"link2\">Sprint Procedure</div> </a>";
	string+="<a href=\"#good_practice\"><div class=\"link2\">Good Practices</div> </a>";
	string+="<a href=\"#ubertest\"><div class=\"link2\">UBERTEST</div> </a>";
	string+="<a href=\"#shortcuts\"><div class=\"link2\">Shortcuts</div> </a>";
	
}else{
	
	string+="<a href=\"testing_eve.html\"><div class=\"link2\">Testing EVE</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* JIRA.html */

if (section=='jira'){
	
	string+="<a href=\"jira.html\"><div class=\"link2active\">JIRA</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#jira_submit\"><div class=\"link2\">Submitting a Defect</div> </a>";
	string+="<a href=\"#defect_levels\"><div class=\"link2\">Defect Levels</div> </a>";
	string+="<a href=\"#jira_categories\"><div class=\"link2\">Defect Categories</div> </a>";
	string+="<a href=\"#jira_assigning\"><div class=\"link2\">Assigning Defects</div> </a>";
	string+="<a href=\"#jira_labels\"><div class=\"link2\">Labels</div> </a>";
	string+="<a href=\"#jira_search\"><div class=\"link2\">Searching for Defects</div></a>";
	string+="<a href=\"#jira_filter\"><div class=\"link2\">Useful Filters</div></a>";
	string+="<a href=\"#jira_shared\"><div class=\"link2\">Shared Filters</div></a>";
	string+="<a href=\"#jira_checking\"><div class=\"link2\">Finding Defect by Key</div></a>";
	string+="<a href=\"#jira_vote\"><div class=\"link2\">Voting on Issues</div></a>";
	string+="<a href=\"#jira_shortcuts\"><div class=\"link2\">Keyboard Shortcuts</div></a>";
	string+="<a href=\"#jira_bullets\"><div class=\"link2\">JIRA Formatting</div></a>";
	
}else{
	
	string+="<a href=\"jira.html\"><div class=\"link2\">JIRA</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";


/* Network.html */

if (section=='network'){
	
	string+="<a href=\"network.html\"><div class=\"link2active\">PTW Network</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#ptw_ccp\"><div class=\"link2\">CCP Folder</div> </a>";
	string+="<a href=\"#ptw_eve\"><div class=\"link2\">CCP \\ EVE Folder</div> </a>";
	string+="<a href=\"#ptw_eve_doc\"><div class=\"link2\">EVE \\ EVE Documentation</div> </a>";
	string+="<a href=\"#ptw_eve_tool\"><div class=\"link2\">EVE \\ Tools</div>";
	string+="<a href=\"#ptw_users\"><div class=\"link2\">&#92; &#92; uk-fs1 &#92; Users</div>";
	
}else{
	
	string+="<a href=\"network.html\"><div class=\"link2\">PTW Network</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";


/* Defects.html */

if (section=='defects'){
	
	string+="<a href=\"defects.html\"><div class=\"link2active\">Defect Procedure</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#finding\"><div class=\"link2\">Recording Evidence</div> </a>";
	string+="<a href=\"#reporting\"><div class=\"link2\">Reporting a Defect</div> </a>";
	string+="<a href=\"#screenshots\"><div class=\"link2\">Annotating Screenshots</div> </a>";
	string+="<a href=\"#videos\"><div class=\"link2\">Video Capture</div> </a>";
	string+="<a href=\"#graphics\"><div class=\"link2\">Graphical Issues</div> </a>";
	string+="<a href=\"#crashes\"><div class=\"link2\">Crashes</div> </a>";
	string+="<a href=\"#exploits\"><div class=\"link2\">Exploits</div> </a>";
	string+="<a href=\"#language\"><div class=\"link2\">US Language Defects</div> </a>";

	
}else{
	
	string+="<a href=\"defects.html\"><div class=\"link2\">Defect Procedure</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* Writing_Reports.html */

if (section=='writing_reports'){
	
	string+="<a href=\"writing_reports.html\"><div class=\"link2active\">Writing a Defect Report</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#checklist\"><div class=\"link2\">Checklist</div> </a>";
	string+="<a href=\"#template\"><div class=\"link2\">Template</div> </a>";
	string+="<a href=\"#defect_example\"><div class=\"link2\">Example Report</div> </a>";
	string+="<a href=\"#interactive\"><div class=\"link2\">Interactive Template</div> </a>";
	
}else{
	
	string+="<a href=\"writing_reports.html\"><div class=\"link2\">Writing a Defect Report</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* Builds.html */

if (section=='builds'){
	
	string+="<a href=\"builds.html\"><div class=\"link2active\">How to Determine Build</div> </a>";
	string+="<div class=\"submenu show\">";
	
}else{
	
	string+="<a href=\"builds.html\"><div class=\"link2\">How to Determine Build</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* Servers.html */

if (section=='servers'){
	
	string+="<a href=\"servers.html\"><div class=\"link2active\">Servers + Clients</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#eve_clients\"><div class=\"link2\">EVE Clients</div> </a>";
	string+="<a href=\"#connecting_servers\"><div class=\"link2\">Connecting to Servers</div> </a>";
	string+="<a href=\"#shortcut\"><div class=\"link2\">Client Shortcut</div> </a>";
	string+="<a href=\"#sil\"><div class=\"link2\">Server Information List</div> </a>";
	
}else{
	
	string+="<a href=\"servers.html\"><div class=\"link2\">Servers + Clients</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";


/* graphics.html */

if (section=='graphics'){
	
	string+="<a href=\"graphics.html\"><div class=\"link2active\">Graphical Issues</div> </a>";
	string+="<div class=\"submenu show\">";
	
	string+="<a href=\"#graphics_card\"><div class=\"link2\">Graphics Card</div> </a>";
	string+="<a href=\"#graphics_dx\"><div class=\"link2\">DX11/DX9</div> </a>";
	string+="<a href=\"#graphics_res\"><div class=\"link2\">Res Filepath & Graphics ID</div> </a>";
	string+="<a href=\"#graphics_openfailed\"><div class=\"link2\">Open Failed Error</div> </a>";
	string+="<a href=\"#graphics_miniballs\"><div class=\"link2\">Mini-balls</div> </a>";
	
}else{
	
	string+="<a href=\"graphics.html\"><div class=\"link2\">Graphical Issues</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";



/* Website_Testing.html */

if (section=='website_testing'){
	
	string+="<a href=\"website_testing.html\"><div class=\"link2active\">Website Testing</div> </a>";
	string+="<div class=\"submenu show\">";

	string+="<a href=\"#webtesting\"><div class=\"link2\">Introduction</div> </a>";
	string+="<a href=\"#webscreens\"><div class=\"link2\">Screenshots</div> </a>";
	string+="<a href=\"#webreport\"><div class=\"link2\">Website Defect Report</div> </a>";
	
}else{
	
	string+="<a href=\"website_testing.html\"><div class=\"link2\">Website Testing</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";


/* EVE_Team.html */

if (section=='eve_team'){
	
	string+="<a href=\"eve_team.html\"><div class=\"link2active\">EVE Team</div> </a>";
	string+="<div class=\"submenu show\">";
	
}else{
	
	string+="<a href=\"eve_team.html\"><div class=\"link2\">EVE Team</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* Glossary.html */

if (section=='glossary'){
	
	string+="<a href=\"glossary.html\"><div class=\"link2active\">Glossary of Terms</div> </a>";
	string+="<div class=\"submenu show\">";
	
}else{
	
	string+="<a href=\"glossary.html\"><div class=\"link2\">Glossary of Terms</div> </a>";
	string+="<div class=\"submenu hide\">";
	
}

string+="</div>";

/* Break Before Main Page Links */
string+="</p>";
string+="<hr/>";
string+="</p>";

/* EVE_Testing.html */



string+="<a href=\"../testing_guide/EVE_Valkyrie_Testing.html\"><div class=\"link4\"><b>Test Home</b></div> </a>";


/* Replace the division with this whole set */

document.getElementById("result").innerHTML=string;

}
