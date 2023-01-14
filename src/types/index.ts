export interface Team {
    name: string;
    code: string;
    resource: string;
    continent: Continent;
}
export type Teams = Array<Team>;

export type Priority = 'first' | 'second' | 'third' | 'fourth';
export type Pot = {
    maxOfGroupTeams: number;
    code: Priority;
};
export type Pots = Array<Pot>;

export type Continent = 'uefa' | 'afc' | 'caf' | 'conmebol' | 'concacaf' | 'ofc';
export type Continents = Array<{
    name: string;
    code: Continent;
    numberOfEntries: number;
    maximum: number;
}>;

export type Group = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
