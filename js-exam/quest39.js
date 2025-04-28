const dataA = { sector: 'X', load: 70 };
const dataB = { uptime: '99%', status: 'online' };

const combinedData = Object.assign({}, dataA, dataB);
// console.log(combinedData);
const summaryText = `Sector ${combinedData.sector} - load ${combinedData.load}%, uptime ${combinedData.uptime}, status ${combinedData.status}`;
console.log(`Report: ${summaryText}`);