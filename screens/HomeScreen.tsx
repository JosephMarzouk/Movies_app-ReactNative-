import { fetchPopularMovies, fetchTrendingMovies, fetchUpCommingMovies } from "@/API/MoviesDB";
import MoviesList from "@/components/movieslist";
import TrendingMovies from "@/components/trendingmovies";
import { RootStackParamList } from "@/navigation/appnavigations";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import {
  Dimensions,
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
const { height } = Dimensions.get("window");
export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleMenuPress = () => {
    (navigation as any).openDrawer();
  };

  const handleClick = () => {
    navigation.navigate("SearchScreen");
  };
  useEffect(() => {
    getTrendingMovies();
    getUpCommingMovies();
    getPopularMovies();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies()
    if (data && data.results) {
      setTrendingMovies(data.results)
    } else {
      console.log('No results found in API response')
    }
    setLoading(false)
  }
   const getUpCommingMovies = async () => {
    const data = await fetchUpCommingMovies()
    console.log('UpComming movies data:', data)
    if (data && data.results) {
      setUpCommingMovies(data.results)
    } else {
      console.log('No results found in API response')
    }
    setLoading(false)
    
    
  }

   const getPopularMovies = async () => {
    const data = await fetchPopularMovies()
    console.log('Popular movies data:', data)
    if (data && data.results) {
      setPopularMovies(data.results)
    } else {
      console.log('No results found in API response')
    }
    setLoading(false)
  }
const [loading, setLoading] = useState(true)
const [trendingMovies, setTrendingMovies] = useState([]);  
const [PopularMovies, setPopularMovies] = useState([]);
const [UpCommingMovies, setUpCommingMovies] = useState([]);
    
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
          marginHorizontal: 5,
          paddingTop: 50,
        }}
      >
        <View style={styles.innerView}>
          <TouchableOpacity onPress={handleMenuPress}>
            <Bars3BottomLeftIcon size={30} color="white" strokeWidth={2} />
          </TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[styles.text, { color: "#eab308" }]}>M</Text>
            <Text style={styles.text}>ovies</Text>
          </View>

          <TouchableOpacity onPress={handleClick}>
            <MagnifyingGlassIcon color="white" size={24} />
          </TouchableOpacity>
        </View>
        <ScrollView style={{ alignContent: "center" }}>
          {trendingMovies.length > 0 && <TrendingMovies data={trendingMovies} />}
          <View style={{ height: height * 0.03 }} />
          <MoviesList title="Popular Movies" data={PopularMovies} />
          <View style={{ height: height * 0.03 }} />
          <MoviesList title="Up coming " data={UpCommingMovies} />
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
  text: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
});