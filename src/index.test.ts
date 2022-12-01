import { helloWorld } from './index'
import { mocked, Mocked } from 'jest-mock'
import { createHello, Hello } from './hello'

jest.mock('./hello')

let mockCreateHello: Mocked<(name: string) => Hello>
let mockHello: Mocked<Hello>

beforeEach(() => {
  mockCreateHello = mocked(createHello)
  mockHello = mocked(new Hello('World'))

  mockCreateHello.mockImplementation(() => mockHello)
  mockHello.sayHello.mockImplementation(() => 'Hello World Mocked')
})

describe('index', () => {
  it('should return hello world', () => {
    expect(helloWorld()).toBe('Hello World Mocked')
  })

  it('should call createHello', () => {
    helloWorld()
    expect(mockCreateHello).toBeCalledTimes(1)
    expect(mockCreateHello).toBeCalledWith("It's a me")
  })

  it('should call sayHello', () => {
    helloWorld()
    expect(mockHello.sayHello).toBeCalledTimes(1)
    expect(mockHello.sayHello).toBeCalledWith()
  })
})
