import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderAccount from '../../components/settings/HeaderAccount'
import Profil from '../../components/settings/Profil'
import AlaUne from '../../components/settings/AlaUne'
import PublicationConteneur from '../../components/settings/PublicationConteneur'

const Settings = () => {
  return <>
      <HeaderAccount/>
      <Profil />
      <AlaUne/>
      <PublicationConteneur/>
  </>
}

export default Settings

const styles = StyleSheet.create({})