import Link from "next/link";
import styles from "../../styles/People.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      persons: data,
    },
  };
};

const People = ({ persons }) => {
  return (
    <div>
      <h1>All People</h1>
      {persons.map((person) => (
        <Link href={`/people/${person.id}`} legacyBehavior key={person.id}>
          <a className={styles.single}>
            <h3>{person.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default People;
