const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
};

type Drink = [string, boolean, number];

// Annotation of fixed order makes this a tuple rather than an array
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
