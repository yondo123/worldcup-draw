type Continents = Array<{
    name: string;
    code: string;
    numberOfEntries: number;
}>;

const continent = [
    {
        name: '유럽',
        code: 'uefa',
        numberOfEntries: 13
    },
    {
        name: '아시아',
        code: 'afc',
        numberOfEntries: 4
    },
    {
        name: '남아메리카',
        code: 'conmebol',
        numberOfEntries: 5
    },
    {
        name: '북아메리카',
        code: 'concacaf',
        numberOfEntries: 4
    },
    {
        name: '아프리카',
        code: 'caf',
        numberOfEntries: 5
    },
    {
        name: '오세아니아',
        code: 'ofc',
        numberOfEntries: 1
    }
];

export default continent;
