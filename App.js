import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Icon, Text } from "native-base";
import { Font , AppLoading} from 'expo';

import MainScreen from './components/MainScreen';


export default class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = { loading: true };
  }

  async componentWillMount() {
	await Font.loadAsync({
		Roboto: require("native-base/Fonts/Roboto.ttf"),
		Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
	});
	this.setState({ loading: false });
  }

  componentDidMount() {
  	console.log('hiding status bar');
  	StatusBar.setHidden(true);
  }

  render() {
  	if (this.state.loading == true) {
  		return (
  			<Text>loading...</Text>
  		);
  	} else {
  		return (
  			<AppNavigator />
  		);
  	}
  }
}

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
  },
},
  {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  }
)
