export function sortArrayObjectUtil(items: any, key: string): any[] {
  return items.sort((a: any, b: any) =>
    a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0
  );
}
