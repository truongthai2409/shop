import { useDispatch, useSelector } from "react-redux";
import { AppDispatchAuth, RootStateAuth } from "../stores";

// export const useAppDispatch: () => AppDispatchAuth = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootStateAuth> = useSelector;

export const useAppDispatch = useDispatch.withTypes<AppDispatchAuth>()
export const useAppSelector = useSelector.withTypes<RootStateAuth>()