class Vehicle {
	constructor(public color: string) {}

	//  Same as below
	// class Vehicle {
	//   color: string;

	//   constructor(color: string) {
	//     this.color = color;
	//   }

	protected honk(): void {
		console.log('honk');
	}
}

class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}
	private drive(): void {
		console.log('vroom');
	}

	startDrivingProcess(): void {
		this.drive();
		this.honk();
	}
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
// vehicle.drive();
// vehicle.honk();

const car1 = new Car(4, 'red');
car1.startDrivingProcess();
// // car1.drive();
// // car1.honk();
