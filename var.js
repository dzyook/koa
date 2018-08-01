var a = 5
function b(c) {
  a = ++c //全局 +var 局部
  //  console.log(a)
  //  a++
  //  console.log(a++)
  return a
}
console.log(b(a))
console.log(a)