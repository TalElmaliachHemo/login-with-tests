import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UserMsg } from '../cmps/user-msg'
import { useFormRegister } from '../hooks/useFormRegister'
import { doLogin, resetErrorMsg } from '../store/actions/user.action'

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

    const onResetErrorMsg = () => {
        dispatch(resetErrorMsg())
    }

    return (
        <section className='login'>
            <h1 className='title'>Login</h1>
            <form className='form' onSubmit={onSubmitForm}>
                <input className='username-input' onFocus={onResetErrorMsg} autoFocus required {...register('username', 'text')} placeholder="Enter username" />
                <input className='password-input' onFocus={onResetErrorMsg} required {...register('password', 'password')} placeholder="Enter password" />
                <UserMsg />
                <button className="btn-login" disabled={isDisabled} onClick={onSubmitForm}>Login</button>
            </form>
        </section>
    )
}

