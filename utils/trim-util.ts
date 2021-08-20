const trim = (baseString: string, trimSymbols?: string): string => {
  if (!trimSymbols) {
    return baseString.trim();
  }
  const symbolsArr: string[] = trimSymbols.split('');
  let start: number = 0;
  let end: number = baseString.length;
  while (symbolsArr.includes(baseString[start])){
    start++;
  }
  while (symbolsArr.includes(baseString[end -1])){
    end--;
  }
  return baseString.slice(start, end);
}

function trim2(string: string, chars?: string): string {
  if (string && !chars) {
      return string.trim();
  }

  const reg = new RegExp(`[${chars}]`, "gi");
  return string.replace(reg, "");
}

export default trim2;

trim("aaa", "a");


/*
trim('  abc  '); // => 'abc'
trim('-_-abc-_-', '_-'); // => 'abc'
trim('\xA0foo'); // "foo"
trim('\xA0foo', ' '); // " foo"
trim('-_-ab c -_-', '_-'); // ab c

['  foo  ', '  bar  '].map(value => trim(value)); // => ['foo', 'bar']
*/