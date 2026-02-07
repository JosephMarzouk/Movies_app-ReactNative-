import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Bars3BottomLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import TrendingMovies from "../components/trendingmovies";

export default function HomeScreen(){
    const [trendingMovies, setTrendingMovies] = useState([
        { title: "Movie 1", },
        { title: "Movie 1", },
    ]);
    return(
        <View style={styles.View}>
            <SafeAreaView style={{flex: 1 , marginTop: 50, marginHorizontal: 10}}>
                <StatusBar style="light" />
                <View style={styles.innerView}>
                <Bars3BottomLeftIcon color="white" size={24} />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={[styles.Text , {color: '#eab308'}]}>M</Text>
                    <Text style={styles.Text}>ovies</Text>
                </View>
                
                <TouchableOpacity onPress={()=>{console.log("hello")}}><MagnifyingGlassIcon color="white" size={24} /></TouchableOpacity>
                </View> 
                <ScrollView  contentContainerStyle={{paddingBottom: 10}}>
                    <TrendingMovies data={trendingMovies}/>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor: '#1f2937',
    },
    innerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    Text: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
    },
})
