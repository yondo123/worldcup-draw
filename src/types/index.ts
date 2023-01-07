export type Team = {
    name: string;
    code: string;
    resource: string;
    continent: string;
};

export type Teams = Array<Team>;

export type Continents = Array<{
    name: string;
    code: Continent;
    numberOfEntries: number;
}>;

export type Priority = 'first' | 'second' | 'third' | 'fourth';

export type Continent = 'uefa' | 'afc' | 'caf' | 'conmebol' | 'concacaf' | 'ofc';

export type Pots = Array<{
    name: string;
    code: Priority;
}>;
