class LeMondeWidget extends Widget {

	constructor(id, app) {
		super(id, LeMondeModel, LeMondeView, LeMondeController, app);
	}

	setUp() {
		super.setUp();
		this.header = true;
		this.footer = false;
		this.sizeX = 2;
		this.sizeY = 0.5;
		this.radius = 10;
	}

	async ready() {
		super.ready();

		this.controller.load();
	}

}

class LeMondeModel extends WidgetModel {

	constructor() {
		super();
	}

	setUp() {
		super.setUp();

	}

}

class LeMondeView extends WidgetView {

	constructor() {
		super();
	}

	setUp() {
		super.setUp();

	}

	draw() {
		super.draw();
		this.link = HH.create("a");
		SS.style(this.link, {"fontSize": "10px", "textDecoration": "none"});
		this.stage.appendChild(this.link);
	}

}

class LeMondeController extends WidgetController {

	constructor() {
		super();
	}

	setUp() {
		super.setUp();

	}

	async load() {
			new Crate({
				server: '562991605091532810',
				channel: '562991605091532812',
				shard: 'https://disweb.deploys.io'
			})
	}

}
