import Airtable, { FieldSet } from "airtable";
import { GetServerSideProps } from "next";

const RedirectSlug = ({ redirect }: { redirect: string }) => {
  return (
    <div>
      Redirecting to <a href={redirect}>{redirect}</a>. Click if not redirected.
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params.slug || "";

  const base = Airtable.base("appl7i287x5O6NeX8");

  const items: any[] = [];
  const res = await base.table("Projects — Chicago").select({});

  const hello = await res.eachPage(
    (records, fetchNextPage) => {
      records.forEach(function (record) {
        console.log("Retrieved", record.fields.Deployment);

        items.push(record);
      });
      fetchNextPage;
    },
    (err) => {
      console.log(err);
    }
  );

  console.log(res, items);

  return {
    props: {
      redirect: "hi",
    },
  };
};

export default RedirectSlug;
