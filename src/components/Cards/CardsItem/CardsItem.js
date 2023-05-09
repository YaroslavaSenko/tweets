import { useDispatch } from "react-redux";
import { BgImage, LogoImage, CardUser, User, AvatarImage, Tweet, Follower, Button } from "./CardsItem.styled";
import { fetchFollow } from "../../../redux/operations";
import Vector from '../../img/Vector.png';
import picture2 from '../../img/picture2 1.png';
import Boy from '../../img/Boy.png';


const CardsItem = ({ user: {id, user, tweets, followers, avatar, follow}}) => {
    const dispatch = useDispatch();

    const handleFollow = () => {
        dispatch(fetchFollow(id));
    }
    return (
        <>  
            <BgImage src={picture2} alt="avatar" />
            <LogoImage src={Vector} alt="logo" />
            <CardUser />            
                <AvatarImage src={Boy} alt={`Avatar of ${user}`}/>
                <User>{user}</User>
            
             <Tweet>{`${tweets.toLocaleString("en-US")} tweets`}</Tweet>
            <Follower>{`${(followers + 100000).toLocaleString("en-US")} followers`}</Follower>
            <Button follow={follow} onClick={handleFollow}>{follow ? "Following" : "Follow"}</Button>
        </>
    )
}

export default CardsItem;