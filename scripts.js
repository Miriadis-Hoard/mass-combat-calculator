// Huge thanks to my friends Vitor Freitas and Willian Molinari that helped me debug this code when it fought me!

let button = document.querySelector('[data-submit]');

button.onclick = function() {

  let tohit = parseInt(document.querySelector('[data-tohit]').value),
      dmg = parseInt(document.querySelector('[data-dmg]').value),
      ac = parseInt(document.querySelector('[data-ac]').value),
      hp = parseInt(document.querySelector('[data-hp]').value),
      result = document.querySelector('[data-result]'),
      total;

  if (tohit <= ac - 5) { total = 0; };
  if (tohit == ac - 4) { total = (dmg * 0.1) / hp; };
  if (tohit == ac - 3) { total = (dmg * 0.2) / hp; };
  if (tohit == ac - 2) { total = (dmg * 0.3) / hp; };
  if (tohit == ac - 1) { total = (dmg * 0.4) / hp; };
  if (tohit == ac) { total = (dmg * 0.5) / hp; };
  if (tohit == ac + 1) { total = (dmg * 0.6) / hp; };
  if (tohit == ac + 2) { total = (dmg * 0.7) / hp; };
  if (tohit == ac + 3) { total = (dmg * 0.8) / hp; };
  if (tohit == ac + 4) { total = (dmg * 0.9) / hp; };
  if (tohit >= ac + 5) { total = dmg / hp; };

  result.innerHTML = Math.floor(total);

}
