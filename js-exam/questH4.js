// const registry = [
//     { name: 'A', status: 'old' },
//     { name: 'B', status: 'old' },
// ];
// const upgraded = registry.map((obj) => obj.status = 'upgraded');
// const manu = Object.assign(upgraded, registry);
// const namesList = manu.map(elem => elem.name).join(', ');
// console.log(namesList);

//შესწორებული
const registry = [
    { name: 'A', status: 'old' },
    { name: 'B', status: 'old' },
];

const upgraded = registry.map(node => Object.assign({}, node, { status: 'upgraded' }));
const namesList = upgraded.map(elem => elem.name).join(', ');

console.log(`Updated nodes: ${namesList}`);
