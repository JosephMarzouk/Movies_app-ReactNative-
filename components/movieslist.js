import { useNavigation } from "@react-navigation/native";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function MoviesList({ title, data }) {
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate("MovieDetails", { item });
  };

  return (
    <View>
      <View style={styles.headerView}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {data?.map((item) => (
          <MovieCard
            key={item.id}
            item={item}
            handleClick={handleClick}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const MovieCard = ({ item, handleClick }) => {
  return (
    <View style={[styles.cardWrapper, { width: width * 0.33, height: height * 0.24 }]}>
      <TouchableOpacity onPress={() => handleClick(item)}>
        <Image source={item.poster_path} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8
  },
  seeAll: {
    color: '#eab308',
    fontSize: 14,
  },
    image: {
    width: width * 0.3,
    height: height * 0.2,
    borderRadius: 16,
  },

})
