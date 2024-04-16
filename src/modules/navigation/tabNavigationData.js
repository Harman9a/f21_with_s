import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import CategotiesMain from '../../MainApp/Pages/CategotiesMain';
import AccountMain from '../../MainApp/Pages/AccountMain';
import NotificationMain from '../../MainApp/Pages/NotificationMain';
import Homepage_new from '../../MainApp/Pages/Homepage_new';
import CartMain from '../../MainApp/Pages/CartMain';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const tabNavigationData = [
  {
    name: 'Home',
    component: Homepage_new,
    icon: <AntDesign name="home" size={25} />,
  },
  {
    name: 'Categories',
    component: CategotiesMain,
    icon: <AntDesign name="appstore-o" size={25} />,
  },
  {
    name: 'Cart',
    component: CartMain,
    icon: <FontAwesome5 name="shopping-bag" size={25} />,
  },
  {
    name: 'Account',
    component: AccountMain,
    icon: <AntDesign name="user" size={25} />,
  },
  {
    name: 'Notifications',
    component: NotificationMain,
    icon: <Entypo name="notification" size={25} />,
  },
];

export default tabNavigationData;
