function expand_news_section() {

			
		if (news_section.className== 'news_collapse') {
			news_section.className= 'news_expand'; }
		else {
			news_section.className= 'news_collapse'; }
			
			}
			
function expand_news_sub_section(id) {

			
		if (id.className== 'news_box_collapse') {
			id.className= 'news_box_expand'; }
		else {
			id.className= 'news_box_collapse'; }			
			}

function release_news_display(){

			
var string;

string=""

string+="<div id=\"news_section\" class=\"news_collapse\">";

/* RELEASE NEWS START */

string+="<a href=\"#\" onclick=\"expand_news_section()\"><div class=\"news_box_title\">";
string+="Release News";
string+="</div></a>";

/* DEV BLOGS START */

/* DEV BLOG TITLE */
string+="<div class=\"news_release_expand\">";
string+="<div class=\"news_title\">";
string+="Dev Blogs";
string+="</div></a>";


/* CATEGORY */
string+="<a href=\"#\" onclick=\"expand_news_sub_section(news_box6)\"><div id=\"news_box6\" class=\"news_box_expand\"><div class=\"news_box_release_break\">";
string+="Tiamat - Branch [BILL]";
string+="</div></a>";
/* CATEGORY */

/* ENTERIES */

string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/corp-little-things-friendly-fire-control/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="Corp Little Things & Friendly Fire Control";
string+="</div></a>";

string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/csm-x-candidacy-now-open/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="CMS X Candidacy Period Opens Now!";
string+="</div></a>";

string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/coming-to-eve-in-tiamat/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="Coming to EVE in Tiamat";
string+="</div></a>";

string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/the-republic-strikes-back-the-svipul-tactical-destroyer-and-projectile-changes-in-tiamat/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="The Republic Strikes Back The Svipul Tactical Destroyer and Projectile Changes in Tiamat";
string+="</div></a>";
string+="</div>";

/* CATEGORY */
string+="<a href=\"#\" onclick=\"expand_news_sub_section(news_box7)\"><div id=\"news_box7\" class=\"news_box_collapse\"><div class=\"news_box_release_break\">";
string+="Fanfest 2015";
string+="</div></a>";
/* CATEGORY */

/* ENTERIES */


string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/fanfest-2015-worlds-collide/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="Fanfest 2015 - Worlds Collide";
string+="</div></a>";

string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/fanfest-2015-silent-auction-servers-t-shirts-guns..-oh-my/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="Fanfest 2015 Silent Auction - Servers & T-Shirts & Guns.. Oh My!";
string+="</div></a>";

string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/three-ships-of-fanfest-2015/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="Introducing the three ships of Fanfest 2015";
string+="</div></a>";
string+="</div>";

/* CATEGORY */
string+="<a href=\"#\" onclick=\"expand_news_sub_section(news_box8)\"><div id=\"news_box8\" class=\"news_box_collapse\"><div class=\"news_box_release_break\">";
string+="Misc";
string+="</div></a>";
/* CATEGORY */

/* ENTERIES */

string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/a-glimpse-into-the-future-of-ship-skins/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="A Glimpse Into The Future Of Ship Skins";
string+="</div></a>";

string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/csm-9-review/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="CSM 9 - The Year In Review";
string+="</div></a>";

string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/rebalancing-modules-round-two/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="Rebalancing Modules in EVE Online, Round Two";
string+="</div></a>";

string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/dev-blog-coming-to-eve-online-proteus/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="Coming to EVE Online in the Proteus Release on January 13th";
string+="</div></a>";

string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/holiday-greetings-team-security/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="Holidays Greetings From Team Security! - 2014 In Numbers";
string+="</div></a>";

string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/happy-holidays-from-ccp-1/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="Happy Holidays From CCP!";
string+="</div></a>";

string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/download-on-demand-client-for-eve-online/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="<i class=\"fa fa-star yellow\"></i> ";
string+="Download on Demand Client for EVE Online";
string+="</div></a>";

string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/teams-removal/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="Industry & Teams - The Removal of Teams";
string+="</div></a>";
string+="</div>";

/* CATEGOY */
string+="<a href=\"#\" onclick=\"expand_news_sub_section(news_box2)\"><div id=\"news_box2\" class=\"news_box_collapse\"><div class=\"news_box_release_break\">";
string+="Rhea - Branch [ISAIA]";
string+="</div></a>";
/* CATEGOY */

/* ENTERIES */
string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/coming-to-eve-online-in-the-rhea-release-on-december-9th/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="<i class=\"fa fa-star yellow\"></i> ";
string+="Coming to EVE Online in the Rhea release on December 9th ";
string+="</div></a>";
	
string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/pbr-and-making-eve-look-real/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="Physically Based Rendering and making EVE look \"Real\"";
string+="</div></a>";
	
string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/a-map-to-treasure/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="Starmap Improvements - A Map To Treasure";
string+="</div></a>";
	
string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/a-new-era-of-clones/";
string+="\" target=\"_blank\">	<div class=\"news_box_entry\">";
string+="A new Era of Clones";
string+="</div></a>";
	
string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/quick-give-me-manual-control/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="Quick, give me manual control!";
string+="</div></a>";
	
string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/thera-and-the-shattered-wormholes/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="Thera and the Shattered Wormholes";
string+="</div></a>";
	
string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/new-exploration-sites-new-modules/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="Sleeper Cache exploration sites & Polarized weapons";
string+="</div></a>";

string+="<a href=\"";
string+="http://community.eveonline.com/news/dev-blogs/a-new-look-for-eves-ui-feedback-needed/";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="<i class=\"fa fa-star yellow\"></i> ";
string+="A new look for EVE's UI - feedback needed!";
string+="</div></a>";
string+="</div>";
/* DEV BLOGS END */


/* FORUM POSTS START */

/* TITLE */
string+="<div class=\"news_title\">";
string+="Forum Posts";
string+="</div>";
/* TITLE */

string+="<div class=\"news_box\">";
/* CONTAINER START */

/* CATEGORY */
string+="<a href=\"#\" onclick=\"expand_news_sub_section(news_box3)\"><div id=\"news_box3\" class=\"news_box_expand\"><div class=\"news_box_release_break\">";
string+="2015";
string+="</div></a>";
/* CATEGORY */

string+="<a href=\"";
string+="https://forums.eveonline.com/default.aspx?g=posts&m=5371299";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="[Proteus] Reduction in Fighter and Fighter Bomber scan resolution";
string+="</div></a>";

string+="<a href=\"";
string+="https://forums.eveonline.com/default.aspx?g=posts&t=392328&find=unread";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="<i class=\"fa fa-star yellow\"></i> ";
string+="Dev blog: Download on Demand client for EVE Online";
string+="</div></a>";

string+="<a href=\"";
string+="https://forums.eveonline.com/default.aspx?g=posts&m=5318918";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="[Proteus - January] Recon ships";
string+="</div></a>";
string+="</div>";

string+="<a href=\"#\" onclick=\"expand_news_sub_section(news_box4)\"><div id=\"news_box4\" class=\"news_box_collapse\"><div class=\"news_box_release_break\">";
string+="Current Issues";
string+="</div></a>";

	
string+="<a href=\"";
string+="https://forums.eveonline.com/default.aspx?g=posts&t=391154&find=unread";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="Mac - New Launcher Issues ";
string+="</div></a>";
string+="</div>";
	
string+="<a href=\"#\" onclick=\"expand_news_sub_section(news_box5)\"><div id=\"news_box5\" class=\"news_box_collapse\"><div class=\"news_box_release_break\">";
string+="Rhea - Branch [ISAIA]";
string+="</div></a>";
	
string+="<a href=\"";
string+="https://forums.eveonline.com/default.aspx?g=posts&t=385233&find=unread";
string+="\" target=\"_blank\"><div class=\"news_box_entry\">";
string+="Rhea features on Singularity!";
string+="</div></a>";
string+="</div>";



/* FORUM POSTS END */
string+="</div>";
string+="</div>";
/* RELEASE NEWS ENDS */

string+="</div>";

document.getElementById("result_3").innerHTML=string;
	}