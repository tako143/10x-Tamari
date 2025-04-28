const nodeList = [
    { name: 'node1', active: true },
    { name: 'node2', active: false },
    { name: 'node3', active: true },
];

function getActiveNodes(list) {
    return list.filter((obj) => obj.active);
}

const activeNodes = getActiveNodes(nodeList);
const displayString = activeNodes.map((name) => name.name).join(', ');

console.log(`Active nodes: ${displayString}`);