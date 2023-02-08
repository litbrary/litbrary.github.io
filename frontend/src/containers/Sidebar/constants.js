import {FiHome} from 'react-icons/fi';
import {BiBook, BiLogOut} from 'react-icons/bi';
import {BsFillPersonFill} from 'react-icons/bs';
export const SidebarContent = [
    {
      id: 'sidebar',
      title: 'Lit🔥Brary',
      menus: [
        {
          id: 1,
          picture: <FiHome size={42}/>,
          name: 'Home',
          link: '/',
        },
        {
          id: 2,
          picture: <BiBook size={42}/>,
          name: 'My Books',
          link: '/mybooks',
        },
        {
          id: 3,
          picture: <BsFillPersonFill size={42}/>,
          name: 'Profile',
          link: '/profile',
        },
      ],
      picture: <BiLogOut size={42}/>,
      logout: 'Log Out',
    },
  ];
  