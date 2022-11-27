import { useSelector } from "react-redux"

export const User = () => {
    const user = useSelector(state => state.userModule.user)
    return (
        <section className="user">
            <h1>Welcome {user.name} !</h1>
            <img src={user.imgUrl} alt="user image" />
        </section>
    )
}