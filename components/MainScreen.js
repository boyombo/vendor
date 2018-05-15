import React, { Component } from 'react'
import { TabNavigator, createStackNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";

import AirtimeTab from "./Tabs/AirtimeTab";
import BillsTab from "./Tabs/BillsTab";
import ProfileTab from "./Tabs/ProfileTab";
import BillDetail from "./BillDetail";
import ProfileEdit from "./ProfileEdit";


const BillStack = createStackNavigator({
  Bill: BillsTab,
  BillDetail: BillDetail
},
{
    headerMode: 'screen',
});

const ProfileStack = createStackNavigator({
  Profile: ProfileTab,
  EditProfile: ProfileEdit
},
{
  headerMode: 'screen'
});

  export default (MainScreen = TabNavigator(
    {
      Airtime: { screen: AirtimeTab },
      Bills: { screen: BillStack },
      Profile: { screen: ProfileStack }
    },
    {
      tabBarPosition: "bottom",
      tabBarComponent: props => {
        return (
          <Footer>
            <FooterTab>
              <Button
                vertical
                active={props.navigationState.index === 0}
                onPress={() => props.navigation.navigate("Airtime")}>
                <Icon name="refresh" />
                <Text>Airtime</Text>
              </Button>
              <Button
                vertical
                active={props.navigationState.index === 1}
                onPress={() => props.navigation.navigate("Bills")}>
                <Icon name="paper" />
                <Text>Bills</Text>
              </Button>
              <Button
                vertical
                active={props.navigationState.index === 2}
                onPress={() => props.navigation.navigate("Profile")}>
                <Icon name="person" />
                <Text>Profile</Text>
              </Button>
            </FooterTab>
          </Footer>
        );
      }
    }
  ));
  