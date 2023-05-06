const carMakers = ['ford', 'toyota', 'chevy'];
const cars: string[] = [];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camero']];

// Helpw ith ingerence when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompitble values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
	return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
