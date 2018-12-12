'use strict';
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var	App,
	current = 0,
	canvas,
	canvasDomEl = $('#canvas'),
	navigation = $('.holder'),
	gr,
	grd,
	clock;
	
App = function(){
	var navEl,
		navItems = ["Saab", "Volvo", "BMW"],
		data = {"34":{"info":{"title":"NBA Basketball","key":"basketball","order":"20000010010000000034"},"data":{"51":{"info":{"market_title":"Fourteen Way Winning Margin"},"data":{"2017-12-01":{"info":{"date_title":"01\/12 - Friday","order":"2017-12-01 02:05:00"},"data":{"1152131":{"info":{"home_team":"Denver Nuggets","away_team":"Chicago Bulls","favorite":"home","order":"2017-12-01 02:05:00","event_state":"early","sport_key":"basketball","event_id":"1152131","event_info_line_one":"<span class=\"score row is-live\"> LIVE <\/span>","event_info_line_two":"01\/12 02:05","market_key":"fourteen_way_winning_margin","all_markets_button":"+39","red_cards_home":"0","red_cards_away":"0","has_live_incidents":false,"terrain_type":"","home_team_color":"","away_team_color":"","live_clock_timestamp":"0","live_game_period":"''"},"data":{"e_928762002":{"info":{"key":"home_7-9","display_odd":"9.50","odd":"9.50","is_bet_allowed":1},"action":"update"},"e_928762000":{"info":{"key":"home_3-6","display_odd":"8.25","odd":"8.25","is_bet_allowed":1},"action":"update"},"e_928762010":{"info":{"key":"home_21p","display_odd":"5.00","odd":"5.00","is_bet_allowed":1},"action":"update"},"e_928762008":{"info":{"key":"home_17-20","display_odd":"8.75","odd":"8.75","is_bet_allowed":1},"action":"update"},"e_928762006":{"info":{"key":"home_14-16","display_odd":"10.00","odd":"10.00","is_bet_allowed":1},"action":"update"},"e_928762004":{"info":{"key":"home_10-13","display_odd":"7.25","odd":"7.25","is_bet_allowed":1},"action":"update"},"e_928761998":{"info":{"key":"home_1-2","display_odd":"18.00","odd":"18.00","is_bet_allowed":1},"action":"update"},"e_928762003":{"info":{"key":"away_7-9","display_odd":"26.00","odd":"26.00","is_bet_allowed":1},"action":"update"},"e_928762001":{"info":{"key":"away_3-6","display_odd":"14.50","odd":"14.50","is_bet_allowed":1},"action":"update"},"e_928762011":{"info":{"key":"away_21p","display_odd":"126.00","odd":"126.00","is_bet_allowed":1},"action":"update"},"e_928762009":{"info":{"key":"away_17-20","display_odd":"88.00","odd":"88.00","is_bet_allowed":1},"action":"update"},"e_928762007":{"info":{"key":"away_14-16","display_odd":"65.00","odd":"65.00","is_bet_allowed":1},"action":"update"},"e_928762005":{"info":{"key":"away_10-13","display_odd":"32.00","odd":"32.00","is_bet_allowed":1},"action":"update"},"e_928761999":{"info":{"key":"away_1-2","display_odd":"20.00","odd":"20.00","is_bet_allowed":1},"action":"update"}},"action":"update"},"1152132":{"info":{"home_team":"Atlanta Hawks","away_team":"Cleveland Cavaliers","favorite":"away","order":"2017-12-01 00:35:00","event_state":"early","sport_key":"basketball","event_id":"1152132","event_info_line_one":"<span class=\"score row is-live\"> LIVE <\/span>","event_info_line_two":"01\/12 00:35","market_key":"fourteen_way_winning_margin","all_markets_button":"+37","red_cards_home":"0","red_cards_away":"0","has_live_incidents":false,"terrain_type":"","home_team_color":"","away_team_color":"","live_clock_timestamp":"0","live_game_period":"''"},"data":{"e_928762050":{"info":{"key":"home_7-9","display_odd":"19.00","odd":"19.00","is_bet_allowed":1},"action":"update"},"e_928762048":{"info":{"key":"home_3-6","display_odd":"11.00","odd":"11.00","is_bet_allowed":1},"action":"update"},"e_928762058":{"info":{"key":"home_21p","display_odd":"68.00","odd":"68.00","is_bet_allowed":1},"action":"update"},"e_928762056":{"info":{"key":"home_17-20","display_odd":"52.00","odd":"52.00","is_bet_allowed":1},"action":"update"},"e_928762054":{"info":{"key":"home_14-16","display_odd":"41.00","odd":"41.00","is_bet_allowed":1},"action":"update"},"e_928762052":{"info":{"key":"home_10-13","display_odd":"21.00","odd":"21.00","is_bet_allowed":1},"action":"update"},"e_928762046":{"info":{"key":"home_1-2","display_odd":"17.00","odd":"17.00","is_bet_allowed":1},"action":"update"},"e_928762051":{"info":{"key":"away_7-9","display_odd":"9.50","odd":"9.50","is_bet_allowed":1},"action":"update"},"e_928762049":{"info":{"key":"away_3-6","display_odd":"7.50","odd":"7.50","is_bet_allowed":1},"action":"update"},"e_928762059":{"info":{"key":"away_21p","display_odd":"7.75","odd":"7.75","is_bet_allowed":1},"action":"update"},"e_928762057":{"info":{"key":"away_17-20","display_odd":"11.00","odd":"11.00","is_bet_allowed":1},"action":"update"},"e_928762055":{"info":{"key":"away_14-16","display_odd":"11.50","odd":"11.50","is_bet_allowed":1},"action":"update"},"e_928762053":{"info":{"key":"away_10-13","display_odd":"7.75","odd":"7.75","is_bet_allowed":1},"action":"update"},"e_928762047":{"info":{"key":"away_1-2","display_odd":"15.00","odd":"15.00","is_bet_allowed":1},"action":"update"}},"action":"update"},"1152133":{"info":{"home_team":"Portland Trail Blazers","away_team":"Milwaukee Bucks","favorite":"home","order":"2017-12-01 03:05:00","event_state":"early","sport_key":"basketball","event_id":"1152133","event_info_line_one":"<span class=\"score row is-live\"> LIVE <\/span>","event_info_line_two":"01\/12 03:05","market_key":"fourteen_way_winning_margin","all_markets_button":"+37","red_cards_home":"0","red_cards_away":"0","has_live_incidents":false,"terrain_type":"","home_team_color":"","away_team_color":"","live_clock_timestamp":"0","live_game_period":"''"},"data":{"e_928762399":{"info":{"key":"home_7-9","display_odd":"10.50","odd":"10.50","is_bet_allowed":1},"action":"update"},"e_928762397":{"info":{"key":"home_3-6","display_odd":"7.75","odd":"7.75","is_bet_allowed":1},"action":"update"},"e_928762407":{"info":{"key":"home_21p","display_odd":"13.00","odd":"13.00","is_bet_allowed":1},"action":"update"},"e_928762405":{"info":{"key":"home_17-20","display_odd":"16.00","odd":"16.00","is_bet_allowed":1},"action":"update"},"e_928762403":{"info":{"key":"home_14-16","display_odd":"15.00","odd":"15.00","is_bet_allowed":1},"action":"update"},"e_928762401":{"info":{"key":"home_10-13","display_odd":"9.50","odd":"9.50","is_bet_allowed":1},"action":"update"},"e_928762395":{"info":{"key":"home_1-2","display_odd":"14.00","odd":"14.00","is_bet_allowed":1},"action":"update"},"e_928762400":{"info":{"key":"away_7-9","display_odd":"13.50","odd":"13.50","is_bet_allowed":1},"action":"update"},"e_928762398":{"info":{"key":"away_3-6","display_odd":"8.75","odd":"8.75","is_bet_allowed":1},"action":"update"},"e_928762408":{"info":{"key":"away_21p","display_odd":"27.00","odd":"27.00","is_bet_allowed":1},"action":"update"},"e_928762406":{"info":{"key":"away_17-20","display_odd":"27.00","odd":"27.00","is_bet_allowed":1},"action":"update"},"e_928762404":{"info":{"key":"away_14-16","display_odd":"23.00","odd":"23.00","is_bet_allowed":1},"action":"update"},"e_928762402":{"info":{"key":"away_10-13","display_odd":"13.50","odd":"13.50","is_bet_allowed":1},"action":"update"},"e_928762396":{"info":{"key":"away_1-2","display_odd":"14.50","odd":"14.50","is_bet_allowed":1},"action":"update"}},"action":"update"}},"action":"update"}},"action":"update"},"52":{"info":{"market_title":"Twelve Way Winning Margin"},"data":{"2017-12-01":{"info":{"date_title":"01\/12 - Friday","order":"2017-12-01 02:05:00"},"data":{"1152131":{"info":{"home_team":"Denver Nuggets","away_team":"Chicago Bulls","favorite":"home","order":"2017-12-01 02:05:00","event_state":"early","sport_key":"basketball","event_id":"1152131","event_info_line_one":"<span class=\"score row is-live\"> LIVE <\/span>","event_info_line_two":"01\/12 02:05","market_key":"twelve_way_winning_margin","all_markets_button":"+39","red_cards_home":"0","red_cards_away":"0","has_live_incidents":false,"terrain_type":"","home_team_color":"","away_team_color":"","live_clock_timestamp":"0","live_game_period":"''"},"data":{"e_928762019":{"info":{"key":"home_6-10","display_odd":"6.00","odd":"6.00","is_bet_allowed":1},"action":"update"},"e_928762027":{"info":{"key":"home_26p","display_odd":"9.00","odd":"9.00","is_bet_allowed":1},"action":"update"},"e_928762025":{"info":{"key":"home_21-25","display_odd":"9.50","odd":"9.50","is_bet_allowed":1},"action":"update"},"e_928762023":{"info":{"key":"home_16-20","display_odd":"6.75","odd":"6.75","is_bet_allowed":1},"action":"update"},"e_928762021":{"info":{"key":"home_11-15","display_odd":"6.00","odd":"6.00","is_bet_allowed":1},"action":"update"},"e_928762017":{"info":{"key":"home_1-5","display_odd":"7.25","odd":"7.25","is_bet_allowed":1},"action":"update"},"e_928762020":{"info":{"key":"away_6-10","display_odd":"17.00","odd":"17.00","is_bet_allowed":1},"action":"update"},"e_928762028":{"info":{"key":"away_26p","display_odd":"149.00","odd":"149.00","is_bet_allowed":1},"action":"update"},"e_928762026":{"info":{"key":"away_21-25","display_odd":"149.00","odd":"149.00","is_bet_allowed":1},"action":"update"},"e_928762024":{"info":{"key":"away_16-20","display_odd":"67.00","odd":"67.00","is_bet_allowed":1},"action":"update"},"e_928762022":{"info":{"key":"away_11-15","display_odd":"32.00","odd":"32.00","is_bet_allowed":1},"action":"update"},"e_928762018":{"info":{"key":"away_1-5","display_odd":"10.00","odd":"10.00","is_bet_allowed":1},"action":"update"}},"action":"update"},"1152132":{"info":{"home_team":"Atlanta Hawks","away_team":"Cleveland Cavaliers","favorite":"away","order":"2017-12-01 00:35:00","event_state":"early","sport_key":"basketball","event_id":"1152132","event_info_line_one":"<span class=\"score row is-live\"> LIVE <\/span>","event_info_line_two":"01\/12 00:35","market_key":"twelve_way_winning_margin","all_markets_button":"+37","red_cards_home":"0","red_cards_away":"0","has_live_incidents":false,"terrain_type":"","home_team_color":"","away_team_color":"","live_clock_timestamp":"0","live_game_period":"''"},"data":{"e_928762072":{"info":{"key":"home_6-10","display_odd":"11.50","odd":"11.50","is_bet_allowed":1},"action":"update"},"e_928762080":{"info":{"key":"home_26p","display_odd":"149.00","odd":"149.00","is_bet_allowed":1},"action":"update"},"e_928762078":{"info":{"key":"home_21-25","display_odd":"85.00","odd":"85.00","is_bet_allowed":1},"action":"update"},"e_928762076":{"info":{"key":"home_16-20","display_odd":"39.00","odd":"39.00","is_bet_allowed":1},"action":"update"},"e_928762074":{"info":{"key":"home_11-15","display_odd":"20.00","odd":"20.00","is_bet_allowed":1},"action":"update"},"e_928762070":{"info":{"key":"home_1-5","display_odd":"8.00","odd":"8.00","is_bet_allowed":1},"action":"update"},"e_928762073":{"info":{"key":"away_6-10","display_odd":"5.75","odd":"5.75","is_bet_allowed":1},"action":"update"},"e_928762081":{"info":{"key":"away_26p","display_odd":"15.00","odd":"15.00","is_bet_allowed":1},"action":"update"},"e_928762079":{"info":{"key":"away_21-25","display_odd":"13.00","odd":"13.00","is_bet_allowed":1},"action":"update"},"e_928762077":{"info":{"key":"away_16-20","display_odd":"8.50","odd":"8.50","is_bet_allowed":1},"action":"update"},"e_928762075":{"info":{"key":"away_11-15","display_odd":"6.50","odd":"6.50","is_bet_allowed":1},"action":"update"},"e_928762071":{"info":{"key":"away_1-5","display_odd":"6.25","odd":"6.25","is_bet_allowed":1},"action":"update"}},"action":"update"},"1152133":{"info":{"home_team":"Portland Trail Blazers","away_team":"Milwaukee Bucks","favorite":"home","order":"2017-12-01 03:05:00","event_state":"early","sport_key":"basketball","event_id":"1152133","event_info_line_one":"<span class=\"score row is-live\"> LIVE <\/span>","event_info_line_two":"01\/12 03:05","market_key":"twelve_way_winning_margin","all_markets_button":"+37","red_cards_home":"0","red_cards_away":"0","has_live_incidents":false,"terrain_type":"","home_team_color":"","away_team_color":"","live_clock_timestamp":"0","live_game_period":"''"},"data":{"e_928762411":{"info":{"key":"home_6-10","display_odd":"6.50","odd":"6.50","is_bet_allowed":1},"action":"update"},"e_928762419":{"info":{"key":"home_26p","display_odd":"26.00","odd":"26.00","is_bet_allowed":1},"action":"update"},"e_928762417":{"info":{"key":"home_21-25","display_odd":"20.00","odd":"20.00","is_bet_allowed":1},"action":"update"},"e_928762415":{"info":{"key":"home_16-20","display_odd":"12.00","odd":"12.00","is_bet_allowed":1},"action":"update"},"e_928762413":{"info":{"key":"home_11-15","display_odd":"8.25","odd":"8.25","is_bet_allowed":1},"action":"update"},"e_928762409":{"info":{"key":"home_1-5","display_odd":"6.00","odd":"6.00","is_bet_allowed":1},"action":"update"},"e_928762412":{"info":{"key":"away_6-10","display_odd":"7.00","odd":"7.00","is_bet_allowed":1},"action":"update"},"e_928762420":{"info":{"key":"away_26p","display_odd":"60.00","odd":"60.00","is_bet_allowed":1},"action":"update"},"e_928762418":{"info":{"key":"away_21-25","display_odd":"38.00","odd":"38.00","is_bet_allowed":1},"action":"update"},"e_928762416":{"info":{"key":"away_16-20","display_odd":"20.00","odd":"20.00","is_bet_allowed":1},"action":"update"},"e_928762414":{"info":{"key":"away_11-15","display_odd":"12.00","odd":"12.00","is_bet_allowed":1},"action":"update"},"e_928762410":{"info":{"key":"away_1-5","display_odd":"6.50","odd":"6.50","is_bet_allowed":1},"action":"update"}},"action":"update"}},"action":"update"}},"action":"update"},"53":{"info":{"market_title":"Seven Way Winning Margin"},"data":{"2017-12-01":{"info":{"date_title":"01\/12 - Friday","order":"2017-12-01 02:05:00"},"data":{"1152131":{"info":{"home_team":"Denver Nuggets","away_team":"Chicago Bulls","favorite":"home","order":"2017-12-01 02:05:00","event_state":"early","sport_key":"basketball","event_id":"1152131","event_info_line_one":"<span class=\"score row is-live\"> LIVE <\/span>","event_info_line_two":"01\/12 02:05","market_key":"seven_way_winning_margin","all_markets_button":"+39","red_cards_home":"0","red_cards_away":"0","has_live_incidents":false,"terrain_type":"","home_team_color":"","away_team_color":"","live_clock_timestamp":"0","live_game_period":"''"},"data":{"e_928762032":{"info":{"key":"6-10","display_odd":"4.50","odd":"4.50","is_bet_allowed":1},"action":"update"},"e_928762037":{"info":{"key":"31p","display_odd":"18.00","odd":"18.00","is_bet_allowed":1},"action":"update"},"e_928762036":{"info":{"key":"26-30","display_odd":"14.00","odd":"14.00","is_bet_allowed":1},"action":"update"},"e_928762035":{"info":{"key":"21-25","display_odd":"8.75","odd":"8.75","is_bet_allowed":1},"action":"update"},"e_928762034":{"info":{"key":"16-20","display_odd":"6.25","odd":"6.25","is_bet_allowed":1},"action":"update"},"e_928762033":{"info":{"key":"11-15","display_odd":"5.00","odd":"5.00","is_bet_allowed":1},"action":"update"},"e_928762031":{"info":{"key":"1-5","display_odd":"4.30","odd":"4.30","is_bet_allowed":1},"action":"update"}},"action":"update"},"1152132":{"info":{"home_team":"Atlanta Hawks","away_team":"Cleveland Cavaliers","favorite":"away","order":"2017-12-01 00:35:00","event_state":"early","sport_key":"basketball","event_id":"1152132","event_info_line_one":"<span class=\"score row is-live\"> LIVE <\/span>","event_info_line_two":"01\/12 00:35","market_key":"seven_way_winning_margin","all_markets_button":"+37","red_cards_home":"0","red_cards_away":"0","has_live_incidents":false,"terrain_type":"","home_team_color":"","away_team_color":"","live_clock_timestamp":"0","live_game_period":"''"},"data":{"e_928762064":{"info":{"key":"6-10","display_odd":"3.90","odd":"3.90","is_bet_allowed":1},"action":"update"},"e_928762069":{"info":{"key":"31p","display_odd":"31.00","odd":"31.00","is_bet_allowed":1},"action":"update"},"e_928762068":{"info":{"key":"26-30","display_odd":"21.00","odd":"21.00","is_bet_allowed":1},"action":"update"},"e_928762067":{"info":{"key":"21-25","display_odd":"11.50","odd":"11.50","is_bet_allowed":1},"action":"update"},"e_928762066":{"info":{"key":"16-20","display_odd":"7.00","odd":"7.00","is_bet_allowed":1},"action":"update"},"e_928762065":{"info":{"key":"11-15","display_odd":"4.90","odd":"4.90","is_bet_allowed":1},"action":"update"},"e_928762063":{"info":{"key":"1-5","display_odd":"3.50","odd":"3.50","is_bet_allowed":1},"action":"update"}},"action":"update"},"1152133":{"info":{"home_team":"Portland Trail Blazers","away_team":"Milwaukee Bucks","favorite":"home","order":"2017-12-01 03:05:00","event_state":"early","sport_key":"basketball","event_id":"1152133","event_info_line_one":"<span class=\"score row is-live\"> LIVE <\/span>","event_info_line_two":"01\/12 03:05","market_key":"seven_way_winning_margin","all_markets_button":"+37","red_cards_home":"0","red_cards_away":"0","has_live_incidents":false,"terrain_type":"","home_team_color":"","away_team_color":"","live_clock_timestamp":"0","live_game_period":"''"},"data":{"e_928762422":{"info":{"key":"6-10","display_odd":"3.70","odd":"3.70","is_bet_allowed":1},"action":"update"},"e_928762427":{"info":{"key":"31p","display_odd":"45.00","odd":"45.00","is_bet_allowed":1},"action":"update"},"e_928762426":{"info":{"key":"26-30","display_odd":"27.00","odd":"27.00","is_bet_allowed":1},"action":"update"},"e_928762425":{"info":{"key":"21-25","display_odd":"13.50","odd":"13.50","is_bet_allowed":1},"action":"update"},"e_928762424":{"info":{"key":"16-20","display_odd":"7.75","odd":"7.75","is_bet_allowed":1},"action":"update"},"e_928762423":{"info":{"key":"11-15","display_odd":"4.90","odd":"4.90","is_bet_allowed":1},"action":"update"},"e_928762421":{"info":{"key":"1-5","display_odd":"3.15","odd":"3.15","is_bet_allowed":1},"action":"update"}},"action":"update"}},"action":"update"}},"action":"update"},"54":{"info":{"market_title":"Double Result"},"data":{"2017-12-01":{"info":{"date_title":"01\/12 - Friday","order":"2017-12-01 02:05:00"},"data":{"1152131":{"info":{"home_team":"Denver Nuggets","away_team":"Chicago Bulls","favorite":"home","order":"2017-12-01 02:05:00","event_state":"early","sport_key":"basketball","event_id":"1152131","event_info_line_one":"<span class=\"score row is-live\"> LIVE <\/span>","event_info_line_two":"01\/12 02:05","market_key":"double_result","all_markets_button":"+39","red_cards_home":"0","red_cards_away":"0","has_live_incidents":false,"terrain_type":"","home_team_color":"","away_team_color":"","live_clock_timestamp":"0","live_game_period":"''"},"data":{"e_929128061":{"info":{"key":"hh","display_odd":"1.68","odd":"1.68","is_bet_allowed":1},"action":"update"},"e_929128062":{"info":{"key":"ha","display_odd":"16.00","odd":"16.00","is_bet_allowed":1},"action":"update"},"e_929128063":{"info":{"key":"dh","display_odd":"16.00","odd":"16.00","is_bet_allowed":1},"action":"update"},"e_929128064":{"info":{"key":"da","display_odd":"42.00","odd":"42.00","is_bet_allowed":1},"action":"update"},"e_929128065":{"info":{"key":"ah","display_odd":"5.50","odd":"5.50","is_bet_allowed":1},"action":"update"},"e_929128066":{"info":{"key":"aa","display_odd":"7.75","odd":"7.75","is_bet_allowed":1},"action":"update"}},"action":"update"},"1152132":{"info":{"home_team":"Atlanta Hawks","away_team":"Cleveland Cavaliers","favorite":"away","order":"2017-12-01 00:35:00","event_state":"early","sport_key":"basketball","event_id":"1152132","event_info_line_one":"<span class=\"score row is-live\"> LIVE <\/span>","event_info_line_two":"01\/12 00:35","market_key":"double_result","all_markets_button":"+37","red_cards_home":"0","red_cards_away":"0","has_live_incidents":false,"terrain_type":"","home_team_color":"","away_team_color":"","live_clock_timestamp":"0","live_game_period":"''"},"data":{"e_929128074":{"info":{"key":"hh","display_odd":"5.50","odd":"5.50","is_bet_allowed":1},"action":"update"},"e_929128075":{"info":{"key":"ha","display_odd":"5.75","odd":"5.75","is_bet_allowed":1},"action":"update"},"e_929128076":{"info":{"key":"dh","display_odd":"32.00","odd":"32.00","is_bet_allowed":1},"action":"update"},"e_929128077":{"info":{"key":"da","display_odd":"17.00","odd":"17.00","is_bet_allowed":1},"action":"update"},"e_929128078":{"info":{"key":"ah","display_odd":"11.50","odd":"11.50","is_bet_allowed":1},"action":"update"},"e_929128079":{"info":{"key":"aa","display_odd":"1.95","odd":"1.95","is_bet_allowed":1},"action":"update"}},"action":"update"},"1152133":{"info":{"home_team":"Portland Trail Blazers","away_team":"Milwaukee Bucks","favorite":"home","order":"2017-12-01 03:05:00","event_state":"early","sport_key":"basketball","event_id":"1152133","event_info_line_one":"<span class=\"score row is-live\"> LIVE <\/span>","event_info_line_two":"01\/12 03:05","market_key":"double_result","all_markets_button":"+37","red_cards_home":"0","red_cards_away":"0","has_live_incidents":false,"terrain_type":"","home_team_color":"","away_team_color":"","live_clock_timestamp":"0","live_game_period":"''"},"data":{"e_929128150":{"info":{"key":"hh","display_odd":"2.45","odd":"2.45","is_bet_allowed":1},"action":"update"},"e_929128151":{"info":{"key":"ha","display_odd":"8.00","odd":"8.00","is_bet_allowed":1},"action":"update"},"e_929128152":{"info":{"key":"dh","display_odd":"19.00","odd":"19.00","is_bet_allowed":1},"action":"update"},"e_929128153":{"info":{"key":"da","display_odd":"24.00","odd":"24.00","is_bet_allowed":1},"action":"update"},"e_929128154":{"info":{"key":"ah","display_odd":"6.50","odd":"6.50","is_bet_allowed":1},"action":"update"},"e_929128155":{"info":{"key":"aa","display_odd":"3.60","odd":"3.60","is_bet_allowed":1},"action":"update"}},"action":"update"}},"action":"update"}},"action":"update"}},"action":"update"}},
		_RGB = {},
		names = ['alex','jim','carol'];

	_RGB._RED = Math.floor(Math.random() * 256);
	_RGB._RED_DIRECTION = true;
	_RGB._GREEN = Math.floor(Math.random() * 256);
	_RGB._GREEN_DIRECTION = true;
	_RGB._BLUE = Math.floor(Math.random() * 256);
	_RGB._BLUE_DIRECTION = true;

	$('nav div.names').append(names[Math.floor(Math.random() * names.length)]);

	return {
		canvasCtx: null,
		isPainting: false,
		clickX: [],
		clickY: [],
		clickDrag: [],
		prevCanvasVal: 0,
		drawHandle: $('input[name="draw-handle"]'),
		init: function(){
			var self = this;
			this.draw();
			this.initMenu();
			this.drawHandle.on("input", function(){
				$('#range-val').css('width', $(this).val() + '%');
				self.arcDraw($(this).val());
			});
		},
		initMenu: function(){
			var menuItems = {
				draw: {"icon":"	icon-pen", "action": "drawPen"},
			}
			$.each(menuItems, function(index, value){
				navigation.append('<a href="' + value.action + '" class="menu-item"><i class="' + value.icon + '"></i></a>');
			});
		},
		setNav : function(){
			if (navItems.indexOf(navItems[current]) > -1){
				navEl = navItems[current];
				$('nav div').append(navEl);
				current++;
			} else {
				alert('it\'s over');
			}
		},
		getNav : function(){
			return navEl;
		},
		addClick: function(x, y, dragging){
			this.clickX.push(x);
		  	this.clickY.push(y);
		  	this.clickDrag.push(dragging);
		},
		paint	:function(){
			gr = this.canvasCtx.createLinearGradient(0,0,this.canvasCtx.canvas.width,this.canvasCtx.canvas.height);
			gr.addColorStop(0,"#64e4bb");
			gr.addColorStop(1,"#4992bd");
			this.canvasCtx.strokeStyle = gr;
			this.canvasCtx.lineWidth = 5;

			this.canvasCtx.clearRect(0, 0, this.canvasCtx.canvas.width, this.canvasCtx.canvas.height); // Clears the canvas
  
		  	this.canvasCtx.lineJoin = "bevel";
		  	this.canvasCtx.lineWidth = 5;
						
		  	for(var i=0; i < this.clickX.length; i++) {		
			    this.canvasCtx.beginPath();
			    if(this.clickDrag[i] && i){
	     	 		this.canvasCtx.moveTo(this.clickX[i-1], this.clickY[i-1]);
		     	} else {
		       		this.canvasCtx.moveTo(this.clickX[i]-1, this.clickY[i]);
		     	}	
		     	this.canvasCtx.lineTo(this.clickX[i], this.clickY[i]);
		     	this.canvasCtx.closePath();
		     	this.canvasCtx.stroke();
	  		}
		},
		setDrawMethod: function(val){
			var self = this;
			this.drawHandle.off('input');
			this.drawHandle.on('input', function(value){
				self[val]($(this).val());
			});
			this.drawHandle.val(0).trigger('input');
		},
		arcDraw:function(val){
			this.canvasCtx.clearRect(0, 0, 600, 600);
			this.canvasCtx.beginPath();
			this.canvasCtx.arc(200, 200, 100, 0 * Math.PI ,val * Math.PI);
			this.canvasCtx.stroke();
			this.prevCanvasVal = val;
		},
		rectDraw:function(val){
			var grd = this.canvasCtx.createRadialGradient(0,0,300, 600,600, 500);
			grd.addColorStop(0,"#f1fa64");
			grd.addColorStop(1,"#3cffa3");
			this.canvasCtx.clearRect(0, 0, 600, 600);			
			//this.canvasCtx.rect(200, 200, val * 65 ,val * 100);
			this.canvasCtx.fillStyle = grd;
			this.canvasCtx.fillRect(200, 200, val * 65 ,val * 100);
			this.prevCanvasVal = val;
		},
		draw	:function(){
			canvas = document.getElementById('canvas');
			this.canvasCtx = canvas.getContext('2d');
			grd = this.canvasCtx.createLinearGradient(0,0,170,0);
			grd.addColorStop(0,"#64e4bb");
			grd.addColorStop(1,"#4992bd");

			this.canvasCtx.strokeStyle = grd;
			
			this.canvasCtx.beginPath();

			var interval = 0,
				circleInterval,
				that = this;

			/*circleInterval = setInterval(function(){
				var input = $('.range-input');
				input.val(interval);
				that.inputDraw(interval);
				if(interval == Number(input.attr('max'))){
					clearInterval(circleInterval);
				}

				interval++;
			}, 1000);*/
		},
		clearDrawing: function(){
			canvas = document.getElementById('canvas');
			this.canvasCtx = canvas.getContext('2d');
			this.canvasCtx.clearRect(100,50,100,100);
		},
		getData	:function(){
			return data;
		},
		setGama: function(gama){
			if (_RGB[gama + '_DIRECTION']){
			   _RGB[gama]++;
			   _RGB[gama] == 255 ? _RGB[gama + '_DIRECTION'] = false : '';
			} else {
			   _RGB[gama]--;
			   _RGB[gama] == 0 ? _RGB[gama + '_DIRECTION'] = true : '';
			}
		},
		setBackground: function(){
			this.setGama('_RED');
			this.setGama('_GREEN');
			this.setGama('_BLUE');
			$('body').css('backgroundColor','rgb('+ _RGB._RED +','+ _RGB._GREEN +','+ _RGB._BLUE +')');
		},
		setName: function(){
			var index = Math.floor(Math.random() * names.length);
			$('nav div.names').empty().append(names[index]);
		}
	};
}
 function drag(event){
	event.dataTransfer.setData('text', event.target.id);
 }
 function dragOver(event){
	 event.preventDefault();
 }
 function drop(event){
	event.preventDefault();
	var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
 }
 
 var app = new App;
 app.init();
 //app.setBackground();
 window.addEventListener('wheel', function(){
	//app.setBackground();
 });
 
canvasDomEl.mousedown(function(e){
	app.isPainting = true;
	app.addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
	app.paint();
}).mousemove(function(e){
	if(app.isPainting){
		app.addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
		app.paint();
	}
}).mouseup(function(){
	app.isPainting = false;
}).mouseleave(function(){
	app.isPainting = false;
});
 
$('#nameSetter').click(function () {
	app.setName();
});

$('#range-val').css('width', $('.range-input').val() + '%');