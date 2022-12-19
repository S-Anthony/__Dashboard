import graphs from "./modules/graphs";
import slider from "./modules/slider";
import menu from "./modules/menu";
import dropdown from "./modules/dropdown";
import accordion from "./modules/accordion";
import buttonGlow from "./modules/button_glow";
import likeButton from "./modules/like_button";
import changeScheme from "./modules/change_scheme";

document.addEventListener("DOMContentLoaded", () => {
	'use strict';

	changeScheme();
	graphs();
	slider();
	menu();
	dropdown();
	accordion();
	buttonGlow();
	likeButton();
});