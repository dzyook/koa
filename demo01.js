function takeLongTime() {
  return new Promise(resolve => {
    setTimeout(() => resolve("long_time_value"),1000)
  })
} 
async function test(){
  console.log('1')
  const v = await takeLongTime()
  console.log('2')
  console.log(v)
}
test()
// function getSomething () {
//   return 'something'
// }

// async function testAsync () {
//   return 'hello async'
// }

// async function test () {
//   const v1 = await getSomething()
//   const v2 = await testAsync()
//   console.log(v1,v2)
// }

// console.log(test())
// test()