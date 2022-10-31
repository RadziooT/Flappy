const scale = 0.35;

function div_create_all() {
    div_main_menu();
    div_end_screen();
    div_menu_screen();
    div_authors_screen();
    div_sound_screen();
    div_leaderboard();
}
//-----------------------------------------------------------------------------------------------------------------------
//-------------CREATING MAIN MENU WITH BUTTONS---------------------------------------------------------------------------
function div_main_menu() {
    start_menu_div = createDiv();
    start_menu_div.parent('canvas_sketch');
    start_menu_div.id('start_menu');
    start_menu_div.size(scale * displayWidth, displayHeight);

    button_play = createButton('Start game');
    button_play.parent('start_menu');
    button_play.mousePressed(game_start);
    button_play.id("game_start");
    button_play.addClass("buttons");

    button_options = createButton('Options');
    button_options.parent('start_menu');
    button_options.mousePressed(go_to_options);
    button_options.id("options");
    button_options.addClass("buttons");

    button_authors = createButton('Authors');
    button_authors.parent('start_menu');
    button_authors.mousePressed(go_to_authors);
    button_authors.id("authors");
    button_authors.addClass("buttons");
}

//-----------------------------------------------------------------------------------------------------------------------
//-------------CREATING END SCREEN WITH BUTTONS--------------------------------------------------------------------------
function div_end_screen() {
    end_screen_div = createDiv();
    end_screen_div.parent('canvas_sketch');
    end_screen_div.id('end_screen');
    end_screen_div.size(scale * displayWidth, displayHeight);
    end_screen_div.hide();

    button_restart = createButton('Restart');
    button_restart.parent('end_screen');
    button_restart.mousePressed(game_reset);
    button_restart.id("restart");
    button_restart.addClass("buttons");

    button_return_to_menu = createButton('Main menu');
    button_return_to_menu.parent('end_screen');
    button_return_to_menu.mousePressed(return_to_menu);
    button_return_to_menu.id("return_to_menu");
    button_return_to_menu.addClass("buttons");
}
//-----------------------------------------------------------------------------------------------------------------------
//-------------CREATING MENU SCREEN WITH BUTTONS-------------------------------------------------------------------------
function div_menu_screen() {
    options_div = createDiv();
    options_div.parent('canvas_sketch');
    options_div.id('options_menu');
    options_div.size(scale * displayWidth, displayHeight);
    options_div.hide();

    button_laser = createButton('Laser');
    button_laser.parent('options_menu');
    button_laser.mousePressed(laser_pressed);
    button_laser.id("laser_toggle");
    button_laser.addClass("buttons");

    button_points = createButton('Additional points');
    button_points.parent('options_menu');
    button_points.mousePressed(points_pressed);
    button_points.id("points_toggle");
    button_points.addClass("buttons");

    button_gravity = createButton('Swapping gravity');
    button_gravity.parent('options_menu');
    button_gravity.mousePressed(gravity_pressed);
    button_gravity.id("gravity_toggle");
    button_gravity.addClass("buttons");

    button_return_to_menu = createButton('Main menu');
    button_return_to_menu.parent('options_menu');
    button_return_to_menu.mousePressed(return_to_menu);
    button_return_to_menu.id("return_from_options");
    button_return_to_menu.addClass("buttons");
}
//-----------------------------------------------------------------------------------------------------------------------
//-----------CREATING AUTHORS SCREEN WITH BUTTONS------------------------------------------------------------------------
function div_authors_screen() {
    authors_div = createDiv();
    authors_div.parent('canvas_sketch');
    authors_div.id('authors_screen');
    authors_div.size(scale * displayWidth, displayHeight);
    authors_div.hide();

    text_div = createDiv('Authors:<br>Mateusz Siedliski & Radosław Tchórzewski');
    text_div.parent('authors_screen');
    text_div.id('authors_text');

    button_return_from_authors = createButton('Main menu');
    button_return_from_authors.parent('authors_screen');
    button_return_from_authors.mousePressed(return_to_menu);
    button_return_from_authors.id("return_from_authors");
    button_return_from_authors.addClass("buttons");
}
//------------------------------------------------------------------------------------------------------------------------------
//-------------------CREATING SOUND BUTTONS-------------------------------------------------------------------------------------
function div_sound_screen() {
    sound_div = createDiv();
    sound_div.parent('canvas_sketch');
    sound_div.id('sound_div')
    soundtrack_volume_state = 0;
    sound_div.mousePressed(toggleSound);

    jump_sound_div = createDiv();
    jump_sound_div.parent('canvas_sketch');
    jump_sound_div.id('jump_sound_div')
    jump_volume_state = 0;
    jump_sound_div.mousePressed(toggle_jump_sound);
}
//------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------CREATING LEADERBOARD--------------------------------------------------------------------
function div_leaderboard() {
    leaderboard_div = createDiv();
    leaderboard_div.parent('canvas_sketch');
    leaderboard_div.id('leaderboard_screen');
    leaderboard_div.size(0.15 * displayWidth, displayHeight);
    leaderboard_div.html('<h1 id="leaderboard_title">Highest scores</h1>')

    all_scores_div = createDiv();
    all_scores_div.parent('leaderboard_screen');
    all_scores_div.id('all_scores');

    score_name_div = createDiv();
    score_name_div.parent('all_scores');
    score_name_div.id('score_name');

    score_value_div = createDiv();
    score_value_div.parent('all_scores');
    score_value_div.id('score_value');
}