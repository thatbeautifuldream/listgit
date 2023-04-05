export default async function Page({ params }) {
  const res = await fetch(`https://api.github.com/users/${params.id}`, {
    cache: "no-cache",
  });
  const data = await res.json();

  return (
    <div>
      <h1>GitList</h1>
      <p>GitHub Username: {params.id}</p>
      <p>GitHub Name: {data.name}</p>
      <p>GitHub Bio: {data.bio}</p>
      <p>GitHub Location: {data.location}</p>
      <p>GitHub Followers: {data.followers}</p>
      <p>GitHub Following: {data.following}</p>
      <p>GitHub Public Repos: {data.public_repos}</p>
      <p>GitHub Public Gists: {data.public_gists}</p>
      <p>GitHub Created At: {data.created_at}</p>
      <p>GitHub Updated At: {data.updated_at}</p>
    </div>
  );
}
