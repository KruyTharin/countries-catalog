interface ICountryName {
  common: string;
  official: string;
}

interface INativeName {
  nativeName: {
    eng: ICountryName;
  };
}

type Name = ICountryName & INativeName;

interface IDD {
  root: any;
  suffixes: Array<string>;
}

interface Flag {
  png: string;
  alt: string;
}

export interface ICountriesResponse {
  id: string;
  flags: Partial<Flag>;
  capital?: string;
  region?: Array<string>;
  name: Name;
  altSpellings: Array<string>;
  idd: IDD;
  cca2: string;
  cca3: string;
}
