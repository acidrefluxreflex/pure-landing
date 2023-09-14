import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../libs/microcms";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

// プラグインが必要
import ja from "dayjs/locale/ja";

dayjs.locale(ja);

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export async function generateMetadata({
  params: { postId },
}: {
  params: { postId: string };
}): Promise<Metadata> {
  // read route params

  const post = await getDetail(postId);

  // fetch data

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: "https://eveki.net/blog/" + post.id,
      siteName: "eveki.net",
      images: [
        {
          url:
            post.eyecatch?.url ||
            "https://eveki.net/_next/image?url=%2Fimages%2FforTwitter.webp",
          width: 1200,
          height: 600,
        },
      ],
      locale: "ja_JP",
      type: "website",
    },
  };
}

export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);

  const createdAt = dayjs(post.createdAt).format("YYYY-MM-DD");

  // ページの生成された時間を取得

  const proseSetting: string =
    "prose text-black prose-h1:text-black prose-h2:text-black prose-a:text-blue-500 prose-strong:text-blue-500 prose-strong:font-bold prose-h2:border-b-2  prose-h2:text-3xl";

  if (!post) {
    notFound();
  }

  return (
    <main className="">
      <article>
        <div className="mb-20 max-w-2xl px-3 py-8">
          <div id="IMAGE">
            {post.eyecatch ? (
              <Link href={`/blog/${post.id}`}>
                <Image
                  src={post.eyecatch.url}
                  width={840}
                  height={630 / 4}
                  alt={post.title}
                />
              </Link>
            ) : (
              <div className="h-20 w-20 bg-gray-200"></div> // プレースホルダーとして表示する要素
            )}
          </div>
          <div
            className="breadcrumbs text-sm py-5"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            <ul>
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <Link href="/blog" itemProp="item">
                  <p itemProp="name">Blog</p>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <Link
                  href={`/blog/category/${post.category?.id ?? ""}`}
                  itemProp="item"
                >
                  <p itemProp="name">{post.category?.name ?? ""}</p>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <span itemProp="name">{post.title}</span>
                <meta itemProp="position" content="3" />
              </li>
            </ul>
          </div>

          <h2 className="mb-2 text-gray-600">{createdAt}</h2>
          <h1 className="mb-4 text-5xl font-bold">{post.title}</h1>

          <p className="badge mb-12">
            <Link
              href="/blog/category/[categoryId]"
              as={`/blog/category/${post.category?.id ?? ""}`}
            >
              {post.category?.name ?? ""}
            </Link>
          </p>

          <div className={proseSetting}>{parse(post.content)}</div>
        </div>
      </article>
    </main>
  );
}
