const allNodes = document.querySelectorAll("*");
const nodes = [...allNodes];
console.log(nodes);
allNodes.forEach(node => {
    console.log(node.nodeName);    
    console.log(node.childNodes);
    console.log('Parent:', node.parentNode?.nodeName);
    console.log('Children:', node.childNodes.length);
    console.log('Previous Sibling:', node.previousSibling?.nodeName);
    console.log('Next Sibling:', node.nextSibling?.nodeName);
    console.log('---------------------');
});