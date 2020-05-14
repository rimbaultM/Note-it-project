require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
import {animateHome} from "../components/animate_home";
import {addfriend} from "../components/friend";
import {invitation} from "../components/invitation";
import {waiting} from "../components/waiting";

waiting();


addfriend();
animateHome();
invitation();

