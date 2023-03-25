


function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(() => {
    setIsLoading(true);
    dispatch(thunk())
      .unwrap()
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  });

  return [runThunk, isLoading, error];
}

  //
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);



export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  // Request Logic !

  try {
    const response = await axios.get("http://localhost:3005/users");

    //   DDEV ONLY
    await pause(1000);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error("Check the URL once !");
  }
});
