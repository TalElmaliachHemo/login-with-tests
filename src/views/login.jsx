import React from 'react'
import { useDispatch } from 'react-redux'
import { useFormRegister } from '../hooks/useFormRegister'
import { doLogin } from '../store/actions/user.action'

export const Login = () => {
    const dispatch = useDispatch()
    const [register, setUser, user] = useFormRegister({
        username: '',
        password: ''
    })
    const isDisabled = (user.username && user.password) ? false : true

    const onSubmitForm = async (ev) => {
        ev.preventDefault()
        try {
            console.log('user', user)
            await dispatch(doLogin(user))
            setUser({ username: '', password: '' })
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <section className='login'>
            <h1 className='title'>Login</h1>
            <form className='form' onSubmit={onSubmitForm}>
                <input className='username-input' autoFocus required {...register('username', 'text')} placeholder="Username" />
                <input className='password-input' required {...register('password', 'password')} placeholder="Password" />
                <button className="btn-login" disabled={isDisabled} onClick={onSubmitForm}>Login</button>
            </form>
        </section>
    )
}

