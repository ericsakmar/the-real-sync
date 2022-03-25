import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";

import useCreateSong from "../hooks/useCreateSong";
import TextField from "./TextField";

function NewSong() {
  const methods = useForm();
  const navigate = useNavigate();
  const createSong = useCreateSong();

  const onSubmit = values => {
    createSong.mutate(values.name, {
      onSuccess: () => {
        navigate(`/songs/${values.name}`);
      }
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <TextField name="name" label="Name:" />

        <div className="song-actions">
          <button className="button-main" type="submit">
            Create
          </button>
        </div>
      </form>
    </FormProvider>
  );
}

export default NewSong;
