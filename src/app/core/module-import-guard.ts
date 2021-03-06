// Prevent re-import of the core module
// https://angular.io/guide/styleguide#prevent-re-import-of-the-core-module
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}
