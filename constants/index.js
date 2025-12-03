const navLinks = [
	{
		id: "cocktails",
		title: "Cocktails",
	},
	{
		id: "about",
		title: "About Us",
	},
	{
		id: "work",
		title: "The Art",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const cocktailLists = [
	{
		name: "Midnight Manhattan",
		country: "US",
		detail: "Bourbon & Vermouth",
		price: "$16",
	},
	{
		name: "Golden Margarita",
		country: "MX",
		detail: "Premium Tequila",
		price: "$14",
	},
	{
		name: "Velvet Espresso Martini",
		country: "IT",
		detail: "Vodka & Coffee",
		price: "$18",
	},
	{
		name: "Smoky Old Fashioned",
		country: "US",
		detail: "Whiskey & Bitters",
		price: "$17",
	},
];

const mockTailLists = [
	{
		name: "Tropical Sunset",
		country: "US",
		detail: "Passion Fruit Mix",
		price: "$12",
	},
	{
		name: "Berry Bliss",
		country: "US",
		detail: "Mixed Berries",
		price: "$11",
	},
	{
		name: "Cucumber Mint Cooler",
		country: "UK",
		detail: "Fresh Herbs",
		price: "$10",
	},
	{
		name: "Citrus Sparkle",
		country: "FR",
		detail: "Lemon & Lime",
		price: "$13",
	},
];


const profileLists = [
	{
		imgPath: "/images/profile1.png",
	},
	{
		imgPath: "/images/profile2.png",
	},
	{
		imgPath: "/images/profile3.png",
	},
	{
		imgPath: "/images/profile4.png",
	},
];

const featureLists = [
	"Perfectly balanced blends",
	"Garnished to perfection",
	"Ice-cold every time",
	"Expertly shaken & stirred",
];

const goodLists = [
	"Handpicked ingredients",
	"Signature techniques",
	"Bartending artistry in action",
	"Freshly muddled flavors",
];

const storeInfo = {
	heading: "Where to Find Us",
	address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
	contact: {
		phone: "(555) 987-6543",
		email: "hello@jsmcocktail.com",
	},
};

const openingHours = [
	{ day: "Mon–Thu", time: "11:00am – 12am" },
	{ day: "Fri", time: "11:00am – 2am" },
	{ day: "Sat", time: "9:00am – 2am" },
	{ day: "Sun", time: "9:00am – 1am" },
];

const socials = [
	{
		name: "Instagram",
		icon: "/images/insta.png",
		url: "#",
	},
	{
		name: "X (Twitter)",
		icon: "/images/x.png",
		url: "#",
	},
	{
		name: "Facebook",
		icon: "/images/fb.png",
		url: "#",
	},
];

const allCocktails = [
	{
		id: 1,
		name: "Classic Mojito",
		image: "/images/drink1.png",
		title: "Simple Ingredients, Bold Flavor",
		description:
			"Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
	},
	{
		id: 2,
		name: "Raspberry Mojito",
		image: "/images/drink2.png",
		title: "A Zesty Classic That Never Fails",
		description:
			"The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
	},
	{
		id: 3,
		name: "Violet Breeze",
		image: "/images/drink3.png",
		title: "Simple Ingredients, Bold Flavor",
		description:
			"Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
	},
	{
		id: 4,
		name: "Curacao Mojito",
		image: "/images/drink4.png",
		title: "Crafted With Care, Poured With Love",
		description:
			"Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
	},
];

export {
	navLinks,
	cocktailLists,
	mockTailLists,
	profileLists,
	featureLists,
	goodLists,
	openingHours,
	storeInfo,
	socials,
	allCocktails,
};
