type Priority = 'first' | 'second' | 'third' | 'fourth';

type Pots = Array<{
    name: string;
    code: Priority;
}>;

const pots: Pots = [
    {
        name: '1',
        code: 'first'
    },
    {
        name: '2',
        code: 'second'
    },
    {
        name: '3',
        code: 'third'
    },
    {
        name: '4',
        code: 'fourth'
    }
];
export default pots;
