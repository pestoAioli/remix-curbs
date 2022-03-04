import { ActionFunction, Link } from "remix";
import { redirect } from "remix";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { db } from "~/utils/db.server";
import dialogStylesUrl from "@reach/dialog/styles.css";
import { LinksFunction } from "@remix-run/react/routeModules";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: dialogStylesUrl }];
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const name = form.get("name");
  const description = form.get("description");
  if (typeof name !== "string" || typeof description !== "string") {
    throw new Error(`Form not submitted correctly.`);
  }
  const fields = { name, description };

  const spot = await db.curbs.create({ data: fields });

  return spot;
};

export default function NewSpotRoute() {
  return (
    <DialogOverlay isOpen={true} >
      <DialogContent aria-label="Submit Form">
    <div>
      <form method="post">
        <div>
          <label>
            Name: <input type="text" name="name" />{" "}
          </label>
        </div>
        <div>
          <label>
            Description: <input type="text" name="description" />
          </label>
        </div>
        <div>
          <label >
            Address: <input type="text" name="address" />
          </label>
        </div>
        <div>
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
