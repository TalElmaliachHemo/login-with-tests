import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { resetErrorMsg } from "../store/actions/user.action"

export const UserMsg = () => {
    const errorMsg = useSelector(state => state.userModule.errorMsg)
    const [msgClass, setMsgClass] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        toggleMsgClass()
    }, [errorMsg])

    const onCloseUserMsg = () => {
        dispatch(resetErrorMsg())
        setMsgClass('')
    }

    const toggleMsgClass = () => {
        if (!errorMsg) setMsgClass('')
        else setMsgClass('open')
    }

    return (
        <section className={`user-msg ${msgClass}`}>
            <button className="btn-close" onClick={onCloseUserMsg}>X</button>
            <span className="msg">{errorMsg}</span>
        </section>
    )
}