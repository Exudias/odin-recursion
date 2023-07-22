function fibs(n) {
    let out = [0, 1];
    if (n <= 0 || typeof n !== "number") return "Invalid input!"; 
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    for (let i = 2; i < n; i++) {
        out.push(out[i - 1] + out[i - 2]);
    }

    return out;
}

console.log(fibs(8));