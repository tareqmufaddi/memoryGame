function shuffle(array) {
  const _array = array.slice(0);
  for (var i = 0; i < _array.length - 1; i++) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var temp = _array[i];
    _array[i] = _array[randomIndex];
    _array[randomIndex] = temp;
  }
  return _array.slice(0, -1);
}

export default function bootDeck() {
  let id = 0;
  const cardSet = ["a", "b", "c", "d", "e", "f", "g", "h"].reduce(
    (acc, shape) => {
      acc.push({
        id: id++,
        shape
      });
      acc.push({
        id: id++,
        shape
      });
      return acc;
    },
    []
  );
  return shuffle(cardSet);
}
