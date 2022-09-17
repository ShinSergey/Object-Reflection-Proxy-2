export default function orderByProps(obj, order) {
  const arrOrder = [];
  const arrAlph = [];
  for (const key in obj) {
    if (order.includes(key)) {
      arrOrder.splice(order.indexOf(key), 0, { key, value: obj[key] });
    } else {
      arrAlph.push({ key, value: obj[key] });
    }
  }
  arrAlph.sort((a, b) => {
    if (a.key < b.key) { return -1; }
    if (a.key > b.key) { return 1; }
    return 0;
  });
  return arrOrder.concat(arrAlph);
}
