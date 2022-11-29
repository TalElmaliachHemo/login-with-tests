import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"

export const UserMsg = () => {
    const errorMsg = useSelector(state => state.userModule.errorMsg)
    const [msgClass, setMsgClass] = useState('')

    useEffect(() => {
        toggleMsgClass()
    }, [errorMsg])

    const toggleMsgClass = () => {
        if (!errorMsg) setMsgClass('')
        else setMsgClass('open')
    }

    return (
        <section className={`user-msg ${msgClass}`}>
            <span className="msg">{errorMsg}</span>
        </section>
    )
}