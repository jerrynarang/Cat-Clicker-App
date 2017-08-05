// Knockout or ko handles the view to model and model to view synchronisation for us 

var initialCats = [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'img/434164568_fea0ad4013_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
        	nicknames: ['Cat', 'Catty', 'Cutti']
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/4154543904_6e2428c421_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
        	nicknames: ['fut', 'fatty', 'fudti']
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/22252709_010df3379e_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
        	nicknames: ['Mat', 'Matty', 'Maaki']
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/1413379559_412a540d29_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
        	nicknames: ['Shit', 'Shatty', 'Shitti']
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/9648464288_2516b35537_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
        	nicknames: ['Asc', 'Atty', 'tutti']
        }

]

var Cat = function(data) {
	// putting our model here
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);

	this.title = ko.computed(function(){
		var title;
		var clicks = this.clickCount();
		if (clicks < 10) {
			title = 'Newborn';
		} else if (clicks < 50) {
			title = 'Infant';
		} else if (clicks < 100) {
			title = 'Child'
		} else if (clicks < 200) {
			title = 'Teen';
		} else {
			title = 'Ninja';
		}
		return title;
	}, this);

}

var ViewModel = function () {
	// self refers to the ViewModel
	var self = this;

	this.catList = ko.observableArray([]);
	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable( this.catList()[0] );

	this.incrementCounter = function() {
		// clickCount+1 eg: 0 + 1 is getting stored inside this.clickCount 
		this.clickCount(this.clickCount() +1);
		// effectively we are saying -- count = 0 ; count ++;
		
	/*	if (this.clickCount() > 10 && this.clickCount() < 20) {
			this.level('Infant');
		}

		else if (this.clickCount() >= 20) {
			this.level('Teen');
		}*/
	};

	this.setCat = function(clickedCat) {
		// accessing the current cat. self is referring to the ViewModel and the ViewModel is where currentCat lives  
		self.currentCat(clickedCat);
	};
	};

/*	this.catLevel = function() {

		if (this.clickCount > 10) {
			this.level = ko.observable('Amateur');
		}
	};
} */

ko.applyBindings(new ViewModel())