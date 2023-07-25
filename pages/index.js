import { createClient } from "next-sanity";

export default function IndexPage({ tiles }) {
  return (
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
        <h2>Tiles</h2>
        {tiles.length > 0 && (
          <ul>
            {tiles.map((tile) => (
              <li key={tile._id}>{tile?.name}</li>
            ))}
          </ul>
        )}
        {!tiles.length > 0 && <p>No tiles to show</p>}
        {tiles.length > 0 && (
          <div>
            <pre>{JSON.stringify(tiles, null, 2)}</pre>
          </div>
        )}
        {!tiles.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you've configured everything
              correctly
            </p>
          </div>
        )}
      </main>
    </>
  );
}

const client = createClient({
	projectId: "vfqx5cbb",
	dataset: "production",
	apiVersion: "2023-07-25",
	useCdn: false
});

export async function getStaticProps() {
  const tiles = await client.fetch(`*[_type == "tiles"]`);
  return {
    props: {
      tiles
    }
  }
}
