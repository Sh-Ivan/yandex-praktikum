const object = {
	value: '42',
	print() {
		const type = () => {
			return typeof this.value;
		};

		console.log(`${this.value} is ${type()}`);
	},
};

object.print(); // Поправить замыкание
object.value = 56;
object.print();
