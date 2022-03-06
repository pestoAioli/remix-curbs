import { ActionFunction, Link, redirect } from "remix";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { db } from "~/utils/db.server";
import dialogStylesUrl from "@reach/dialog/styles.css";
import modalStylesUrl from "app/styles/modal.css";
import { LinksFunction } from "@remix-run/react/routeModules";
import { useForm } from "react-hook-form";
import { redirectBack } from "remix-utils";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: dialogStylesUrl },
    {
      rel: "stylesheet",
      href: modalStylesUrl,
    },
  ];
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const name = form.get("name");
  const description = form.get("description");
  const lat = form.get("lat").toString();
  const lon = form.get("lng").toString();
  if (typeof name !== "string" || typeof description !== "string") {
    throw new Error(`Form not submitted correctly.`);
  }
  if (lat.includes(" ") || lon.includes(" ")) {
    throw new Error(
      `Please make sure there are no spaces in the coordinates before submitting`
    );
  }
  const fields = { name, description, lat, lon };

  const spot = await db.curbs.create({ data: fields });

  return redirect("/map");
};

export default function NewSpotRoute({request}) {
  const { register } = useForm({
    defaultValues: {
      lat: "hi",
      lng: "bye",
    },
  });

  return (
    <DialogOverlay className="modal" isOpen={true} dangerouslyBypassFocusLock>
      <DialogContent className="dialog-text" aria-label="Submit Form">
        <div className="form-box">
          <form method="post" className="form">
            <div className="input">
              <label>
                Name: <input type="text" name="name" />
              </label>
            </div>
            <div className="input">
              <label>
                Description: <input type="text" name="description" />
              </label>
            </div>
            <div className="input">
              <label>
                lat:{" "}
                <input type="text" step="any" name="lat" {...register("lat")} />
              </label>
            </div>
            <div className="input">
              <label>
                lng:{" "}
                <input type="text" step="any" name="lng" {...register("lng")} />
              </label>
            </div>
            <div className="buttinz">
              <button type="submit" className="button">
                Add
              </button>
              <button>
                <Link to="/map">Go back </Link>
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </DialogOverlay>
  );
}
