export interface CastMember {
  id: number;
  name: string;
  profile_path: string | null; 
  character: string;
  order: number;
  known_for_department?: string;
  original_name?: string;
  popularity?: number;
  birthday?: string;
  biography? : string;
  place_of_birth?: string;
  gender?:number;
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
  birthday?: string;
  biography? : string;
  place_of_birth?: string;
  gender?:number;
}
