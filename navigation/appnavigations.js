import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ActorScreen from "../screens/ActorScreen.tsx";
import HomeScreen from "../screens/HomeScreen.tsx";
import MovieDetails from "../screens/MovieDetails.tsx";
const Stack = createNativeStackNavigator();

export default function AppNavigation(){
    return(
     <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name="MovieDetails" component={MovieDetails} options={{headerShown:false}} />
            <Stack.Screen name="ActorScreen" component={ActorScreen} options={{headerShown:false}} />
        </Stack.Navigator>
     </NavigationContainer>   
    )
}