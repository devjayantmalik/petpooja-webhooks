export const toJson = <T>(source: T) => {
  return { ...source } as any;
};
