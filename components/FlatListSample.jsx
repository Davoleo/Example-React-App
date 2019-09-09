import React, { Component } from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'

export default class FlatListSample extends Component {

    render() {
        return(
            <View style={styles.container}>
                <FlatList
                data={[
                    {key: 'Davoleo'},
                    {key: 'ItHurtsLikeHell'},
                    {key: 'Pierknight'},
                    {key: 'Matpac'},
                    {key: 'Gesudio'},
                    {key: 'uwu'},
                    {key: 'Sanzo'},
                    {key: 'FullMoon'},
                    {key: 'Kighto'},
                    {key: 'Gounemond'},]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}

//In SectionList you nest a data array inside of all the objects of the sections array

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
})
