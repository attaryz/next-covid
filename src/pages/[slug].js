import styles from "../styles/Slug.module.css";

export default function Slug({ country }) {
  console.log(country);
  return (
    <div>
      <p>{country.Country}</p>
    </div>
  );
}
export async function getServerSideProps({ params }) {
  const res = await fetch("https://api.covid19api.com/summary");
  const data = await res.json();
  const country = await data.Countries.filter(
    (country) => country.Slug == params.slug
  );

  return {
    props: { country: country[0] },
  };
}
