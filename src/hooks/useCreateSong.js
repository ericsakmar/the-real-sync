import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";

import AppContext from "../AppContext";

const useCreateSong = () => {
  const dropbox = useContext(AppContext);
  const queryClient = useQueryClient();

  const mutation = useMutation(
    name => dropbox.filesCreateFolder({ path: `/${name}` }),

    {
      onSuccess: () => {
        queryClient.invalidateQueries("songs");
      }
    }
  );

  return mutation;
};

export default useCreateSong;
