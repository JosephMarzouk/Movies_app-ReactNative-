import { fallbackImage, image500 } from "@/constants/constants";
import { RootStackParamList } from "@/navigation/appnavigations";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


export default function TrendingMovies({ data }: { data: any[] }) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleClick = (item: any) => {
console.log(item.id)
    navigation.navigate("MovieDetails", { movieId: item.id });
  };
  return (
    <View>
      <Text style={styles.text}>Trending Movies</Text>

      <Carousel
        width={width}
        height={height*0.4}
        data={data}
        loop
        mode="parallax"
        style={{
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          width: width,
          overflow: "visible",
        }}
        modeConfig={{
          parallaxScrollingOffset: 40,
          parallaxScrollingScale: 0.7,
          parallaxAdjacentItemScale: 0.95,

        }}
        renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
      />
    </View>
  );
}

const MovieCard = ({ item, handleClick }: { item: any, handleClick: (item: any) => void }) => {

  const tmdbImage = image500(item.poster_path);
 

  const imageSource = tmdbImage || fallbackImage;
  
  return (
    <View style={[styles.cardWrapper, { width:width*0.3, height:height*0.4 }]}>
      <TouchableOpacity onPress={() => handleClick(item)}>
        <Image 
          source={imageSource} 
          style={styles.image}
          onError={(error) => console.log('TrendingMovies Image load error:', error)}
          onLoad={() => console.log('TrendingMovies Image loaded successfully')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
  },

  cardWrapper: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
  },

  image: {
    width: width * 0.6,
    height: height * 0.4,
    borderRadius: 16,
  },

  title: {
    color: "white",
    marginTop: 10,
    textAlign: "center",
  },
});
