#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;
const Lang = imports.Lang;

var cookies = 0;
const gettingSignal = new Lang.Class({
    Name: 'getingsignal',

    _init: function(){
	this.application = new Gtk.Application();

	this.application.connect('activate', Lang.binds(this, this._onActivate));
	this.application.connect('startup', Lang.binds(this, this._onStartup));
    },

    _onActivate: function(){
	this._windows.present();
    },

    _onStartup: function(){
	this._buildUI();
    },

    _buildUI: function() {
	this._window = new Gtk.ApplicationWindow({
	    application: this.application,
	    window_position: Gtk.WindowPosition.Center,
	    default_height: 200,
	    default_width: 400,
	    title: 'oi, pe'});
	// Create the label
        this._cookieLabel = new Gtk.Label ({
            label: "Number of cookies: " + cookies });
	// Create the cookie button
        this._cookieButton = new Gtk.Button ({ label: "Get a cookie" });
	// Connect the cookie button to the function that handles clicking it
        this._cookieButton.connect ('clicked', Lang.bind (this, this._getACookie));

	//cookie dispenser
	this._cookieDispenserLabel = new Gtk.Label({label: 'Cookie dispenser'})

	this._cookieSwitch = new Gtk.Switch();

	// Connect the switch to the function that handles it
        this._cookieSwitch.connect ('notify::active', Lang.bind (this, this._cookieDispenser));

	// Create a grid for the switch and its label
        this._switchGrid = new Gtk.Grid ({
            halign: Gtk.Align.CENTER,
            valign: Gtk.Align.CENTER });

        // Put the switch and its label inside that grid
        this._switchGrid.attach (this._switchLabel, 0, 0, 1, 1);
        this._switchGrid.attach (this._cookieSwitch, 1, 0, 1, 1);
	
	// Create a grid to arrange everything inside
        this._grid = new Gtk.Grid ({
            halign: Gtk.Align.CENTER,
            valign: Gtk.Align.CENTER,
            row_spacing: 20 });

        // Put everything inside the grid
        this._grid.attach (this._cookieButton, 0, 0, 1, 1);
        this._grid.attach (this._switchGrid, 0, 1, 1, 1);
        this._grid.attach (this._cookieLabel, 0, 2, 1, 1);

        // Add the grid to the window
        this._window.add (this._grid);

        // Show the window and all child widgets
        this._window.show_all();
    },

    _getACookie: function() {

        // Is the cookie dispenser turned on?
        if (this._cookieSwitch.get_active()) {

            // Increase the number of cookies by 1 and update the label
            cookies++;
            this._cookieLabel.set_label ("Number of cookies: " + cookies);

        }

    }
    
});
