import { Dimensions, View } from "react-native";
import * as Progress from 'react-native-progress';


const {width, height} = Dimensions.get("window");   
export default function Loading() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Progress.CircleSnail thickness={14}  size={140} color={['red', 'green', 'blue']} strokeCap="round"/>
        </View>
    );
}