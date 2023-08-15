let count;
function A() {
  ++count;
}
function B() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(++count);
    });
  });
}
function C() {
  console.log(++count);
}
//A()
//B().then(()=>C())
(async function result() {
  A();
  await B();
  C();
});
