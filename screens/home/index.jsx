import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Homes from '../../components/home/index'
import Header from '../../components/header'
import Post from '../post'

import Moussa from '../../assets/moussa.jpg'
import Mariam from '../../assets/Mariam.jpg'

const Home = () => {
    return <>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Header />
            <Post image={Moussa} name={"Moussa Timboliba"} title={" Have a good day ☺"}/>
            <Post image={Mariam} name={"Mariam Diallo"} title={" Memories ♣"}/>
        </ScrollView>
    </>
}

export default Home

const styles = StyleSheet.create({})