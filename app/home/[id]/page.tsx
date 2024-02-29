import HomeDetail from "@/components/home/HomeDetail";

interface IProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: IProps) {
  const { id } = params;
  return (
    <>
      <HomeDetail id={id} />
    </>
  );
}

export const metadata = {
  title: "Home detail",
};
