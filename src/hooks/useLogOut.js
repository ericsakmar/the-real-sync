import { useMutation, useQueryClient } from "react-query";

const logOut = async () => {
  window.localStorage.removeItem("accessToken");
};

const useLogOut = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    () => logOut(),

    {
      onSuccess: () => {
        queryClient.invalidateQueries("access-token");
      }
    }
  );

  return mutation;
};

export default useLogOut;
