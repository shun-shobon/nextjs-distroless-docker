import type { NextPage, GetServerSideProps } from "next";

type Props = {
  variable: string;
};
const Ssr: NextPage<Props> = ({ variable }) => {
  return (
    <div>
      <h1>Server Side Rendering Page!</h1>
      <h2>Variable: {variable}</h2>
    </div>
  );
};

type Params = Props;
export const getServerSideProps: GetServerSideProps<Props, Params> = async ({
  params,
}) => {
  return {
    props: params,
  };
};

export default Ssr;
