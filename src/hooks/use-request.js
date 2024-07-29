import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatusById } from "../redux/ui/request";

export function useRequest(thunk, ...args) {
  const [request, setRequest] = useState();

  const dispatch = useDispatch();

  const requestStatus = useSelector((state) =>
    selectRequestStatusById(state, request?.requestId)
  );

  useEffect(() => {
    setRequest(dispatch(thunk(...args)));

    return () => {
      request.abort();
      setRequest(null);
    };
  }, [...args, dispatch, thunk]);

  return requestStatus;
}
