const args = process.argv.splice(2);

 for(const numbers of args) {

    if(numbers < 0 || (!(Number(numbers)))) {
        continue;
    }
    setTimeout(() => {
        process.stdout.write('\x07');
    }, numbers * 1000);

 }

