import MoviesList from "@/components/movieslist";
import TrendingMovies from "@/components/trendingmovies";
import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";


export default function HomeScreen() {
    const [trendingMovies, setTrendingMovies] = useState([
        { id: 1, title: "Movie 1", poster_path: require("../assets/images/icon.png") },
        { id: 2, title: "Movie 2", poster_path: require("../assets/images/icon.png") },
    ]);
    const [Movieslist, setMovieslist] = useState([
        { id: 1, title: "Movie 1", poster_path: require("../assets/images/icon.png") },
        { id: 2, title: "Movie 2", poster_path: require("../assets/images/icon.png") },
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

                    <TouchableOpacity>
                        <MagnifyingGlassIcon color="white" size={24} />
                    </TouchableOpacity>
                </View>

                <TrendingMovies data={trendingMovies} />
                <MoviesList title="Popular Movies" data={Movieslist} />
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