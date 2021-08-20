export type StringIndexed = Record<string, any>;

const obj: StringIndexed = {
    key: 1,
    key2: 'test',
    key3: false,
    key4: true,
    key5: [1, 2, 3],
    key6: {a: 1},
    key7: {b: {d: 2, c: {c:3}}},
};

export function queryStringify(data: StringIndexed): string | never {
  if (typeof data !== 'object' || data === null) {
    throw new Error('input must be an object')
  }

  let queryString: string = '';
  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      queryString = value.reduce((acc, value, index) => {
        return acc += `${key}[${index}]=${value}&`;
      }, queryString)
    } else if (typeof value === 'object' && value !== null) {
      queryString += `${key}`
      Object.entries(value).forEach(([innerKey, innerValue]) => {
        if (typeof innerValue === 'object' && innerValue !== null) {
          queryString += `[${innerKey}]` + queryStringify({'': innerValue}) + '&'; 
        } else {
          queryString += `[${innerKey}]=${innerValue}&`
        }
      })
    } else {
      queryString += `${key}=${value}&`;
    }
  })
  return queryString.slice(0, -1);
}

console.log(queryStringify(obj)); // 'key=1&key2=test&key3=false&key4=true&key5[0]=1&key5[1]=2&key5[2]=3&key6[a]=1&key7[b][d]=2'

function queryStringify2(data: StringIndexed): string | never {
  if (typeof data !== "object") {
    throw new Error("Data must be object");
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    const value = data[key];
    const endLine = index < keys.length - 1 ? "&" : "";

    if (Array.isArray(value)) {
      const arrayValue = value.reduce<StringIndexed>(
        (result, arrData, index) => ({
          ...result,
          [`${key}[${index}]`]: arrData
        }),
        {}
      );

      return `${result}${queryStringify2(arrayValue)}${endLine}`;
    }

    if (typeof value === "object") {
      const objValue = Object.keys(value || {}).reduce<StringIndexed>(
        (result, objKey) => ({
          ...result,
          [`${key}[${objKey}]`]: value[objKey]
        }),
        {}
      );

      return `${result}${queryStringify2(objValue)}${endLine}`;
    }

    return `${result}${key}=${value}${endLine}`;
  }, "");
}

console.log(queryStringify2(obj));