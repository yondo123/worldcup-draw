export type Team = {
    name: string;
    code: string;
    resource: string;
    continent: string;
};

export type Teams = Array<Team>;

export type Continents = Array<{
    name: string;
    code: string;
    numberOfEntries: number;
}>;

type Priority = 'first' | 'second' | 'third' | 'fourth';

export type Pots = Array<{
    name: string;
    code: Priority;
}>;
