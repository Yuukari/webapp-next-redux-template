import { AppState, AppDispatch } from "./store";

import {
    useSelector as useSelectorBase,
    useDispatch as useDispatchBase
} from 'react-redux';

export const useSelector = <TSelected = unknown>(
    selector: (state: AppState) => TSelected
): TSelected => useSelectorBase<AppState, TSelected>(selector);

export const useDispatch = () => useDispatchBase<AppDispatch>();