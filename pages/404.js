import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const ErrorPage = () => {
  const route = useRouter();

  useEffect(() => {
    setTimeout(() => {
      route.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>People List | Error</title>
        <meta name="keywords" content="people"></meta>
      </Head>
      <div className="not-found">
        <h1>Ooooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>
          Go back to the <Link href="/">Homepage</Link>
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
 