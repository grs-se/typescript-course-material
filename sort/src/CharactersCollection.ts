import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
	constructor(public data: string) {
		super();
	}
	get length(): number {
		return this.data.length;
	}
	// Don't have to know anything about the sorting alogorithm, just have to compare 2 chars and swap 2 chars
	compare(leftIndex: number, rightIndex: number): boolean {
		return (
			this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
		);
	}
	swap(leftIndex: number, rightIndex: number): void {
		const characters = this.data.split('');

		const leftHand = characters[leftIndex];
		characters[leftIndex] = characters[rightIndex];
		characters[rightIndex] = leftHand;

		this.data = characters.join('');
	}
}
