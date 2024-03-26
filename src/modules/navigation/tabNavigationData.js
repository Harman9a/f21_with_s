import HomeScreen from '../home/HomeViewContainer';
import CalendarScreen from '../calendar/CalendarViewContainer';
import GridsScreen from '../grids/GridsViewContainer';
import PagesScreen from '../pages/PagesViewContainer';
import ComponentsScreen from '../components/ComponentsViewContainer';
import HomeMain from '../../MainApp/Pages/HomeMain';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import CategotiesMain from '../../MainApp/Pages/CategotiesMain';
import AccountMain from '../../MainApp/Pages/AccountMain';
import NotificationMain from '../../MainApp/Pages/NotificationMain';

// const iconHome = require('../../../assets/images/tabbar/home.png');
// const iconCalendar = require('../../../assets/images/tabbar/calendar.png');
// const iconGrids = require('../../../assets/images/tabbar/grids.png');
// const iconPages = require('../../../assets/images/tabbar/pages.png');
// const iconComponents = require('../../../assets/images/tabbar/components.png');

const tabNavigationData = [
  {
    name: 'Home',
    component: HomeMain,
    icon: <AntDesign name="home" size={25} />,
  },
  {
    name: 'Categories',
    component: CategotiesMain,
    icon: <AntDesign name="appstore-o" size={25} />,
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
  // {
  //   name: 'Notifications2',
  //   component: ComponentsScreen,
  //   icon: <Entypo name="notification" size={25} />,
  // },
  // {
  //   name: 'Calendar',
  //   component: CalendarScreen,
  //   icon: <Entypo name="notification" size={25} />,
  // },
  // {
  //   name: 'Grids',
  //   component: GridsScreen,
  //   icon: <Entypo name="notification" size={25} />,
  // },
  // {
  //   name: 'Pages',
  //   component: PagesScreen,
  //   icon: <Entypo name="notification" size={25} />,
  // },
  // {
  //   name: 'Components',
  //   component: ComponentsScreen,
  //   icon: <Entypo name="notification" size={25} />,
  // },
];

export default tabNavigationData;
