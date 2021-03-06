var c = document.getElementById('game'),
ctx = c.getContext('2d');

var editMode = false;

var accel = {};
accel.x = 0;
accel.y = 0;
accel.amount = 0.005;
accel.max = 1;

var offset = {};
offset.x = 0;
offset.y = 0;

var midPointX = c.width / 2 + accel.x;
var midPointY = c.height / 2 + accel.y;

var input = {};
input.up = false;
input.down = false;
input.left = false;
input.right = false;
input.f = false;
input.autoSpin = false;
input.autofire = false;
input.shiftHeld = false;

var mouse = {};
mouse.x = 0;
mouse.y = 0;
mouse.held = false;
mouse.rightdown = false;

function editButtonClick() {
	if (editMode === false) {
		editMode = true;
		showhide("visible", "hidden", "hidden", "hidden", "visible", "hidden", "hidden");
	} else {
		editMode = false;
		showhide("hidden", "hidden", "hidden", "hidden", "hidden", "hidden", "hidden");
	}
}

function bodyClick() {
	showhide("visible", "visible", "hidden", "hidden", "hidden", "hidden", "hidden");
}

function barrelClick() {
	showhide("visible", "hidden", "visible", "hidden", "hidden", "hidden", "hidden");
}

function bulletClick() {
	showhide("visible", "hidden", "hidden", "visible", "hidden", "hidden", "hidden");
}

function saveClick() {
	showhide("visible", "hidden", "hidden", "hidden", "visible", "hidden", "hidden");
}

function infoClick() {
	showhide("visible", "hidden", "hidden", "hidden", "hidden", "visible", "hidden");
}

function settingsClick() {
	showhide("visible", "hidden", "hidden", "hidden", "hidden", "hidden", "visible");
}

function showhide(e, bo, ba, bu, sa, inf, se) {
	var elements = document.getElementsByClassName("editbuttons");

	for (var i = 0; i < elements.length; i++) {
		elements[i].style.visibility = e;
	}

	elements = document.getElementsByClassName("tanksettings");

	for (var i = 0; i < elements.length; i++) {
		elements[i].style.visibility = bo;
	}

	elements = document.getElementsByClassName("barrelsettings");

	for (var i = 0; i < elements.length; i++) {
		elements[i].style.visibility = ba;
	}

	elements = document.getElementsByClassName("bulletsettings");

	for (var i = 0; i < elements.length; i++) {
		elements[i].style.visibility = bu;
	}

	elements = document.getElementsByClassName("savesettings");

	for (var i = 0; i < elements.length; i++) {
		elements[i].style.visibility = sa;
	}
	
	elements = document.getElementsByClassName("infosettings");

	for (var i = 0; i < elements.length; i++) {
		elements[i].style.visibility = inf;
	}
	
	elements = document.getElementsByClassName("settingssettings");

	for (var i = 0; i < elements.length; i++) {
		elements[i].style.visibility = se;
	}
}

function validateField(value, returnval, ignoreneg) {
	if (value.length == 0) {
		return returnval;
	}
	if ((value < 0) && (ignoreneg !== true)) {
		return returnval;
	}
	if (isNaN(value) === true) {
		return returnval;
	} else {
		return value;
	}
}

function printObject() {
}

function clearShapes() {
	shapes = [];
}

function clearBullets() {
	bullets = [];
}

function importObject() {
}

function graClick() {
    if (newGraph === true) {
        newGraph = false;
        document.getElementById("graphicButton").innerHTML = "Old";
    } else if (newGraph === false) {
        newGraph = true;
        document.getElementById("graphicButton").innerHTML = "New";
    }
}

function ColorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}

var bullets = [];
var bulletLib = [];

function Bullet (shape, speed, lifetime, angle) {
    this.shape = shape;
    //A shape object has an x, y and dimensions.
    this.speed = speed;
    this.lifetime = lifetime;
    this.angle = angle;
    this.barells = [];
}

var barells = [];

function Barell (shape, angle, bullet, reload) {
    this.shape = shape;
    //A shape object has an x, y and dimensions.
    this.angle = angle;
    this.bullet = bullet;
    //A bullet copies from this object when it is created.
    this.reload = reload;
}

function Circle (x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.type = "circle";
}

function Rectangle (x, y, width, length) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.length = length;
    this.type = "rectangle";
}
