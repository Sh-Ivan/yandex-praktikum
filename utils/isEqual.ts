function isEqual(a: Record<string, any>, b: Record<string, any>): boolean {
  let result: boolean = true;
  Object.keys(a).forEach(key => {
    if (typeof a[key] !== 'object') {
      if (a[key] !== b[key]) {
        result = false;
      }
    } else {
      result = isEqual(a[key], b[key]);
    }
  })
  return result;
}

export default isEqual;

const a = {a: 1};
const b = {a: 1};
isEqual(a, b); // true

type PlainObject<T = any> = {
  [k in string]: T;
};

function isPlainObject(value: unknown): value is PlainObject {
  return typeof value === 'object'
      && value !== null
      && value.constructor === Object
      && Object.prototype.toString.call(value) === '[object Object]';
}

function isArray(value: unknown): value is [] {
  return Array.isArray(value);
}

function isArrayOrObject(value: unknown): value is [] | PlainObject {
  return isPlainObject(value) || isArray(value);
}

function isEqual2(lhs: PlainObject, rhs: PlainObject) {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
      return false;
  }

  for (const [key, value] of Object.entries(lhs)) {
      const rightValue = rhs[key];
      if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
          if (isEqual(value, rightValue)) {
              continue;
          }
          return false;
      }

      if (value !== rightValue) {
          return false;
      }
  }

  return true;
}

isEqual2({}, {});

//https://praktikum.yandex.ru/trainer/middle-frontend/lesson/69e83819-4375-45ce-bccb-17fcfd35de1f/task/cd7f2ac0-cd0f-4038-89a5-2a5285666737/

/*

Несколько интересных кейсов:
isEqual({ foo: NaN }, { foo: NaN }); // false
isEqual({ foo: () => true }, { foo: () => true }); // false
isEqual({ foo: [1, 2] }, { foo: { 0: 1, 1: 2 } }); // true 
NaN !== NaN, следовательно, объекты не будут равны. Чтобы функция возвращала true, можно проверить два значения на NaN с помощью Number.isNaN.
Изначально мы исключили функции из сравнения, но если хотите их сравнить, можно использовать метод toString(), который вернёт строковое представление функции.
Сейчас объекты и массивы сравниваются вместе, поэтому при сравнении массивоподобного объекта с обычным массивом метод вернёт true (если они будут эквивалентны). Чтобы решить это, нужно сравнить сначала значения на объекты, потом отдельно на массивы.

*/