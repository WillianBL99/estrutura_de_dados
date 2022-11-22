import rl from 'readline';
const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

main();

async function main() {
  const resp = await new Promise((resolve) => {
    readline.question(`What's your name?`, async (name) => {
      readline.close();
      resolve(name);
    });
  });

  console.log('hi ', resp);
}
