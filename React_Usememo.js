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



//  Use memo refernce Example 

const [dark, setDark] = useState(false);

const themeStyles = useMemo<boolean>((): any => {
  return {
    backgroundColor: dark ? "black" : "White",
    color: dark ? "White" : "blacj",
  };
}, [dark]);

// UseEffect will reference the old themeStyle and the new themestyle
// Since we are using useMemo the reference of the objects will not change so it will not cause any kind of additional re render
useEffect(() => {
  console.log("Theme Changed ");
}, [themeStyles]);

###################################
##################################
// Another Example 


import React, { memo, useMemo } from "react";

const Memo = ({ color }) => {
  return <div style={{ backgroundColor: color }}>Memo</div>;
};

const Memoized = memo(Memo);

import React from "react";

const UseMemo_ = ({ arr }) => {
  return <div>Sorted Value is :{arr}</div>;
};

const Home = () => {
  const arr = [1, 2, 3, 4, 5];
  const newArr = useMemo(() => {
    return [...arr].reduce((tot, acc) => tot + acc, 0);
  }, [arr]);
  return (
    <>
      <Memoized color={color} />
      <UseMemo_ newArr={newArr} />
    </>
  );
};
