export interface CastMember {
  id: number;
  name: string;
  profile_path: string | null; // TMDB returns string or null
  character: string;
  order: number;
  known_for_department?: string;
  original_name?: string;
  popularity?: number;
}

export interface MovieCreditsResponse {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
}

export interface CrewMember {
  id: number;
  name: string;
  profile_path: string | null;
  department: string;
  job: string;
  known_for_department?: string;
  original_name?: string;
  popularity?: number;
}
