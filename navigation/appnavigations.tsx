import ActorScreen from "@/screens/ActorScreen";
import HomeScreen from "@/screens/HomeScreen";
import MovieDetails from "@/screens/MovieDetails";
import SearchScreen from "@/screens/SearchScreen";
import { CastMember } from '@/types/cast';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';

export type RootStackParamList = {
  Home: undefined;
  MovieDetails: { movieId: number };
  ActorScreen: { actor: CastMember };
  SearchScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation(){
    return(
     <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name="MovieDetails" component={MovieDetails} options={{headerShown:false}} />
            <Stack.Screen name="ActorScreen" component={ActorScreen} options={{headerShown:false}} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown:false}} />
        </Stack.Navigator>
     </NavigationContainer>   
    )
}