import {
  ActionFunction,
  UploadHandler,
  unstable_parseMultipartFormData,
  Link,
  redirect,
  useOutletContext,
} from "remix";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { db } from "~/utils/db.server";
import dialogStylesUrl from "@reach/dialog/styles.css";
import modalStylesUrl from "app/styles/modal.css";
import { LinksFunction } from "@remix-run/react/routeModules";
import { useForm } from "react-hook-form";
import { uploadImage } from "~/utils/utils.server";
import type { Stream } from "stream";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: dialogStylesUrl },
    {
      rel: "stylesheet",
      href: modalStylesUrl,
    },
  ];
};
// interface uploadedImage {
//   fileStream: Stream
// }
export const action: ActionFunction = async ({ request }) => {

  const uploadHandler: UploadHandler = async ({ stream }) => {
    const uploadedImage: any = await uploadImage(stream);
    return uploadedImage.secure_url;
    }

  const form = await unstable_parseMultipartFormData(request, uploadHandler);
  const name = form.get("name");
  const description = form.get("description");
  const image_path = form.get("image_path").toString();
  const lat = form.get("lat").toString();
  const lon = form.get("lng").toString();
  if (
    typeof name !== "string" ||
    typeof description !== "string"
  ) {
    throw new Error(`Form not submitted correctly.`);
  }
  const fields = { name, description, image_path, lat, lon };

  const spot = await db.curbs.create({ data: fields });

  return redirect("/map");
};

interface coords {
  lat: string;
  lng: string;
}

export default function NewSpotRoute({ request }) {
  const coords: coords = useOutletContext();
  const { register } = useForm({
    defaultValues: {
      lat: coords.lat,
      lng: coords.lng,
    },
  });
  return (
    <DialogOverlay className="modal" isOpen={true} dangerouslyBypassFocusLock>
      <DialogContent className="dialog-text" aria-label="Submit Form">
        <div className="form-box">
          <form method="post" className="form" encType="multipart/form-data">
            <div className="input">
              <label>
              <input type="text" name="name" placeholder="Name for the spot" />
              </label>
            </div>
            <div className="input">
              <label>
                <input type="text" name="description" placeholder="Description"/>
              </label>
            </div>
            <div className="input">
              <label>
                 <input type="file" name="image_path" className="file"/>
              </label>
              </div>
            <div className="input">
              <label>
                <input
                  type="hidden"
                  step="any"
                  name="lat"
                  {...register("lat")}
                />
              </label>
            </div>
            <div className="input">
              <label>
                <input
                  type="hidden"
                  step="any"
                  name="lng"
                  {...register("lng")}
                />
              </label>
            </div>
            <div className="buttinz">
              <button type="submit" className="button">
                Add
              </button>
              <button className="button" >
                <Link to="/map">Go back </Link>
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </DialogOverlay>
  );
}

