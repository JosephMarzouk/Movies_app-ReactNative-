import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import CastList from "../components/castlist";
import { RootStackParamList } from "../navigation/appnavigations";
import { CastMember, MovieCreditsResponse } from "../types/cast";
import { Movie } from "../types/movie";

import { fallbackImage, image500 } from "@/constants/constants";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon as HeartSolidIcon } from "react-native-heroicons/solid";
import { fetchMovieCredits, fetchMovieDetails, fetchSimilarMovies } from "../API/MoviesDB";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


export default function MovieDetails() {
  const route = useRoute<RouteProp<RootStackParamList, "MovieDetails">>();
  const movieId = route.params?.movieId;

  console.log("movieId from inside", movieId)

  useEffect(() => {
    if (movieId) {
      getMovieDetails();
      getMovieCredits();
      getSimilarMovies();
    }
  }, [movieId]);

  const getMovieDetails = async () => {
    const data = await fetchMovieDetails(movieId);
    setMovieDetails(data);
  };

  const getMovieCredits = async () => {
    const data: MovieCreditsResponse = await fetchMovieCredits(movieId);
    if (data && data.cast) {
      setCast(data.cast);
    }
  };

  const getSimilarMovies = async () => {
    const data = await fetchSimilarMovies(movieId);
  };
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);
  const [cast, setCast] = useState<CastMember[]>([]);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isLiked, setIsLiked] = useState(false);

  if (!route.params?.movieId) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Movie not found</Text>
      </View>
    );
  }

  const item = { id: route.params.movieId, title: `Movie ${route.params.movieId}`, poster_path: "/fallback", overview: "Sample movie overview..." };
  const tmdbImage = movieDetails?.poster_path ? image500(movieDetails.poster_path) : null;
 

  const imageSource = tmdbImage || fallbackImage;
    
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.backgroundPoster} />


      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.7)", "black"]}
        style={styles.gradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
            {isLiked ? (
              <HeartSolidIcon size={24} color="red" />
            ) : (
              <HeartSolidIcon size={24} color="white" />
            )}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{movieDetails?.title || item.title}</Text>

          <View style={styles.metaRow}>
            <Text style={styles.metaText}>{movieDetails?.release_date || 'item.release_date'}</Text>
            <Text style={styles.metaText}>{movieDetails?.runtime || 'item.runtime'} </Text>
           {/* <Text style={styles.metaText}>{movieDetails?.vote_average ||  'dasasd'}</Text> */}
          </View>


          <View style={styles.metaRow}>

            <Text style={styles.metaText}>{movieDetails?.genres?.map((genre: any) => genre.name).join(" · ") || 'item.genres'}</Text>
          </View>

          <Text style={styles.overview}>
            {movieDetails?.overview || item.overview || "No overview available"}
          </Text>

          


          <CastList cast={cast} />

        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  backgroundPoster: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: height * 0.65,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  gradient: {
    position: "absolute",
    width: "100%",
    height: height * 0.65,
  },

  safeArea: {
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 10,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: height * 0.07,
  },

  backBtn: {
    backgroundColor: "rgba(234,179,8,0.9)",
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  contentContainer: {
    marginTop: height * 0.45,
    paddingHorizontal: 20,
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  metaRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 6,
  },

  metaText: {
    color: "#ccc",
    fontSize: 14,
  },

  overview: {
    color: "white",
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 12,
    textAlign: "center",
  },

  errorText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
});
