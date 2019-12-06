var a = {
  a: '1',
  b: () => {
    console.log(this.a) // {a: "1", b: ƒ}
  },
}

a.b()
Promise.resolve()

class A {
  constructor() {}

  aa() {
    console.log('I am a')
  }
}
