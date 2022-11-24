import { render, screen, fireEvent, getByRole } from '@testing-library/react';
// import {shallow, mount} from 'enzyme';

import LoginCmp from './LoginCmp'

describe('LoginCmp', () => {
  const mockUser = {
    username: 'puki',
    password: '123456'
  }

  describe('submit btn', () => {
    test('should have disabled attribute when inputs are empty', () => {
      expect.assertions(2);
      // new:
      render(<LoginCmp />)
      const btnWrapper = screen.getByRole('button', { name: /Login/i })
      // const btnWrapper = screen.getByTestId('submit-btn')
      // old:
      // const wrapper = shallow(<LoginCmp />)

      // const btnWrapper = wrapper.find('.btn-submit')
      expect(btnWrapper.classList.contains('is-block')).toBe(true)
      expect(btnWrapper.hasAttribute("disabled")).toBe(true)
    })

    it('should have disabled attribute when password is empty', async () => {
      expect.assertions(2);

      const user = {
        username: 'puki',
        password: ''
      }

      // Passing props in order to set them in the input fields. 
      render(<LoginCmp username={user.username} password={user.password} />)
      const btnWrapper = screen.getByRole('button', { name: /Login/i })

      expect(btnWrapper.classList.contains('is-block')).toBe(true)
      expect(btnWrapper.hasAttribute("disabled")).toBe(true)
    })

    it('should have disabled attribute when username is empty', async () => {
      expect.assertions(2);
      const user = {
        username: '',
        password: '123456'
      }

      // Just for fun - now checking how to change the state without passing props.
      // Rendering it without props.
      render(<LoginCmp />)
      const passwordInput = screen.getByPlaceholderText(/Enter password/i)
      fireEvent.change(passwordInput, { target: { value: user.password } })
      const btnWrapper = screen.getByRole('button', { name: /Login/i })

      expect(btnWrapper.classList.contains('is-block')).toBe(true)
      expect(btnWrapper.hasAttribute("disabled")).toBe(true)
    })

    it('should not have disable attribute submit btn', () => {
      expect.assertions(2);
      const user = {
        username: 'Dani',
        password: '123456'
      }

      render(<LoginCmp />)
      const usernameInput = screen.getByPlaceholderText(/Enter username/i)
      const passwordInput = screen.getByPlaceholderText(/Enter password/i)
      fireEvent.change(usernameInput, { target: { value: user.username } })
      fireEvent.change(passwordInput, { target: { value: user.password } })
      const btnWrapper = screen.getByRole('button', { name: /Login/i })

      expect(btnWrapper.classList.contains('is-block')).toBe(false)
      expect(btnWrapper.hasAttribute("disabled")).toBe(false)
    })
  })

  it('should trigger submit event with the user details', async () => {
    expect.assertions(3);
    const onSubmitMock = jest.fn(val => val) // get a mock function
    render(<LoginCmp onSubmit={onSubmitMock} />)

    const usernameInput = screen.getByPlaceholderText(/Enter username/i)
    fireEvent.change(usernameInput, { target: { value: mockUser.username } })
    const passwordInput = screen.getByPlaceholderText(/Enter password/i)
    fireEvent.change(passwordInput, { target: { value: mockUser.password } })
    
    fireEvent.click(screen.getByRole('button', { name: /Login/i }))
    expect(onSubmitMock).toHaveBeenCalled()

    const resVal = onSubmitMock.mock.lastCall[0]
    // const resVal = onSubmitMock.mock.results[0].value
    expect(resVal.username).toBe(mockUser.username)
    expect(resVal.password).toBe(mockUser.password)
  })
})