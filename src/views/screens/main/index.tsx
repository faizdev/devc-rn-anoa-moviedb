import React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import { AppStyle } from '../../styles'
import { MainScreenNav } from './nav'
import { MainScreenProps } from './props'
import { MainHeader } from '../../components/main-header'

@AppStyle.withThemeClass()
export class MainScreen extends React.Component<MainScreenProps> {
  constructor(props: MainScreenProps) {
    super(props)
  }

  public render() {
    return (
      <View style={{ flex: 1, paddingTop: 30 }}>
        <MainHeader />
        <MainScreenNav />
      </View>
    )
  }
  
}
