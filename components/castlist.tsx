import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../navigation/appnavigations';
import { CastMember } from '../types/cast';

interface CastListProps {
  cast: CastMember[];
}

export default function CastList({ cast }: CastListProps){
    console.log('CastList rendered with cast:', cast);
    
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const handleClick = (item: CastMember) => {
        navigation.navigate('ActorScreen', { actor: item });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Top Cast</Text>
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal:16}}
            >
                {cast?.map((item,index)=>(  
                    CastIcon(item , handleClick , index)
                ))}
            </ScrollView>
        </View>
    )
}

const CastIcon = (CastData: CastMember, handleClick: (item: CastMember) => void, index: number) => {
    return (
        <View style={styles.castItem} key={index}>
            <TouchableOpacity onPress={() => { handleClick(CastData); }}>
                <Image source={CastData.profile_path} style={styles.castImage} />
                <Text style={styles.castName}>{CastData.name}</Text>
            </TouchableOpacity>
        </View>
    );
};
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