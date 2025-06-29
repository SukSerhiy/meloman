export interface IAlbum {
  id: string;
  name: string;
  release_date?: string;
  href?: string;
  external_urls?: {
    spotify?: string;
  };
  images?: Image[];
  artists?: { id: string, name: string }[];
  album_type?: string;
  tracks?: {
    items: {
      name: string;
      preview_url: string | null;
      duration_ms: number;
    }[]
  }
}

export interface IArtist {
  id: string;
  name: string;
  href?: string;
  external_urls?: {
    spotify?: string;
  };
  genres?: string[];
  images?: Image[]
}

export interface ITrack {
  id: number;
}

export interface Image {
  width: number;
  height: number;
  url: string;
}
