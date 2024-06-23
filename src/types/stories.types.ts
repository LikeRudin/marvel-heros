interface Thumbnail {
  path: string;
  extension: string;
}

interface ComicItem {
  resourceURI: string;
  name: string;
}

interface SeriesItem {
  resourceURI: string;
  name: string;
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

interface Series {
  available: number;
  returned: number;
  collectionURI: string;
  items: SeriesItem[];
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

interface OriginalIssue {
  resourceURI: string;
  name: string;
}

export interface StoryResult {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type: string;
  modified: Date;
  thumbnail: Thumbnail;
  comics: Comics;
  series: Series;
  events: Events;
  characters: Characters;
  creators: Creators;
  originalissue: OriginalIssue;
}

export interface StoryData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: StoryResult[];
}

export interface StoryApiResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: StoryData;
  etag: string;
}
