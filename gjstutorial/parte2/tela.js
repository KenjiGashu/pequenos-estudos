const Gtk = imports.gi.Gtk;
// try{
//     const Gtk = imports.gi.Gtk;
// } catch(e){
//     print(e);
// }
const Lang = imports.lang;

const WelcomeToTheGrid = new Lang.Class({
    Name: 'welcome to the grid',

    //create the application itself
    _init: function(){
	this.application = new Gtk.Application();

	//connect 'activate' and 'startup' signals to the callback functions
	this.application.connect('activate', Lang.bind(this, this._onActivate));
	this.application.connect('startup', Lang.bind(this, this._onStartup));
    },

    // Callback function for 'activate' signal presents windows when active
    _onActivate: function () {
        this._window.present ();
    },

    // Callback function for 'startup' signal builds the UI
    _onStartup: function () {
        this._buildUI ();
    },

    // Build the application's UI
    _buildUI: function () {

        // Create the application window
        this._window = new Gtk.ApplicationWindow  ({
            application: this.application,
            title: "Welcome to the Grid",
	    border_width: 10,
            default_height: 200,
            default_width: 400,
            window_position: Gtk.WindowPosition.CENTER });


	// Create an image
	this._image = new Gtk.Image ({ file: "gnome-image.png" });
	
        // Create a second image using a stock icon
        this._icon = new Gtk.Image ({ stock: 'gtk-about' });

	// Create a label
	this._label = new Gtk.Label ({ label: "Welcome to GNOME, too!"});

	// Create the Grid
	this._grid = new Gtk.Grid ({ row_spacing: 20,
				     column_homogeneous: true});

	// Create a second label
        this._labelTwo = new Gtk.Label ({
            label: "The cake is a pie." });

	// Create a button
        this._button = new Gtk.Button ({
            label: "Welcome to GNOME, too!"});

        // Attach the images and button to the grid
        this._grid.attach (this._image,  0, 0, 2, 1);
        this._grid.attach (this._icon,   0, 1, 1, 1);
        this._grid.attach (this._button, 1, 1, 1, 1);
	
        // Attach the image and labels to the grid
        // this._grid.attach (this._image, 0, 0, 2, 1);
	// this._grid.attach (this._icon,  0, 1, 1, 1);
        // this._grid.attach (this._label, 1, 1, 1, 1);



	// Add the grid to the window
	this._window.add (this._grid);

	// Show the window and all child widgets
	this._window.show_all();
    }


});

// Run the application
let app = new WelcomeToTheGrid ();
app.application.run (ARGV);
