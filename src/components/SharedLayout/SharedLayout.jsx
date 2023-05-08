import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './SharedLayout.styled';
import { TbMovie } from 'react-icons/tb';
import { Loader } from '../Loader/Loader';
// import { SiThemoviedatabase } from 'react-icons/Si';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo to="/">
          <TbMovie size="36" />
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
