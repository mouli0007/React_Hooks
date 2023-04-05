For Object and arrays we have to use UseCallback and UseMemo in some cases when you want to check the reference for the props not value 


 const [apprender, setAppRender] = useState(0);
  const [color, setColor] = useState("red");
  const params = useMemo(() => ({ color }), [color]);
