import MoviesList from "@/components/movieslist";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon as HeartSolidIcon } from "react-native-heroicons/solid";
import { RootStackParamList } from "../navigation/appnavigations";
import { CastMember } from "../types/cast";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

type ActorScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ActorScreen'>;
type ActorScreenRouteProp = RouteProp<RootStackParamList, 'ActorScreen'>;

export default function ActorScreen() {
    const route = useRoute<ActorScreenRouteProp>();
    const navigation = useNavigation<ActorScreenNavigationProp>();
    const actor = route.params.actor as CastMember;

    const [isLiked, setIsLiked] = useState(false);
    const [movies, setMovies] = useState([{ id: 1, title: "Actor's Movie 1", poster_path: require("../assets/images/icon.png") },
    { id: 2, title: "Actor's Movie 2", poster_path: require("../assets/images/icon.png") },
    { id: 3, title: "Actor's Movie 3", poster_path: require("../assets/images/icon.png") },
    ]);
    return (

        <ScrollView style={styles.container}>

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
            <View style={styles.body}>
                <View style={styles.glowWrapper}>
                    <Image source={require("../assets/images/icon.png")} style={styles.image} />
                </View>
                <Text style={styles.actorName}>{actor.name}</Text>
                <Text style={styles.location}>Location </Text>
                <View style={styles.dataRow}>
                    <View style={{ borderRightWidth: 2, borderRightColor: "white", padding: 10, justifyContent: 'center' }}>
                        <Text style={styles.rowTitle}>Gender</Text>
                        <Text style={styles.rowDescription}> Male</Text>

                    </View>
                    <View style={{ borderRightWidth: 2, borderRightColor: "white", padding: 10, justifyContent: 'center' }}>
                        <Text style={styles.rowTitle}>Birthdate </Text>
                        <Text style={styles.rowDescription}> 14-2-2026  </Text>

                    </View>
                    <View style={{ borderRightColor: "white", padding: 10, justifyContent: 'center' }}>
                        <Text style={styles.rowTitle}>Gender</Text>
                        <Text style={styles.rowDescription}> Male</Text>

                    </View>
                </View>
                <Text style={styles.biographyTitle}>Biography</Text>
                <Text style={styles.biographyDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</Text>
                
            </View>
            <View style={{paddingHorizontal:10 , paddingVertical:30}}>
            <MoviesList title="Other Movies" data={movies} hasSeeAll={false} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
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
    body: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: height * 0.23,

    },
    imageContainer: {
        alignItems: "center",
        justifyContent: "center",
        elevation: 20,
        backgroundColor: "white",
        borderRadius: 120,
    },
    image: {
        width: width * 0.65,
        height: height * 0.31,
        borderRadius: 100,
        borderColor: "grey",
        borderWidth: 2,
    },
    actorName: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",

    },
    location: {
        color: "#6c6e6c",
        fontSize: 16,
        fontWeight: "bold",
    },
    glowWrapper: {
        padding: 10,
        borderRadius: 100,


        shadowColor: "#ffffff",
        shadowOpacity: 0.5,
        shadowRadius: 60,
        elevation: 5,
    },
    dataRow: {
        flexDirection: "row",
        backgroundColor: "rgba(108, 110, 108, 0.47)",
        alignItems: "center",
        padding: 17,
        justifyContent: 'space-between',
        borderRadius: 30,
        marginTop: 20,
    },
    rowTitle: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        paddingVertical: 5,
    },
    rowDescription: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",

    },
    biographyTitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
    },
    biographyDescription: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 20,
        paddingHorizontal: 25,
    }

})