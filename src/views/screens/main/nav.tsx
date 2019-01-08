import { createDrawerNavigator } from 'react-navigation'
import { AboutScreen } from '../about'
import { CategoriesScreen } from '../categories'
import { DiscoverScreen } from '../discover'

export const MainScreenNav = createDrawerNavigator(
  {
    About: {
      screen: AboutScreen,
      navigationOptions: {
        title: 'About'
      }
    },
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        title: 'Categories'
      }
    },
    Discover: {
      screen: DiscoverScreen,
      navigationOptions: {
        title: 'Discover'
      }
    }
  },
  {
    initialRouteName: 'Discover'
  }
)
