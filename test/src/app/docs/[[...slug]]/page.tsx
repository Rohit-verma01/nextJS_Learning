export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length == 2) {
    return (
      <h1>
        This docs contains {params.slug[0]} number of chapter and in this there
        are {params.slug[1]} no. of chapters
      </h1>
    );
  } else if (params.slug?.length == 1) {
    return <h1>This docs contains {params.slug[0]} number of chapter</h1>;
  }
  return (
    <>
      <h1>This is the docs page </h1>
      {console.log(params)}
    </>
  );
}
