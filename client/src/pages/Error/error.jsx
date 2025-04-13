import { GlobalHeader } from "../../modules/layout/global-header";
import { NotFoundError } from "../../modules/not-found-error/not-found-error";

export function ErrorPage() {
  return (
    <>
      <NotFoundError />
    </>
  );
}
