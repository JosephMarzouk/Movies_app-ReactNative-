import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon as HeartSolidIcon } from "react-native-heroicons/solid";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default function ActorScreen() {
    const [isLiked, setIsLiked] = useState(false);
    const navigation = useNavigation();
    return (

        <View style={styles.container}>

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
                <Text style={styles.actorName}>Actor Name</Text>
                <Text style={styles.location}>Location </Text>
                <View style={styles.dataRow}>
                    <View style={{borderRightWidth:2,borderRightColor:"white" , padding:10 , justifyContent:'center'}}>
                        <Text style={styles.rowTitle}>Gender</Text>
                        <Text style={styles.rowDescription}> Male</Text>
                        
                    </View>
                     <View style={{borderRightWidth:2,borderRightColor:"white" , padding:10 , justifyContent:'center'}}>
                        <Text style={styles.rowTitle}>Gender</Text>
                        <Text style={styles.rowDescription}> Male</Text>
                        
                    </View>
                     <View style={{borderRightColor:"white" , padding:10 , justifyContent:'center'}}>
                        <Text style={styles.rowTitle}>Gender</Text>
                        <Text style={styles.rowDescription}> Male</Text>
                        
                    </View>
                  </View>
            </View>
        </View>
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
    actorName:{
        color:"white",
        fontSize:24,
        fontWeight:"bold",
       
    },
    location:{
        color:"#6c6e6c" ,
        fontSize:16,
        fontWeight:"bold",
    },
    glowWrapper: {
        padding: 5,
        borderRadius: 100,


        shadowColor: "#ffffff",
        shadowOpacity: 0.5,
        shadowRadius: 60,
        elevation: 80,
    },
    dataRow:{
        flexDirection:"row",
        backgroundColor:"rgba(108, 110, 108, 0.47)",
        alignItems:"center",
        padding:17,
        justifyContent:'space-between',
        borderRadius:30,
        marginTop:20,
    },
    rowTitle:{
        color:"white",
        fontSize:16,
        fontWeight:"bold",
        paddingVertical:5,
    },
    rowDescription : {
        color:"white",
        fontSize:14,
        fontWeight:"bold",
       
    }

})