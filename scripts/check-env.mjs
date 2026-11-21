const [major, minor, patch] = process.versions.node.split('.').map(Number);
console.log(`Node.js: ${major}.${minor}.${patch}`);
console.log(`Platform: ${process.platform} ${process.arch}`);
if (major !== 22) {
  console.error('\nThis project is configured for Node.js 22 LTS.');
  console.error('Install Node.js 22 LTS, close and reopen your terminal, then run this check again.');
  process.exitCode = 1;
} else {
  console.log('\nNode.js version is in the supported range.');
}
