import MoviesList from "@/components/movieslist";
import TrendingMovies from "@/components/trendingmovies";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

export default function HomeScreen() {
  const [trendingMovies, setTrendingMovies] = useState([
    {
      id: 1,
      title: "Movie 1",
      poster_path: require("../assets/images/icon.png"),
    },
    {
      id: 2,
      title: "Movie 2",
      poster_path: require("../assets/images/icon.png"),
    },
    {
      id: 3,
      title: "Movie 2",
      poster_path: require("../assets/images/icon.png"),
    },
    {
      id: 4,
      title: "Movie 2",
      poster_path: require("../assets/images/icon.png"),
    },
  ]);
  const [Movieslist, setMovieslist] = useState([
    {
      id: 1,
      title: "Movie 1",
      poster_path: require("../assets/images/icon.png"),
    },
    {
      id: 2,
      title: "Movie 2",
      poster_path: require("../assets/images/icon.png"),
    },
    {
      id: 3,
      title: "Movie 2",
      poster_path: require("../assets/images/icon.png"),
    },
    {
      id: 4,
      title: "Movie 2",
      poster_path: require("../assets/images/icon.png"),
    },
  ]);
  return (
    <View style={styles.View}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1f2937"
        hidden={false}
        translucent={false}
      />

      <SafeAreaView
        style={{
          flex: 1,
          marginHorizontal: 10,
          paddingTop: 50,
        }}
      >
        <View style={styles.innerView}>
          <Bars3BottomLeftIcon size={30} color="white" strokeWidth={2} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[styles.Text, { color: "#eab308" }]}>M</Text>
            <Text style={styles.Text}>ovies</Text>
          </View>

          <TouchableOpacity>
            <MagnifyingGlassIcon color="white" size={24} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <TrendingMovies data={trendingMovies} />
          <MoviesList title="Upcomming" data={Movieslist} />
          <MoviesList title="Popular Movies" data={Movieslist} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: "#1f2937",
  },
  innerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Text: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
});
