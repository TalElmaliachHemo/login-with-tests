import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFormRegister } from '../hooks/useFormRegister'
import { doLogin } from '../store/actions/user.action'

export const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [register, setUser, user] = useFormRegister({
        username: '',
        password: ''
    })
    const isDisabled = (user.username && user.password) ? false : true

    const onSubmitForm = async (ev) => {
        ev.preventDefault()
        try {
            const loggedinUser = await dispatch(doLogin(user))
            setUser({ username: '', password: '' })
            if (loggedinUser) navigate('/user')
        } catch (err) {
            console.error("Error:", err);
        }
    }

    return (
        <section className='login'>
            <h1 className='title'>Login</h1>
            <form className='form' onSubmit={onSubmitForm}>
                <input className='username-input' autoFocus required {...register('username', 'text')} placeholder="Enter username" />
                <input className='password-input' required {...register('password', 'password')} placeholder="Enter password" />
                <button className="btn-login" disabled={isDisabled} onClick={onSubmitForm}>Login</button>
            </form>
        </section>
    )
}

