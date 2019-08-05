		/* Each section has a start of and end of comment. To quickly navigate to the section you need to 
		edit - simply search for either of those terms. */


	function hideshow(container) {
		if (container.className== 'hide') {
			container.className= 'show'; }
		else {
			container.className= 'hide'; }
	}	
	
	/* nav bar expand */
	
		function expand_nav_bar() {

			
		if (nav_bar_background.className== 'nav_bar_collapse') {
			nav_bar_background.className= 'nav_bar_expand'; }
		else {
			nav_bar_background.className= 'nav_bar_collapse'; }
			
		if (nav_bar_server_container.className== 'hide3') {
			nav_bar_server_container.className= 'show4'; }
		else {
			nav_bar_server_container.className= 'hide3'; }
			
		if (nav_expand_image.className== 'show3') {
			nav_expand_image.className= 'hide'; }
		else {
			nav_expand_image.className= 'show3'; }
			
		if (nav_collapse_image.className== 'hide') {
			nav_collapse_image.className= 'show3'; }
		else {
			nav_collapse_image.className= 'hide'; }
			
	}		

	/* cat1 */
		function expand_cat1(container) {
			if (nav_cat1.className== 'nav_bar_cat collapse') {
				nav_cat1.className= 'nav_bar_cat expand'; }
			
			if (cat1_menu.className== 'hide2') {
				cat1_menu.className= 'show2'; }
			
			}
		
		function collapse_cat1(container) {
			if (nav_cat1.className== 'nav_bar_cat expand') {
				nav_cat1.className= 'nav_bar_cat collapse'; }
			
			if (cat1_menu.className== 'show2') {
				cat1_menu.className= 'hide2'; }
			
			}
			
					function expand_cat2(container) {
			if (nav_cat2.className== 'nav_bar_cat collapse') {
				nav_cat2.className= 'nav_bar_cat expand'; }
			
			if (cat2_menu.className== 'hide2') {
				cat2_menu.className= 'show2'; }
			
			}
		
		function collapse_cat2(container) {
			if (nav_cat2.className== 'nav_bar_cat expand') {
				nav_cat2.className= 'nav_bar_cat collapse'; }
			
			if (cat2_menu.className== 'show2') {
				cat2_menu.className= 'hide2'; }
			
			}
			
							function expand_cat3(container) {
			if (nav_cat3.className== 'nav_bar_cat collapse') {
				nav_cat3.className= 'nav_bar_cat expand'; }
			
			if (cat3_menu.className== 'hide2') {
				cat3_menu.className= 'show2'; }
			
			}
		
		function collapse_cat3(container) {
			if (nav_cat3.className== 'nav_bar_cat expand') {
				nav_cat3.className= 'nav_bar_cat collapse'; }
			
			if (cat3_menu.className== 'show2') {
				cat3_menu.className= 'hide2'; }
			
			}
			
		function expand_cat4(container) {
			if (nav_cat4.className== 'nav_bar_cat collapse') {
				nav_cat4.className= 'nav_bar_cat expand'; }
			
			if (cat4_menu.className== 'hide2') {
				cat4_menu.className= 'show2'; }
			
			}
		
		function collapse_cat4(container) {
			if (nav_cat4.className== 'nav_bar_cat expand') {
				nav_cat4.className= 'nav_bar_cat collapse'; }
			
			if (cat4_menu.className== 'show2') {
				cat4_menu.className= 'hide2'; }
			
			}
			
		function expand_cat5(container) {
			if (nav_cat5.className== 'nav_bar_cat2 collapse') {
				nav_cat5.className= 'nav_bar_cat2 expand'; }
			
			if (cat5_menu.className== 'hide2') {
				cat5_menu.className= 'show2'; }
			
			}
		
		function collapse_cat5(container) {
			if (nav_cat5.className== 'nav_bar_cat2 expand') {
				nav_cat5.className= 'nav_bar_cat2 collapse'; }
			
			if (cat5_menu.className== 'show2') {
				cat5_menu.className= 'hide2'; }
			
			}
			
		
	function nav_bar_function(section){

var string;

string=""

/* Container */

string+="<div id=\"nav_bar_background\" class=\"nav_bar_collapse\">";

string+="<div id=\"nav_bar_container\">";


string+="<div id=\"nav_bar\">";

/* EVE logo */

string+="<a href=\"../testing_guide/eve_valkyrie_testing.html\"><img src=\"../images/eve_mini2.png\" class=\"mini_eve_icon\" /></a>";


		/* Start of Primary Links*/


/* Cat 1 */

string+="<div id=\"nav_cat1\" onmouseover=\"expand_cat1()\" onmouseout=\"collapse_cat1()\" class=\"nav_bar_cat collapse\">";
string+="<div class=\"nav_link2\">Valkyrie Testing Links</div>";
string+="<div id=\"cat1_menu\" class=\"hide2\">Quick Search:<span id=\"defectid\">";
string+="<form action=\"https://jira.ccpgames.com//secure/QuickSearch.jspa\" method=\"post\" id=\"quicksearch\" target=\"_blank\">";
string+="<input id=\"quickSearchInput\" class=\"search\" type=\"text\" title=\"Quick Search text or Defect ID\" placeholder=\"Defect ID Opens Issue\" name=\"searchString\" >";
string+="</br><input type=\"submit\" class=\"hidden\" value=\"Search\" onclick=\"collapse_cat1()\"></form></span>";
string+="<a href=\"https://jira.ccpgames.com/secure/Dashboard.jspa\" target=\"_blank\"><div class=\"nav_link\" onclick=\"collapse_cat1()\">JIRA</div></a>";
string+="<a href=\"https://jira.ccpgames.com/secure/CreateIssue!default.jspa\" target=\"_blank\"><div class=\"nav_link\" onclick=\"collapse_cat1()\">New Defect</div></a>";
string+="<a href=\"https://default.admin.valkyrieapi.com/battleservers\" target=\"_blank\"><div class=\"nav_link\" onclick=\"collapse_cat1()\">Battleservers</div></a> ";
string+="-</p>";
string+="<a href=\"../testing_guide/jira.html#defect_levels\" ><div class=\"nav_link\" onclick=\"collapse_cat2()\">Defect Severities</div></a>";
string+="<a href=\"../testing_guide/jira.html#jira_categories\" ><div class=\"nav_link\" onclick=\"collapse_cat2()\">Defect Categories</div></a>";
string+="<a href=\"../testing_guide/jira.html#jira_assigning\" ><div class=\"nav_link\" onclick=\"collapse_cat2()\">Defect Buckets</div></a>";
string+="-</p>";
string+="<a href=\"../testing_guide/intro.html#release_schedule\" ><div class=\"nav_link\" onclick=\"collapse_cat2()\">Release Schedule</div></a>";
string+="</div></div>";

/* Cat 2 */

string+="<div id=\"nav_cat2\" onmouseover=\"expand_cat2()\" onmouseout=\"collapse_cat2()\" class=\"nav_bar_cat collapse\">";
string+="<div class=\"nav_link2\">Testing Resources</div>";
string+="<div id=\"cat2_menu\" class=\"hide2\">";
string+="<a href=\"../testing_guide/eve_valkyrie_testing.html\" ><div class=\"nav_link\" onclick=\"collapse_cat2()\">Valkyrie Test Home</div></a>";
string+="<a href=\"../testing_guide/intro.html\" ><div class=\"nav_link\" onclick=\"collapse_cat2()\">Valkyrie Testing Guide</div></a>";
string+="<a href=\"../ccp_qa/intro.html\" ><div class=\"nav_link\" onclick=\"collapse_cat2()\">CCP Sync-Ups</div></a> ";
string+="<a href=\"https://wiki.ccpgames.com/\" target=\"_blank\"><div class=\"nav_link\" onclick=\"collapse_cat2()\">Confluence</div></a> ";
string+="-</p>";
string+="<a href=\"../quiz/quiz.html\" target=\"_blank\" ><div class=\"nav_link\" onclick=\"collapse_cat2()\">EVE Quiz</div></a>";
string+="<a href=\"https://university.atlassian.com\" target=\"_blank\"><div class=\"nav_link\" onclick=\"collapse_cat2()\">Atlassian University</div></a> ";
string+="<a href=\"https://confluence.atlassian.com/display/JIRA/JIRA+Documentation\" target=\"_blank\"><div class=\"nav_link\" onclick=\"collapse_cat2()\">JIRA Documentation</div></a> ";
string+="</div></div>";

/* Cat 3 */

string+="<div id=\"nav_cat3\" class=\"nav_bar_cat collapse\" onmouseover=\"expand_cat3()\" onmouseout=\"collapse_cat3()\">";
string+="<div class=\"nav_link2\">PTW Admin Resources</div>";
string+="<div id=\"cat3_menu\" class=\"hide2\">";
string+="<a href=\"http://tt.poletowininternational.com/\" target=\"_blank\" ><div class=\"nav_link\" onclick=\"collapse_cat3()\">Tick Tock</div> </a>";
string+="<a href=\"https://outlook.apptixemail.net/owa\" target=\"_blank\" ><div class=\"nav_link\" onclick=\"collapse_cat3()\">Email</div> </a>";
string+="<a href=\"https://inpay2.revas.co.uk/selfservice4\" target=\"_blank\"><div class=\"nav_link\" onclick=\"collapse_cat3()\">Payslip </div> </a>";
string+="<a href=\"http://smoothwall/login\" target=\"_blank\"><div class=\"nav_link\" onclick=\"collapse_cat3()\">Smoothwall Login </div> </a>";
string+="<a href=\"http://uk-image/\" target=\"_blank\"><div class=\"nav_link\" onclick=\"collapse_cat3()\">Pole to Win Intranet </div> </a> ";
string+="<a href=\"file://///uk-fs2/tester_access/CCP/CCP_Web_Docs/rota/rota.html\" target=\"_blank\"><div class=\"nav_link\" onclick=\"collapse_cat3()\">ROTA</div> </a>";
string+="-</p>";
string+="<a href=\"http://www.skypark-glasgow.com/\" target=\"_blank\"><div class=\"nav_link\" onclick=\"collapse_cat3()\">Sky Park </div>";
string+="<a href=\"http://www.skypark-glasgow.com/mysky\" target=\"_blank\"><div class=\"nav_link\" onclick=\"collapse_cat3()\">Sky Park | My Sky </div></a>";
string+="</div></div>";


		/* End of Primary Links*/

/* Cat 5 */

			/* Start of Testing Guide Section*/

/* intro cat5 */

if (section=='intro'){

string+="<div id=\"nav_cat5\" onmouseover=\"expand_cat5()\" onmouseout=\"collapse_cat5()\" class=\"nav_bar_cat2 collapse\">";


/* Cat 5 title */

string+="<div class=\"nav_link2\">Introduction</div>";
string+="<div id=\"cat5_menu\" class=\"hide2\">";
string+="<a href=\"#top\"><div class=\"nav_link3\" >Return to Top</div> </a>";
/*Page Links */


string+="<a href=\"#primary\"><div class=\"nav_link3\" >Primary Workload</div> </a>";
string+="<a href=\"#ccp_wiki\"><div class=\"nav_link3\" >CCP Wiki - Confluence</div> </a>";
string+="<a href=\"#release_schedule\"><div class=\"nav_link3\" >Release Schedule</div> </a>";

}

/* testing_eve cat5 */

if (section=='testing_eve'){

string+="<div id=\"nav_cat5\" onmouseover=\"expand_cat5()\" onmouseout=\"collapse_cat5()\" class=\"nav_bar_cat2 collapse\">";

/* Cat 5 title */

string+="<div class=\"nav_link2\">Testing EVE</div>";
string+="<div id=\"cat5_menu\" class=\"hide2\">";
string+="<a href=\"#top\"><div class=\"nav_link3\" >Return to Top</div> </a>";

/*Page Links */

string+="<a href=\"#day_structure\"><div class=\"nav_link3\" >Day-To-Day Structure</div> </a>";
string+="<a href=\"#daily\"><div class=\"nav_link3\" >Daily Routine</div> </a>";
string+="<a href=\"#skype\"><div class=\"nav_link3\" >Skype</div> </a>";
string+="<a href=\"#lync\"><div class=\"nav_link3\" >Lync</div> </a>";
string+="<a href=\"#sprint\"><div class=\"nav_link3\" >Sprint Procedure</div> </a>";
string+="<a href=\"#good_practice\"><div class=\"nav_link3\" >Good Practices</div> </a>";
string+="<a href=\"#ubertest\"><div class=\"nav_link3\" >UBERTEST</div> </a>";
string+="<a href=\"#shortcuts\"><div class=\"nav_link3\" >Shortcuts</div> </a>";

}

/* network cat5 */

if (section=='network'){

string+="<div id=\"nav_cat5\" onmouseover=\"expand_cat5()\" onmouseout=\"collapse_cat5()\" class=\"nav_bar_cat2 collapse\">";

/* Cat 5 title */

string+="<div class=\"nav_link2\">PTW Network</div>";
string+="<div id=\"cat5_menu\" class=\"hide2\">";
string+="<a href=\"#top\"><div class=\"nav_link3\" >Return to Top</div> </a>";

/*Page Links */

	string+="<a href=\"#ptw_ccp\"><div class=\"nav_link3\">CCP Folder</div> </a>";
	string+="<a href=\"#ptw_eve\"><div class=\"nav_link3\">CCP \\ EVE Folder</div> </a>";
	string+="<a href=\"#ptw_eve_doc\"><div class=\"nav_link3\">EVE \\ EVE Documentation</div> </a>";
	string+="<a href=\"#ptw_eve_tool\"><div class=\"nav_link3\">EVE \\ Tools</div>";
	string+="<a href=\"#ptw_users\"><div class=\"nav_link3\">&#92; &#92; uk-fs1 &#92; Users</div>";
}	

/* defects cat5 */

if (section=='defects'){

string+="<div id=\"nav_cat5\" onmouseover=\"expand_cat5()\" onmouseout=\"collapse_cat5()\" class=\"nav_bar_cat2 collapse\">";

/* Cat 5 title */

string+="<div class=\"nav_link2\">Defects</div>";
string+="<div id=\"cat5_menu\" class=\"hide2\">";
string+="<a href=\"#top\"><div class=\"nav_link3\" >Return to Top</div> </a>";

/*Page Links */

	string+="<a href=\"#finding\"><div class=\"nav_link3\">Recording Evidence</div> </a>";
	string+="<a href=\"#screenshots\"><div class=\"nav_link3\">Annotating Screenshots</div> </a>";
	string+="<a href=\"#videos\"><div class=\"nav_link3\">Video Capture</div> </a>";
	string+="<a href=\"#graphics\"><div class=\"nav_link3\">Graphical Issues</div> </a>";
	string+="<a href=\"#crashes\"><div class=\"nav_link3\">Crashes</div> </a>";
	string+="<a href=\"#exploits\"><div class=\"nav_link3\">Exploits</div> </a>";
	string+="<a href=\"#language\"><div class=\"nav_link3\">US Language Defects</div> </a>";
}	
	
/* jira cat5 */

if (section=='jira'){

string+="<div id=\"nav_cat5\" onmouseover=\"expand_cat5()\" onmouseout=\"collapse_cat5()\" class=\"nav_bar_cat2 collapse\">";

/* Cat 5 title */

string+="<div class=\"nav_link2\">JIRA</div>";
string+="<div id=\"cat5_menu\" class=\"hide2\">";
string+="<a href=\"#top\"><div class=\"nav_link3\" >Return to Top</div> </a>";

/*Page Links */

	string+="<a href=\"#jira_submit\"><div class=\"nav_link3\">Submitting a Defect</div> </a>";
	string+="<a href=\"#defect_levels\"><div class=\"nav_link3\" >Defect Levels</div> </a>";
	string+="<a href=\"#jira_categories\"><div class=\"nav_link3\">Defect Categories</div> </a>";
	string+="<a href=\"#jira_assigning\"><div class=\"nav_link3\">Assigning Defects</div> </a>";
	string+="<a href=\"#jira_labels\"><div class=\"nav_link3\">Labels</div> </a>";
	string+="<a href=\"#jira_search\"><div class=\"nav_link3\">Searching for Defects</div></a>";
	string+="<a href=\"#jira_filter\"><div class=\"nav_link3\">Useful Filters</div></a>";
	string+="<a href=\"#jira_shared\"><div class=\"nav_link3\">Shared Filters</div></a>";
	string+="<a href=\"#jira_checking\"><div class=\"nav_link3\">Finding Defect by Key</div></a>";
	string+="<a href=\"#jira_vote\"><div class=\"nav_link3\">Voting on Issues</div></a>";
	string+="<a href=\"#jira_shortcuts\"><div class=\"nav_link3\">Keyboard Shortcuts</div></a>";
	string+="<a href=\"#jira_bullets\"><div class=\"nav_link3\">JIRA Formatting</div></a>";
}		
	
/* writing_reports cat5 */

if (section=='writing_reports'){

string+="<div id=\"nav_cat5\" onmouseover=\"expand_cat5()\" onmouseout=\"collapse_cat5()\" class=\"nav_bar_cat2 collapse\">";

/* Cat 5 title */

string+="<div class=\"nav_link2\">Writing Reports</div>";
string+="<div id=\"cat5_menu\" class=\"hide2\">";
string+="<a href=\"#top\"><div class=\"nav_link3\" >Return to Top</div> </a>";

/*Page Links */

	string+="<a href=\"#checklist\"><div class=\"nav_link3\">Checklist</div> </a>";
	string+="<a href=\"#template\"><div class=\"nav_link3\">Template</div> </a>";
	string+="<a href=\"#defect_example\"><div class=\"nav_link3\">Example Report</div> </a>";
	string+="<a href=\"#interactive\"><div class=\"nav_link3\">Interactive Template</div> </a>";
}		

/* graphics cat5 */

if (section=='graphics'){

string+="<div id=\"nav_cat5\" onmouseover=\"expand_cat5()\" onmouseout=\"collapse_cat5()\" class=\"nav_bar_cat2 collapse\">";

/* Cat 5 title */

string+="<div class=\"nav_link2\">Graphical Issues</div>";
string+="<div id=\"cat5_menu\" class=\"hide2\">";
string+="<a href=\"#top\"><div class=\"nav_link3\" >Return to Top</div> </a>";

/*Page Links */

	string+="<a href=\"#graphics_card\"><div class=\"nav_link3\">Graphics Card</div> </a>";
	string+="<a href=\"#graphics_dx\"><div class=\"nav_link3\">DX11/DX9</div> </a>";
	string+="<a href=\"#graphics_res\"><div class=\"nav_link3\">Res Filepath & Graphics ID</div> </a>";
	string+="<a href=\"#graphics_openfailed\"><div class=\"nav_link3\">Open Failed Error</div> </a>";
	string+="<a href=\"#graphics_miniballs\"><div class=\"nav_link3\">Mini-balls</div> </a>";
}	
	
/* builds cat5 */

if (section=='builds'){

string+="<div id=\"nav_cat5\" onmouseover=\"expand_cat5()\" onmouseout=\"collapse_cat5()\" class=\"nav_bar_cat2 collapse\">";

/* Cat 5 title */

string+="<div class=\"nav_link2\">How to Determine Build</div>";
string+="<div id=\"cat5_menu\" class=\"hide2\">";
string+="<a href=\"#top\"><div class=\"nav_link3\" >Return to Top</div> </a>";

/*Page Links */


}	

/* servers cat5 */

if (section=='servers'){

string+="<div id=\"nav_cat5\" onmouseover=\"expand_cat5()\" onmouseout=\"collapse_cat5()\" class=\"nav_bar_cat2 collapse\">";

/* Cat 5 title */

string+="<div class=\"nav_link2\">Servers + Clients</div>";
string+="<div id=\"cat5_menu\" class=\"hide2\">";
string+="<a href=\"#top\"><div class=\"nav_link3\" >Return to Top</div> </a>";

/*Page Links */

	string+="<a href=\"#eve_clients\"><div class=\"nav_link3\">EVE Clients</div> </a>";
	string+="<a href=\"#connecting_servers\"><div class=\"nav_link3\">Connecting to Servers</div> </a>";
	string+="<a href=\"#shortcut\"><div class=\"nav_link3\">Client Shortcut</div> </a>";
	string+="<a href=\"#sil\"><div class=\"nav_link3\">Server Information List</div> </a>";

}	



/* website testing cat5 */

if (section=='website_testing'){

string+="<div id=\"nav_cat5\" onmouseover=\"expand_cat5()\" onmouseout=\"collapse_cat5()\" class=\"nav_bar_cat2 collapse\">";

/* Cat 5 title */

string+="<div class=\"nav_link2\">Website Testing</div>";
string+="<div id=\"cat5_menu\" class=\"hide2\">";
string+="<a href=\"#top\"><div class=\"nav_link3\" >Return to Top</div> </a>";

/*Page Links */

	string+="<a href=\"#webtesting\"><div class=\"nav_link3\">Introduction</div> </a>";
	string+="<a href=\"#webscreens\"><div class=\"nav_link3\">Screenshots</div> </a>";
	string+="<a href=\"#webreport\"><div class=\"nav_link3\">Website Defect Report</div> </a>";

}	



	/* eve team cat5 */

if (section=='eve_team'){

string+="<div id=\"nav_cat5\" onmouseover=\"expand_cat5()\" onmouseout=\"collapse_cat5()\" class=\"nav_bar_cat2 collapse\">";

/* Cat 5 title */

string+="<div class=\"nav_link2\">EVE Team</div>";
string+="<div id=\"cat5_menu\" class=\"hide2\">";
string+="<a href=\"#top\"><div class=\"nav_link3\" >Return to Top</div> </a>";

/*Page Links */



}

	

	/* glossary cat5 */

if (section=='glossary'){

string+="<div id=\"nav_cat5\" onmouseover=\"expand_cat5()\" onmouseout=\"collapse_cat5()\" class=\"nav_bar_cat2 collapse\">";

/* Cat 5 title */

string+="<div class=\"nav_link2\">Glossary</div>";
string+="<div id=\"cat5_menu\" class=\"hide2\">";
string+="<a href=\"#top\"><div class=\"nav_link3\" >Return to Top</div> </a>";

/*Page Links */

}	

				/* End of Testing Guide Section*/

				/* Start of Script Tips Section */
	
		/* script_tips_intro cat5 */

if (section=='st_intro'){

string+="<div id=\"nav_cat5\" onmouseover=\"expand_cat5()\" onmouseout=\"collapse_cat5()\" class=\"nav_bar_cat2 collapse\">";

/* Cat 5 title */

string+="<div class=\"nav_link2\">Script Tips</div>";
string+="<div id=\"cat5_menu\" class=\"hide2\">";
string+="<a href=\"#top\"><div class=\"nav_link3\" >Return to Top</div> </a>";

/*Page Links */

	string+="<a href=\"#general\"><div class=\"nav_link3\">General Tips</div> </a>";
	string+="<a href=\"#waits\"><div class=\"nav_link3\">Waits and Downtimes</div> </a>";
	string+="<a href=\"#slash\"><div class=\"nav_link3\">Handy GM Tools</div> </a>";
	string+="<a href=\"#order\"><div class=\"nav_link3\">Run Order</div> </a>";
	string+="<a href=\"#overview\"><div class=\"nav_link3\">Overview of Game Area</div> </a>";
	string+="<a href=\"#test_case\"><div class=\"nav_link3\">Test Case Specific</div> </a>";

}	

		
					
						/* Start of Quiz Section */

					/* quiz intro.html */

if (section=='quiz_intro'){

string+="<div id=\"nav_cat5\" onmouseover=\"expand_cat5()\" onmouseout=\"collapse_cat5()\" class=\"nav_bar_cat2 collapse\">";

/* Cat 5 title */

string+="<div class=\"nav_link2\">EVE Quiz</div>";
string+="<div id=\"cat5_menu\" class=\"hide2\">";
string+="<a href=\"#top\"><div class=\"nav_link3\" >Return to Top</div> </a>";

/*Page Links */



}	

						/* quiz1.html */

if (section=='quiz1'){

string+="<div id=\"nav_cat5\" onmouseover=\"expand_cat5()\" onmouseout=\"collapse_cat5()\" class=\"nav_bar_cat2 collapse\">";

/* Cat 5 title */

string+="<div class=\"nav_link2\">Quiz 1</div>";
string+="<div id=\"cat5_menu\" class=\"hide2\">";
string+="<a href=\"#top\"><div class=\"nav_link3\" >Return to Top</div> </a>";

/*Page Links */

	string+="<a href=\"#intro\"><div class=\"nav_link3\">Introduction</div> </a>";
	string+="<a href=\"#quiz\"><div class=\"nav_link3\">Quiz</div> </a>";
	string+="<a href=\"#results\"><div class=\"nav_link3\">Results</div> </a>";


}			

						/* quiz2.html */

if (section=='quiz2'){

string+="<div id=\"nav_cat5\" onmouseover=\"expand_cat5()\" onmouseout=\"collapse_cat5()\" class=\"nav_bar_cat2 collapse\">";

/* Cat 5 title */

string+="<div class=\"nav_link2\">Quiz 2</div>";
string+="<div id=\"cat5_menu\" class=\"hide2\">";
string+="<a href=\"#top\"><div class=\"nav_link3\" >Return to Top</div> </a>";

/*Page Links */

	string+="<a href=\"#intro\"><div class=\"nav_link3\">Introduction</div> </a>";
	string+="<a href=\"#quiz\"><div class=\"nav_link3\">Quiz</div> </a>";
	string+="<a href=\"#results\"><div class=\"nav_link3\">Results</div> </a>";


}		

						/* quiz3.html */

if (section=='quiz3'){

string+="<div id=\"nav_cat5\" onmouseover=\"expand_cat5()\" onmouseout=\"collapse_cat5()\" class=\"nav_bar_cat2 collapse\">";

/* Cat 5 title */

string+="<div class=\"nav_link2\">Quiz 3</div>";
string+="<div id=\"cat5_menu\" class=\"hide2\">";
string+="<a href=\"#top\"><div class=\"nav_link3\" >Return to Top</div> </a>";

/*Page Links */

	string+="<a href=\"#intro\"><div class=\"nav_link3\">Introduction</div> </a>";
	string+="<a href=\"#quiz\"><div class=\"nav_link3\">Quiz</div> </a>";
	string+="<a href=\"#results\"><div class=\"nav_link3\">Results</div> </a>";


}						
						
								
						
						/* End of Quiz Section */

	
/* End of Cat 5 Variable */
string+="</div>";
string+="</div>";

/* ESP Server Section */
string+="<div id=\"nav_bar_server_container\" class=\"hide3\">";

string+="<div id=\"eve_server_table\" >";
string+="<table class=\"server_table\">";
string+="<tr>";
string+="<td><b>Server</b></td><td><b>Server Address</b></td>";
string+="</tr>";
string+="<tr>";
string+="<td><a href=\"http://87.237.38.201:26002/\" target=\"_blank\" >Tranquility</a></td><td>87.237.38.200</td>";
string+="</tr>";
string+="<tr>";
string+="<td><a href=\"http://87.237.38.24:26002/\" target=\"_blank\" >Singularity</a></td><td>87.237.38.50</td>";
string+="</tr>";
string+="<tr>";
string+="<td><a href=\"http://87.237.38.23:50001/\" target=\"_blank\" >Singularity ALT</a></td><td>As Above</td>";
string+="</tr>";
string+="<tr>";
string+="<td><a href=\"http://87.237.38.71:26002/\" target=\"_blank\" >Chaos</a></td><td>87.237.38.55</td>";
string+="</tr>";
string+="<tr>";
string+="<td><a href=\"http://87.237.38.15:26002/\" target=\"_blank\" >Multiplicity</a></td><td>87.237.38.51</td>";
string+="</tr>";
string+="<tr>";
string+="<td><a href=\"http://87.237.38.16:26002/\" target=\"_blank\" >Pulsar</a></td><td>87.237.38.54</td>";
string+="</tr>";
string+="<tr>";
string+="<td><a href=\"http://87.237.38.12:26002/\" target=\"_blank\" >Helix</a></td><td>87.237.38.57</td>";
string+="</tr>";
string+="<tr>";
string+="<td><a href=\"http://87.237.38.61:26002//\" target=\"_blank\" >Duality</a> </td><td>87.237.38.60</td>";
string+="</tr>";
string+="<tr>";
string+="<td><a href=\"http://87.237.38.48:26002/\" target=\"_blank\" >Fractal</a></td><td>87.237.38.56</td>";
string+="</tr>";
string+="<tr>";
string+="<td><a href=\"http://87.237.38.18:26002/\" target=\"_blank\" >Buckingham</a></td><td>87.237.38.69</td>";
string+="</tr>";
string+="<tr>";
string+="<td><a href=\"http://87.237.38.13:26002/\" target=\"_blank\" >Osmosis</a></td><td>87.237.38.53</td>";
string+="</tr>";
string+="</table>";

/* ESP Quick Search Section */

string+="<div id=\"server_quick_search\">";

/* Type ID Search */

string+="<table class=\"nav_quick_search\"><tr>";
string+="<td><b>Chaos</b></td> <td><b>Quick Search</b></td>";
string+="</tr></table>";

string+="<form action=\"http://87.237.38.71:50001/gd/type.py?action=TypeByID\" method=\"GET\" target=\"_blank\">";
string+="    <table class=\"nav_quick_search\">";
string+="    <tr>";
string+="	<td><b>TypeID</b></td>";
string+="   <td>";
string+="    <input type=\"text\" id=\"typeID\" name=\"typeID\" value=\"\"> ";
string+="    </td>";
string+="	  <td> ";

string+="<input type=\"hidden\" name=\"action\" value=\"Type\">";
string+="<input type=\"submit\" id=\"Post\" name=\"Post\" value=\"Search\">";
string+="    </td></form> ";
string+="</tr></table> "; 

/* Type by filter */

string+="<form name=\"NeedAName\" id=\"NeedAName\" action=\"http://87.237.38.71:50001/gm/search.py?action=Characters\" method=\"GET\" target=\"_blank\">";
string+="<table class=\"nav_quick_search\">";
string+="<tr>";
string+="<td><b>Type By Filter</b></td>";
string+="<td>";
string+="Language </br>";
string+="<select id=\"languageID\" name=\"languageID\">";
string+="<option value=\"None\">All</option>";
string+="<option value=\"zh\">Chinese (Simplified)</option>";
string+="<option value=\"en-us\">English - United States</option>";
string+="<option value=\"fr\">French</option>";
string+="<option value=\"de\">German</option>";
string+="<option value=\"it\">Italian</option>";
string+="<option value=\"ja\">Japanese</option>";
string+="<option value=\"ru\">Russian</option>";
string+="<option value=\"es\">Spanish</option>";
string+="</select> ";
string+="</td>";
string+="<td>";
string+="Type Name</br> <input type=\"text\" id=\"typeName\" name=\"typeName\" value=\"\"> ";
string+="</td>";
string+="<td></br>";
string+="<input type=\"submit\" id=\"Post\" name=\"Post\" value=\"Search\">";
string+="<input type=\"hidden\" name=\"action\" value=\"Types\"> ";
string+="</td>";
string+="</tr>";
string+="</table></form>";

/* Dungeons */

string+="<form name=\"NeedAName\" id=\"NeedAName\" action=\"http://87.237.38.71:50001/gd/dungeons.py?action=xFindDungeons\" method=\"GET\" target=\"_blank\">";
string+="<table class=\"nav_quick_search\">";
string+="<tr>";
string+="<td><b>Dungeons</b></td>";
string+="<td>Domain</br>";
string+="<select id=\"domain\" name=\"domain\">";
string+="<option value=\"dungeons\">dungeons</option>";
string+="<option value=\"rooms\">rooms</option>";
string+="<option value=\"objects\">objects</option>";
string+="<option value=\"entities\">entities</option>";
string+="<option value=\"incoming transmission text\">incoming transmission text</option>";
string+="<option value=\"agent templatized messages\">agent templatized messages</option>";
string+="</select> ";
string+="</td><td>";
string+="Criteria</br> <input type=\"text\" id=\"criteria\" name=\"criteria\" value=\"\"> ";
string+="</td><td></br>";
string+="<input type=\"submit\" id=\"Post\" name=\"Post\" value=\"Search\">";
string+="<input type=\"hidden\" name=\"action\" value=\"xFindDungeons\"> ";
string+="</td></tr>";
string+="</table></form>";

/* Cerberus Search WIP will fix one day - currently relies on a csrf token to work 

string+="<form name=\"cerberus\" id=\"cerberus_search\" action=\"http://87.237.38.71:50001/gd/cerberus.py?action=SearchText&\" method=\"POST\" target=\"_blank\">";
string+="<table class=\"nav_quick_search\"><tbody><tr>";
string+="<td><b>Cerberus [Chaos]</b></td>";
string+="<td><input type=\"text\" id=\"searchText\" name=\"searchText\" size=\"20\" value=\"\"></td>";
string+="<td><label class=\"form-padding-label\" for=\"en-us\">En</label>";
string+="<input type=\"checkbox\" id=\"en-us\" value=\"lang_1033\" name=\"en-us\" checked=\"\"> <label class=\"form-label\" for=\"en-us\"></label>";
string+="<label class=\"form-padding-label\" for=\"fr\">French</label>";
string+="<input type=\"checkbox\" id=\"fr\" value=\"lang_1036\" name=\"fr\"> <label class=\"form-label\" for=\"fr\"></label></td>";
string+="<td><input type=\"submit\" id=\"Post\" name=\"Post\" value=\"Search\"><input type=\"hidden\" name=\"action\" value=\"SearchText\"> </td>";
string+="</tr></tbody></table><input type=\"hidden\" name=\"csrf_token\" value=\"\"></form>";



string+="<form name=\"cerberus\" id=\"cerberus_search\" action=\"http://87.237.38.48:50001/gd/cerberus.py?action=SearchText&\" method=\"POST\" target=\"_blank\">";
string+="<table class=\"nav_quick_search\"><tbody><tr>";
string+="<td><b>Cerberus [Fractal]</b></td>";
string+="<td><input type=\"text\" id=\"searchText\" name=\"searchText\" size=\"20\" value=\"\"></td>";
string+="<td><label class=\"form-padding-label\" for=\"en-us\">En</label>";
string+="<input type=\"checkbox\" id=\"en-us\" value=\"lang_1033\" name=\"en-us\" checked=\"\"> <label class=\"form-label\" for=\"en-us\"></label>";
string+="<label class=\"form-padding-label\" for=\"fr\">French</label>";
string+="<input type=\"checkbox\" id=\"fr\" value=\"lang_1036\" name=\"fr\"> <label class=\"form-label\" for=\"fr\"></label></td>";
string+="<td><input type=\"submit\" id=\"Post\" name=\"Post\" value=\"Search\"><input type=\"hidden\" name=\"action\" value=\"SearchText\"> </td>";
string+="</tr></tbody></table><input type=\"hidden\" name=\"csrf_token\" value=\"ba31f7a7-3a3b-4568-bb9e-4a4f7aca39d5\"></form>";

*/

string+="</div>";
string+="</div>";
string+="</div>";





/* Container DIV ends */
string+="</div>";
string+="</div>";
string+="</div>";

document.getElementById("result_2").innerHTML=string;
}