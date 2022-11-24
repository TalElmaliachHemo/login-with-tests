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

    const onSubmitForm = async (ev) => {
        ev.preventDefault()
        try {
            console.log('user', user)
            await dispatch(doLogin(user))
            setUser({ username: '', password: '' })
        } catch(err) {
            console.error(err);
        }
    }

    // const errors = this.props.errors || {}
    // const isSubmitAllowed = userCred.username !== '' && userCred.password !== ''
    // const btnClasses = `btn btn-submit ${!isSubmitAllowed ? 'is-block' : ''}`

    return (
        <section className='login'>
            <h1 className='title'>Login</h1>
            <form className='form' onSubmit={onSubmitForm}>
                <input className='username-input' {...register('username', 'text')} placeholder="Username" />
                <input className='password-input' {...register('password', 'password')} placeholder="Password" />
                <button className='btn-login' onClick={onSubmitForm}>Login</button>
            </form>
        </section>
    )
}

