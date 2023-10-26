import Airtable, { FieldSet } from "airtable";
import { GetServerSideProps } from "next";
import GithubSlugger from "github-slugger";

const RedirectSlug = ({ redirect }: { redirect: string }) => {
  return (
    <div>
      Redirecting to <a href={redirect}>{redirect}</a>. Click if not redirected.
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params?.slug || "";

  const slugger = new GithubSlugger();

  const base = Airtable.base("appl7i287x5O6NeX8");

  const items: any[] = [];
  const res = await base
    .table("Projects — Chicago")
    .select({ filterByFormula: `{Slug}="${id}"` });

  let deploymentLink = "";

  const result = await res.firstPage();

  if (result[0]) {
    deploymentLink = result[0].fields["Deployment"]?.toString() || "";
  } else {
    deploymentLink = "/";
  }

  return {
    redirect: {
      permanent: false,
      destination: deploymentLink,
    },
  };
};

export default RedirectSlug;
