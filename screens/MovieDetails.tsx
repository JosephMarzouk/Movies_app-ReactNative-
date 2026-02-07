import { RouteProp, useRoute } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";

type RootStackParamList = {
  MovieDetails: { item: { id: number; title: string; poster_path: any; overview?: string } };
};

type MovieDetailsRouteProp = RouteProp<RootStackParamList, 'MovieDetails'>;

export default function MovieDetails() {
  const route = useRoute<MovieDetailsRouteProp>();
  
  if (!route.params?.item) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Movie not found</Text>
      </View>
    );
  }

  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={item.poster_path} style={styles.poster} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.overview}>{item.overview || 'No overview available'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  poster: {
    width: "100%",
    height: 300,
    borderRadius: 16,
    marginBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  overview: {
    color: "white",
    fontSize: 16,
    lineHeight: 24,
  },
  errorText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
});