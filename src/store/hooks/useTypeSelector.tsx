import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../combine';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;