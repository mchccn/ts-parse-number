const start = -10000;
const end = 10000;
const res = 0.01;

let out = `\
type ToNumber = {\
`;

for (let i = start; i < end; i += res) {
  out += `\n    [${i}]: ${i};`;
}

out += `\
}

type ParseNumber<S extends string> = ToNumber[S];
`;

console.log(out);
