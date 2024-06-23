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

interface SeriesItem {
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

interface Series {
  available: number;
  returned: number;
  collectionURI: string;
  items: SeriesItem[];
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

export interface EventResult {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: URL[];
  modified: Date;
  start: Date;
  end: Date;
  thumbnail: Thumbnail;
  comics: Comics;
  stories: Stories;
  series: Series;
  characters: Characters;
  creators: Creators;
  next: Navigation;
  previous: Navigation;
}

export interface EventData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: EventResult[];
}

export interface EventApiResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: EventData;
  etag: string;
}
