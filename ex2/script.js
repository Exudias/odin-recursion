function mergeSort(arr) {
  if (typeof arr !== "object") return "Incorrect input!";
  if (arr.length < 2) {
    return arr;
  }

  const size = arr.length;
  const midPoint = Math.floor(size / 2);

  let left = arr.slice(0, midPoint);
  let right = arr.slice(midPoint, size);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

function merge(l, r) {
  let out = [];

  while (l.length > 0 && r.length > 0) {
    let lFirst = l[0];
    let rFirst = r[0];

    if (lFirst > rFirst) {
      out.push(rFirst);
      r.shift();
    } else {
      out.push(lFirst);
      l.shift();
    }
  }

  if (l.length === 0 && r.length > 0) {
    out = [...out, ...r];
  }

  if (r.length === 0 && l.length > 0) {
    out = [...out, ...l];
  }

  return out;
}
