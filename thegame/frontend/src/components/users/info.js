import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions/users";

const Info = () => {
  const count = useSelector(state => state.users.users);
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(getUsers())
  }, [])

  return <div>User Information</div>;
};

export default Info;
