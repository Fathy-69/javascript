function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function affMessage(instructions) {
  for (const instruction of instructions) {
    await wait(2000);
    instruction();
  }
}
affMessage([
  () => console.log("instruction 1"),
  () => console.log("instruction 2"),
  () => console.log("instruction 3"),
  () => console.log("instruction 4")
]);
await wait(10000);;
console.log("Fin du programme");