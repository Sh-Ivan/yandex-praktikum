type Nullable<T> = T | null;

const text: Nullable<HTMLDivElement> = document.getElementById(
  "text"
) as HTMLDivElement;
const input: Nullable<HTMLInputElement> = document.getElementById(
  "input"
) as HTMLInputElement;

if (!text || !input) {
  throw new Error("нет полей");
}

const data = {
  title: ""
};

let innerValue = data.title;
Object.defineProperty(data, 'title', {
  get: () => innerValue,
	set: (value) => {
		innerValue = value;
		text.innerHTML = innerValue;
	},
});

input.addEventListener('keyup', e => {
  const target = e.target as HTMLInputElement;
  data.title = target.value;
})


export default Nullable