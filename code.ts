function sayHello(name: string) {
  console.log('Hello ' + name);
}

function add(a: number, b: number): number {
  const c = a + b;
  return c;
}

async function main() {
  const user = 'Brandon';
  sayHello(user);
  const result = add(5, 10);
  console.log('result:', result);
  if (result > 10) {
    console.log('big number');
  } else {
    console.log('small');
  }
}

main();
