function readPackage(pkg) {
  if (pkg.name === 'esbuild' || pkg.name === 'sharp') {
    if (!pkg.pnpm) {
      pkg.pnpm = {};
    }
    pkg.pnpm.allowBuild = true;
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
