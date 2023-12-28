export function getKeysFromEnum(enumValue: any) {
  try {
    return Object.keys(enumValue).filter((x) => Number.isNaN(Number(x)));
  } catch {
    throw new Error('Not an Enum');
  }
}
