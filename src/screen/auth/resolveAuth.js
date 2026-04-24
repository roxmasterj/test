import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { autoLogin } from '@/src/redux/auth/actions';
import LogoScreen from '@/src/components/logo_screen';

const ResolveAuthScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(autoLogin());
        }, 2000);
    }, []);

    return <LogoScreen />;
};

export default ResolveAuthScreen;