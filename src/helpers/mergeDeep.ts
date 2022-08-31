export const isObject = (item: any) => {
  return item && typeof item === "object" && !Array.isArray(item);
};

/**
 * immutable deep merge of two objects
 * @param target object to apply source to,
 * @param source properties that are applied
 * @returns the new combined object
 */
export default function mergeDeep<T = any>(target: any, source: any): T {
  // copy of target to assign source to
  let output = Object.assign({}, target);

  // check if both target and source are objects
  if (isObject(target) && isObject(source)) {
    // for each key in source to apply to output
    for (const [key, value] of Object.entries(source)) {
      /** if value is an object and key is also in the target */
      if (isObject(value) && key in target) {
        output[key] = mergeDeep(target[key], value);
      } else {
        output = Object.assign(output, { [key]: value });
      }
    }
  }
  return output as T;
}
