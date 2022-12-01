import { createHello, Hello } from './hello'

describe('hello', () => {
  describe('Hello', () => {
    it('should say hello', () => {
      const hello = new Hello('World')
      expect(hello.sayHello()).toBe('Hello World')
    })
  })

  describe('createHello', () => {
    it('should return Hello Class', () => {
      expect(createHello("It's a me")).toBeInstanceOf(Hello)
    })
  })
})
