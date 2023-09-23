export const percentageApplied = (number, price) => {
	switch (true) {
		case number > 2:
			let multipl = number * price;
			let porcent = 10;
			let discount = (porcent / 100) * multipl;
			let total = multipl - discount;
			return total;
		case number > 4:
			let multipl1 = number * price;
			let porcent1 = 20;
			let discount1 = (porcent1 / 100) * multipl1;
			let total1 = multipl1 - discount1;
			return total1;
		case number > 7:
			let multipl2 = number * price;
			let porcent2 = 30;
			let discount2 = (porcent2 / 100) * multipl2;
			let total2 = multipl2 - discount2;
			return total2;
		case number > 9:
			let multipl3 = number * price;
			let porcent3 = 40;
			let discount3 = (porcent3 / 100) * multipl3;
			let total3 = multipl3 - discount3;
			return total3;
		case number > 15:
			let multipl4 = number * price;
			let porcent4 = 50;
			let discount4 = (porcent4 / 100) * multipl4;
			let total4 = multipl4 - discount4;
			return total4;
		default:
			return 0;
	}
};

