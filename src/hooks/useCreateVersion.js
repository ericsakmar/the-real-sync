import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";

import AppContext from "../AppContext";

const createVersion = dropbox => async values => {
  const path = `/${values.name}/${values.version}`;

  var zipTask = dropbox.filesUpload({
    path: `${path}/${values.version}.zip`,
    contents: values.zip[0]
  });

  var audioTask = dropbox.filesUpload({
    path: `${path}/${values.version}.mp3`,
    contents: values.audio[0]
  });

  var metadataTask = dropbox.filesUpload({
    path: `${path}/metadata.json`,
    contents: JSON.stringify(values)
  });

  await Promise.all([zipTask, audioTask, metadataTask]);

  return "ok";
};

const useCreateVersion = () => {
  const dropbox = useContext(AppContext);
  const queryClient = useQueryClient();

  const mutation = useMutation(
    createVersion(dropbox),

    {
      onSuccess: () => {
        queryClient.invalidateQueries("songs");
      }
    }
  );

  return mutation;
};

export default useCreateVersion;
