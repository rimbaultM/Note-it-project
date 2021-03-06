require("@rails/ujs").start()
// require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
import {animateHome} from "../components/animate_home";
import {addfriend} from "../components/friend";
import {invitation} from "../components/invitation";
import {waiting} from "../components/waiting";
import {dropdownnote} from "../components/dropdown_note";
import {calendar} from "../components/calendrier";
import {calendarnext} from "../components/calendarnext";
import {calendarprev} from "../components/calendarprev";
import {calendardetails} from "../components/calendardetails";


// document.addEventListener('turbolinks:load', () => {
  waiting();
  addfriend();
  animateHome();
  invitation();
  dropdownnote();
  calendar();
  calendarnext();
  calendarprev();
  calendardetails();
// });

