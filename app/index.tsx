import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Bars3BottomLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Loading from "../components/loading";
import MoviesList from "../components/movieslist";
import TrendingMovies from "../components/trendingmovies";
import { RootStackParamList } from "../navigation/appnavigations";

export default function HomeScreen(){
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [trendingMovies, setTrendingMovies] = useState([
        { id: 1, title: "Action Movie", poster_path: require("../assets/images/icon.png") },
        { id: 2, title: "Comedy Film", poster_path: require("../assets/images/icon.png") },
        { id: 3, title: "Drama Story", poster_path: require("../assets/images/icon.png") },
    ]);
    const [popularMovies, setPopularMovies] = useState([
        { id: 4, title: "Popular Film 1", poster_path: require("../assets/images/icon.png") },
        { id: 5, title: "Popular Film 2", poster_path: require("../assets/images/icon.png") },
        { id: 6, title: "Popular Film 3", poster_path: require("../assets/images/icon.png") },
        { id: 7, title: "Popular Film 4", poster_path: require("../assets/images/icon.png") },
        
        
    ]);

      const [loading, setLoading] = useState();
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
                
                <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}><MagnifyingGlassIcon color="white" size={24} /></TouchableOpacity>
                </View> 
                {
                    loading?(<Loading/>):
                    <ScrollView  contentContainerStyle={{paddingBottom: 10}}>
                        <TrendingMovies data={trendingMovies}/>
                        <MoviesList title="Popular Movies" data={popularMovies} />
                    </ScrollView>
                }
                
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
