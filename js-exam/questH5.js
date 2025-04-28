// const nodes1 = ['node1', 'node2', 'node3'];
// function processNodes(list, callback) {
//     for(item of list){
//         callback(item);
//     }
// }

// function callback(item){
//     console.log(`Processed: ${item}`);
// }

// processNodes(nodes1, callback);

const nodes = ['node1', 'node2', 'node3'];

function processNodes(list, callback) {
  for (const item of list) {
    callback(item);
  }
}

processNodes(nodes, function(item) {
  console.log(`Processed: ${item}`);
});
