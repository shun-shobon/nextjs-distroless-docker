import type { NextPage, GetStaticPaths, GetStaticProps } from "next";

type Props = {
  variable: string;
};
const Isr: NextPage<Props> = ({ variable }) => {
  return (
    <div>
      <h1>Incremental Static Regeneration Page!</h1>
      <h2>Variable: {variable}</h2>
    </div>
  );
};

type Params = Props;
export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  return {
    props: params,
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default Isr;
