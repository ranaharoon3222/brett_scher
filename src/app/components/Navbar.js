import { createClient } from '@/prismicio';
import NavbarComponent from './NavBarComponent';

const Navbar = async () => {
  const client = createClient();

  const global = await client.getSingle('global');

  const { menu, logo } = global.data;

  return <NavbarComponent logo={logo} menu={menu} />;
};

export default Navbar;
