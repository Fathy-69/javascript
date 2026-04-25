let mot = prompt("Mot ?");
let len = mot.length;

if (len % 2 === 0) {
  alert(mot[len/2 - 1] + mot[len/2]);
} else {
  alert(mot[Math.floor(len/2)]);
}