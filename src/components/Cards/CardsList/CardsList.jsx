import CardsItem from "../CardsItem/CardsItem";

import {UserList, UserCard} from "./CardsList.styled"
const CardsList = ({users}) => {
    return (
        <>
            <UserList>
            {users.map((user) => (
                <UserCard key={user.id}>
                    <CardsItem user={user} />
                </UserCard>
            ))}
            </UserList>
        </>
    )
}

export default CardsList;