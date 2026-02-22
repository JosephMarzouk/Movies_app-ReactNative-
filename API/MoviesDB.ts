import {
    API_KEY, BASE_URL,
    MovieCreditsEndPoint,
    MovieDetailsEndPoint,
    PopularMoviesEndPoints,
    SimilarMoviesEndPoint,
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
export const fetchSimilarMovies = (id: number) => {
    return apiCall(SimilarMoviesEndPoint(id), '1');
}