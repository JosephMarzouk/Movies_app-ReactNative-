import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
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

import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/outline";
import { HeartIcon as HeartSolidIcon } from "react-native-heroicons/solid";

type RootStackParamList = {
  MovieDetails: {
    item: {
      id: number;
      title: string;
      poster_path: any;
      overview?: string;

    };
  };
};

type MovieDetailsRouteProp = RouteProp<RootStackParamList, "MovieDetails">;

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function MovieDetails() {
  const [cast, setCast] = useState([{ name: "name", profile_path: require("../assets/images/icon.png") }, { name: "name", profile_path: require("../assets/images/icon.png") }, { name: "name", profile_path: require("../assets/images/icon.png") }, { name: "name", profile_path: require("../assets/images/icon.png") }]);
  const navigation = useNavigation();
  const route = useRoute<MovieDetailsRouteProp>();
  const [isLiked, setIsLiked] = useState(false);

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
      {/* Poster Background */}
      <Image source={item.poster_path} style={styles.backgroundPoster} />

      {/* Fade Gradient */}
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.7)", "black"]}
        style={styles.gradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />

      {/* Header */}
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
            {isLiked ? (
              <HeartSolidIcon size={24} color="red" />
            ) : (
              <HeartIcon size={24} color="white" />
            )}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
<ScrollView>
      {/* Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>

        <View style={styles.metaRow}>
          <Text style={styles.metaText}>Release Date:</Text>
          <Text style={styles.metaText}> 2017 </Text>
          <Text style={styles.metaText}>· 3hr 20min</Text>
        </View>


        <View style={styles.metaRow}>

          <Text style={styles.metaText}>Action · Comedy · Adventure</Text>
        </View>

        <Text style={styles.overview}>
          {item.overview || "No overview availableNo overview availableNo overview availableNo overview availableNo overview availableNo overview availableNo overview availableNo overview availableNo overview availableNo overview availableNo overview availableNo overview availableNo overview availableNo overview availableNo overview availableNo overview availableNo overview availableNo overview availableNo overview availableNo overview availableNo overview availableNo overview availableNo overview availableNo overview availableNo overview available"}
        </Text>

        {/* Cast List */}


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
    marginTop: 5,
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
