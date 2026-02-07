import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/outline";
import { HeartIcon as HeartSolidIcon } from "react-native-heroicons/solid";

type RootStackParamList = {
  MovieDetails: { item: { id: number; title: string; poster_path: any; overview?: string } };
};

type MovieDetailsRouteProp = RouteProp<RootStackParamList, 'MovieDetails'>;

export default function MovieDetails() {
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
      <Image source={item.poster_path} style={styles.backgroundPoster} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}> <ChevronLeftIcon size={24} color="white" /></TouchableOpacity>
          <TouchableOpacity onPress={()=>{setIsLiked(!isLiked)}}>
            {isLiked ? (
              <HeartSolidIcon size={24} color="red" />
            ) : (
              <HeartIcon size={24} color="white" />
            )}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView style={styles.contentScroll}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.overview}>{item.overview || 'No overview available'}</Text>
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 400,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  safeArea: {
    position: 'relative',
    zIndex: 10,
  },
  contentScroll: {
    flex: 1,
    marginTop: 350,
    backgroundColor: '#000',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
  },
  contentContainer: {
    padding: 20,
  },
  backBtn: {
    backgroundColor: 'rgba(234, 179, 8, 0.8)',
    width: 33,
    height: 33,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
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