import { NextSeo } from "next-seo";
const title = "hello ssr";

import { useRouter } from "next/router";

export default function Page(props: any) {
  const router = useRouter();
  return (
    <div>
      {/* @ts-ignore */}
      <NextSeo
        title={(router.query.domain as string) || title}
        description="lalala"
        openGraph={{
          title,
          images: [
            {
              url: `/${router.query.domain}.jpeg`,
            },
          ],
        }}
        twitter={{ cardType: "summary_large_image" }}
      />
      <div>domain: {router.query.domain}</div>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(data: any) {
  console.log("data:", data);

  return { props: {} };
}
