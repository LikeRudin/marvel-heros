interface URL {
  type: string;
  url: string;
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface ComicItem {
  resourceURI: string;
  name: string;
}

interface StoryItem {
  resourceURI: string;
  name: string;
  type: string;
}

interface EventItem {
  resourceURI: string;
  name: string;
}

interface CharacterItem {
  resourceURI: string;
  name: string;
  role: string;
}

interface CreatorItem {
  resourceURI: string;
  name: string;
  role: string;
}

interface Comics {
  available: number;
  returned: number;
  collectionURI: string;
  items: ComicItem[];
}

interface Stories {
  available: number;
  returned: number;
  collectionURI: string;
  items: StoryItem[];
}

interface Events {
  available: number;
  returned: number;
  collectionURI: string;
  items: EventItem[];
}

interface Characters {
  available: number;
  returned: number;
  collectionURI: string;
  items: CharacterItem[];
}

interface Creators {
  available: number;
  returned: number;
  collectionURI: string;
  items: CreatorItem[];
}

interface Navigation {
  resourceURI: string;
  name: string;
}

export interface SeriesResult {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: URL[];
  startYear: number;
  endYear: number;
  rating: string;
  modified: Date;
  thumbnail: Thumbnail;
  comics: Comics;
  stories: Stories;
  events: Events;
  characters: Characters;
  creators: Creators;
  next: Navigation;
  previous: Navigation;
}

export interface SeriesData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: SeriesResult[];
}

export interface SeriesApiResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: SeriesData;
  etag: string;
}
