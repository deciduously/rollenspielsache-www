export interface RollenspielsacheComponent {
    name: string;
    description: string;
    url?: string;
}

export const parts = [{
    name: 'librollenspielsache',
    description: 'Rust crate with C-compatible API with core types and logic',
    url: 'https://github.com/deciduously/librollenspielsache'
},
{
    name: 'librollenspielsache-rb',
    description: 'Ruby wrapper gem',
    url: 'https://github.com/deciduously/librollenspielsache-rb'
},
{
    name: 'rollenspielsache_svc',
    description: 'Backend web service',
    url: 'https://github.com/deciduously/rollenspielsache_svc'
},
{
    name: 'rollenspielsache-www',
    description: 'React frontend - this website!',
    url: 'https://github.com/deciduously/rollenspielsache-www'
},
{
    name: 'rollenspielsache-py',
    description: 'Python bindings (Planned)'
},
{
    name: 'rollenspielsache-bot',
    description: 'Discord bot (Planned)'
},
{
    name: 'rollenspielsache-ts',
    description: 'JS/TS bindings (Node) (Planned)'
},
{
    name: 'rollenspielsache-roll20',
    description: 'Roll20 integration (Planned)'
}
];