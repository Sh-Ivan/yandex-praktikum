export type Indexed<T = unknown> = {
  [key in string]: T;
};

const isObject = (obj: unknown): boolean => {
  return (typeof obj === 'object' && typeof obj !== null)
}

export const merge = (obj1: Indexed, obj2: Indexed): Indexed => {
  const merged: Indexed = obj1;
  for (let [key, value] of Object.entries(obj2)) {
    if (isObject(merged[key]) && isObject(value)) {Object;
      merged[key] = merge(merged[key] as Indexed, value as Indexed);
    } else {
      merged[key] = value;
    }
  }
  return merged;
}
/*
function merge2 (lhs: Indexed, rhs: Indexed): Indexed {
  for (let p in rhs) {
      if (!rhs.hasOwnProperty(p)) {
          continue;
      }

      try {
          if (rhs[p].constructor === Object) {
              rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
          } else {
              lhs[p] = rhs[p];
          }
      } catch(e) {
          lhs[p] = rhs[p];
      }
  }

  return lhs;
}
*/
