import { createInterface } from 'readline';

const readLine = createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

const checkInputForDouble = (input: string) => {
  const charCountMap: Map<string, number> = new Map();
    for (let i = 0; i < input.length; i++) {
        if (charCountMap.has(input[i])) {
            charCountMap.set(input[i], charCountMap.get(input[i])! + 1);
        } else {
            charCountMap.set(input[i], 1);
        }
    }

    for (const count of charCountMap.values()) {
        if (count === 2) {
            return true;
        }
    }

    return false;
}
const main = () => {
	readLine.on('line', line => {
		if (checkInputForDouble(line)) {
			console.log(line);
		} 
		readLine.prompt();

		if (!line) {
			readLine.emit("end");
		}

	}).on('end', () => {
		console.log('Done.');

		process.exit();
	});
	
	readLine.prompt();
}

main();