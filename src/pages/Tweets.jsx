import { useDispatch, useSelector,  } from "react-redux";

import { useEffect, useState } from "react";
import {  fetchUsers } from "../redux/operations";
import { selectError, selectIsLoading, selectUserFilter, } from "../redux/selectors";
import { LoadMore, Nav } from "./Tweets.styled";


import CardsList from "../components/Cards/CardsList/CardsList";
import Loader from "../components/Loader/Loader";
import Filter from "../components/Filter/Filter";


const Tweets = () => {
    const [visible, setVisible] = useState(3);
    const dispatch = useDispatch();
    const users = useSelector(selectUserFilter);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

  

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const showMoreUsers = () => {
        setVisible((prevValue) => prevValue + 3)
    }

    return (
        <>  
            <Nav>
                <Filter />
            </Nav>
            <CardsList users={users.slice(0, visible)}/>
            {isLoading && !error && <Loader/>}
            {visible < users.length && (
                <LoadMore onClick={showMoreUsers}>Load more</LoadMore>
            )}
        </>
    )
}
  export default Tweets;