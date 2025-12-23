type DetailProductPageProps = {
  params: {
    slug: string[];
  };
};

export default async function DetailProductPage({
  params,
}: DetailProductPageProps) {
    const { slug } = await params;
  return (
    <div>
      <h1>{slug ? "Detail Product Page" : "Product Page"}</h1>
      {slug && (
        <>
          <p>Category : {slug[0]}</p>
          <p>Gender : {slug[1]}</p>
          <p>id : {slug[2]}</p>
        </>
    )}
    </div>
  );
}