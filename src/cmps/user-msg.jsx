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

    const toggleMsgClass = () => {
        if (!errorMsg) setMsgClass('')
        else {
            setMsgClass('open')
            setTimeout(onResetErrorMsg, 3000)
        }
    }

    const onResetErrorMsg = () => {
        dispatch(resetErrorMsg())
    }

    return (
        <section className={`user-msg ${msgClass}`}>
            <span className="msg">{errorMsg}</span>
        </section>
    )
}