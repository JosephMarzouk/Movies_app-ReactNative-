import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";



export default function SearchScreen() {

    return (

        
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>SearchScreen</Text>
            <View style={styles.content}>
                
                <TextInput style={styles.input} placeholder="Search" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f2937',
        paddingTop: 40,
        alignItems: 'center',
        
    },
    content: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        
        padding: 10,
       
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
    input: {
        borderRadius: 30,
        width: '90%',
        height: 50,
        borderWidth: 2,
        borderColor: 'white',
      
        padding: 10,
        marginTop: 20,
    }
});