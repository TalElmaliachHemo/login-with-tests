import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Login } from './login';

describe('Login', () => {

    describe('submit btn', () => {
        test('should have disabled attribute when inputs are empty', () => {
            expect.assertions(1);
            render(<Provider store={store}><Login /></Provider>)
            const btnWrapper = screen.getByRole('button', { name: /Login/i })
            expect(btnWrapper.hasAttribute("disabled")).toBe(true)
        })

        it('should have disabled attribute when password is empty', async () => {
            expect.assertions(1);

            const user = {
                username: 'moshe',
                password: ''
            }

            render(<Provider store={store}><Login /></Provider>)
            const usernameInput = screen.getByPlaceholderText(/Enter username/i)
            const passwordInput = screen.getByPlaceholderText(/Enter password/i)

            fireEvent.change(usernameInput, { target: { value: user.username } })
            fireEvent.change(passwordInput, { target: { value: user.password } })

            const btnWrapper = screen.getByRole('button', { name: /Login/i })

            expect(btnWrapper.hasAttribute("disabled")).toBe(true)
        })

        it('should have disabled attribute when username is empty', async () => {
            expect.assertions(1);
            const user = {
                username: '',
                password: '123456'
            }

            render(<Provider store={store}><Login /></Provider>)
            const passwordInput = screen.getByPlaceholderText(/Enter password/i)
            fireEvent.change(passwordInput, { target: { value: user.password } })
            const btnWrapper = screen.getByRole('button', { name: /Login/i })

            expect(btnWrapper.hasAttribute("disabled")).toBe(true)
        })

        it('should not have disable attribute submit btn', () => {
            expect.assertions(1);
            const user = {
                username: 'Dani',
                password: '123456'
            }

            render(<Provider store={store}><Login /></Provider>)
            const usernameInput = screen.getByPlaceholderText(/Enter username/i)
            const passwordInput = screen.getByPlaceholderText(/Enter password/i)

            fireEvent.change(usernameInput, { target: { value: user.username } })
            fireEvent.change(passwordInput, { target: { value: user.password } })

            const btnWrapper = screen.getByRole('button', { name: /Login/i })

            expect(btnWrapper.hasAttribute("disabled")).toBe(false)
        })
    })
})