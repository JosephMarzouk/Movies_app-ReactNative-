import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';


export default function CastList ({cast}){
    console.log('CastList rendered with cast:', cast);
    let char ="xx";
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Top Cast</Text>
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal:16}}
            >
                {cast?.map((item,index)=>(
                    <View style={styles.castItem} key={index}>
                        <Image source={item.profile_path} style={styles.castImage} />
                        <Text style={styles.castName}>{item.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        backgroundColor: 'rgba(0,0,0,0.8)',
        paddingBottom: 20,
        width: '100%'
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 16,
        marginBottom: 8
    },
    castItem: {
        alignItems: 'center',
        marginRight: 16,
        minWidth: 80
    },
    castImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 4,
        backgroundColor: '#333'
    },
    castName: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
        width: 80
    }
});