import TrendingMovies from "@/components/trendingmovies";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

type RootStackParamList = {
  Home: undefined;
  MovieDetails: { movieId: number };
  ActorScreen: { actorId: number };
  SearchScreen: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;


export default function HomeScreen() {
    const navigation = useNavigation<HomeScreenNavigationProp>();     
    const [trendingMovies, setTrendingMovies] = useState([
        { id: 1, title: "Movie 1", poster_path: require("../assets/images/icon.png"),cast:[{name:"name",profile_path:require("../assets/images/icon.png")}] },
        { id: 2, title: "Movie 2", poster_path: require("../assets/images/icon.png"),cast:[{name:"name",profile_path:require("../assets/images/icon.png")}] },
    ]);
     const [movies, setMovies] = useState([
        { id: 1, title: "Movie 1", poster_path: require("../assets/images/icon.png"),cast:[{name:"name",profile_path:require("../assets/images/icon.png")}] },
        { id: 2, title: "Movie 2", poster_path: require("../assets/images/icon.png"),cast:[{name:"name",profile_path:require("../assets/images/icon.png")}] },
    ]);
  
        return (
        <View style={styles.View}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#1f2937"
            />

            <SafeAreaView
                style={{
                    flex: 1,
                    marginHorizontal: 10,
                    paddingTop: 50,
                }}
            >
                <View style={styles.innerView}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.Text, { color: '#eab308' }]}>M</Text>
                        <Text style={styles.Text}>ovies</Text>
                    </View>

                    <TouchableOpacity onPress={()=>{navigation.navigate('SearchScreen')}}>
                        <MagnifyingGlassIcon color="white" size={24} />
                    </TouchableOpacity>
                </View>

                <TrendingMovies data={trendingMovies} />
                
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