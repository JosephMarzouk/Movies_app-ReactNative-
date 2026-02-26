import {
    ActorDetailsEndPoint,
    API_KEY,
    BASE_URL,
    MovieCreditsEndPoint,
    MovieDetailsEndPoint,
    MovieRecommendationsEndPoint,
    PopularMoviesEndPoints,
    RecommendedByActorEndPoint,
    SearchMoviesEndPoint,
    TopRatedMoviesEndPoints,
    TrendingMoviesEndPoints,
    UpCommingMoviesEndPoints
} from '@/constants/constants';
import axios from 'axios';



const apiCall = async (endpoint: string, param: string) => {
    const options = {
        method: 'GET',
        url: `${BASE_URL}${endpoint}`,
        params: {
            api_key: API_KEY,
            page: param
        }
    };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}


export const fetchTrendingMovies = () => {
    return apiCall(TrendingMoviesEndPoints, '1');
}

export const fetchUpCommingMovies = () => {
    return apiCall(UpCommingMoviesEndPoints, '2 ');
}
export const fetchTopRatedMovies = () => {
    return apiCall(TopRatedMoviesEndPoints, '1');

}
export const fetchPopularMovies = () => {
    return apiCall(PopularMoviesEndPoints, '1');
}

export const fetchMovieDetails = (id: number) => {
    return apiCall(MovieDetailsEndPoint(id), '1');
}
export const fetchMovieCredits = (id: number) => {
    return apiCall(MovieCreditsEndPoint(id), '1');
}

export const fetchActorDetails = (id: number) => {
    return apiCall(ActorDetailsEndPoint(id), '1');
}

export const fetchRecommendedMovies = (id: number) => {
    return apiCall(MovieRecommendationsEndPoint(id), '1');
}

export const fetchRecommendedByActor = (id: number) => {
    return apiCall(RecommendedByActorEndPoint(id), '1');
}

export const fetchSearchMovies = (query: string) => {
    return apiCall(SearchMoviesEndPoint(query), '1');
} 