For Object and arrays we have to use UseCallback and UseMemo in some cases when you want to check the reference for the props not value 


 const [apprender, setAppRender] = useState(0);
  const [color, setColor] = useState("red");
  const params = useMemo(() => ({ color }), [color]);


// UseMemo another Example

let num = [1, 2, 3, 4, 5];
const values = useMemo(
  () =>
    num.reduce((tot, acc) => {
      tot += acc;
      return tot;
    }, 0),
  [num]
);

// UseMemo another Example !

const multipleValue = useMemo(() => num.map((nu) => num * 100), [num]);

// useMemo another Example !
// When you want to create a full name with the copies of first and last name

let first = "Mouli";
let last = "VJ";
const person = useMemo(() => {
  return {
    first,
    last,
    fullName: `${first} ${last}`,
  };
}, [first, last]);
