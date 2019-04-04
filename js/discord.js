Widget

	setUp() {
		// pre init, set up local constants
	}

	ready() {
		// post init, get to work
	}

	/**
	* @async
	* @method: load: load data from widget server class
	* @param method: remote method name
	* @return http request result
	*/
	let result = await discWidget.load("test");

	/**
	* @async
	* @method: send: post data to widget server class
	* @param method: remote method name
	* @param {Object} data: key/value pairs to send
	* @return http request result
	*/
	let result = await discWidget.send("post", {foo: "bar", some: ["data"]});

	/**
	* @method: store: store data in localStorage
	* @param field: storage field
	* @param value: value
	*/
	discWidget.store("mesDonnees", "blah blah blah");

	/**
	* @method: restore: get data from localStorage
	* @param field: storage field
	* @return data or null
	*/
	let data = discWidget.restore("mesDonnees"); // "blah blah blah"

	/**
	* @method: has: check field exists in localStorage
	* @param field: storage field
	* @return true or false
	*/
	let exists = discWidget.has("mesDonnees"); // true || false

	/**
	* @method: destroy: remove field from localStorage
	* @param field: storage field
	*/
	discWidget.destroy("mesDonnees");
