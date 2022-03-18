import { useNavigate, useParams } from "react-router-dom";
import format from "date-fns/format";
import * as slugify from "slugify";
import { useForm, FormProvider } from "react-hook-form";
import TextField from "./TextField";
import LoadingIcon from "./LoadingIcon";

import useCreateVersion from "../hooks/useCreateVersion";

function NewVersion() {
  const navigate = useNavigate();
  const createVersion = useCreateVersion();
  const { name } = useParams();
  const methods = useForm();

  const onSubmit = values => {
    const timestamp = format(new Date(), "yyyy-MM-dd-HH-mm");
    const nameSlug = slugify(name);
    const createdBySlug = slugify(values.createdBy);
    const summarySlug = slugify(values.summary);
    const version = `${nameSlug}_${timestamp}_${createdBySlug}_${summarySlug}`;

    createVersion.mutate(
      { ...values, version, name },

      {
        onSuccess: () => {
          navigate(`/songs/${name}`);
        }
      }
    );
  };

  const disabled = createVersion.isLoading;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <TextField
          label="Logic File (zip):"
          name="zip"
          type="file"
          disabled={disabled}
        />

        <TextField
          label="Audio File (mp3):"
          name="audio"
          type="file"
          disabled={disabled}
        />

        <TextField label="Summary:" name="summary" disabled={disabled} />

        <TextField label="Notes:" name="notes" disabled={disabled} />

        <TextField label="Created By:" name="createdBy" disabled={disabled} />

        <div className="song-actions">
          <button className="button-main" type="submit" disabled={disabled}>
            {createVersion.isLoading ? <LoadingIcon /> : "Create"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
}

export default NewVersion;
