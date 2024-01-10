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

export interface ICountriesResponse {
  id: string;
  flags: {
    png: string;
  };
  name: Name;
  altSpellings: Array<string>;
  idd: IDD;
  cca2: string;
  cca3: string;
}
