import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/navbar';
import * as S from './styled/styled';

const RootLayout = () => {
    return (
        <S.RootLayoutContainer>
            <Navbar />
            <S.MainContent>
                <Outlet />
            </S.MainContent>
        </S.RootLayoutContainer>
    );
};

export default RootLayout;