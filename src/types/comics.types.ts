interface URL {
  type: string;
  url: string;
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface Series {
  resourceURI: string;
  name: string;
}

export interface Variant {
  resourceURI: string;
  name: string;
}

export interface Collection {
  resourceURI: string;
  name: string;
}

export interface CollectedIssue {
  resourceURI: string;
  name: string;
}

export interface TextObject {
  type: string;
  language: string;
  text: string;
}

export interface DateObject {
  type: string;
  date: Date;
}

export interface Price {
  type: string;
  price: number;
}

export interface Image {
  path: string;
  extension: string;
}

export interface CreatorItem {
  resourceURI: string;
  name: string;
  role: string;
}

interface CharacterItem {
  resourceURI: string;
  name: string;
  role: string;
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

interface Creators {
  available: number;
  returned: number;
  collectionURI: string;
  items: CreatorItem[];
}

export interface Characters {
  available: number;
  returned: number;
  collectionURI: string;
  items: CharacterItem[];
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

export interface ComicResult {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: URL[];
  series: Series;
  variants: Variant[];
  collections: Collection[];
  collectedIssues: CollectedIssue[];
  dates: DateObject[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Image[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Events;
}

interface ComicData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ComicResult[];
}

export interface ComicApiResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: ComicData;
  etag: string;
}
