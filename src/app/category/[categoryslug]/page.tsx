import { blogsData } from '@/app/data';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { notFound } from 'next/navigation';
import { extractTextFromHTML } from '@/components/ExtractContent';
export async function generateMetadata({ params }) {
  const { categoryslug } = await params;
  const post = blogsData.filter(
    (blog) => blog.category.toLowerCase() === categoryslug
  );
  if (!post) return notFound(); // 404 if post not found

  return {
    title: post[0].category,

    openGraph: {
      title: post[0].category,
    },
  };
}
const page = async ({ params }: any) => {
  const { categoryslug } = await params;
  const filterData = blogsData.filter(
    (blog) => blog.category.toLowerCase() === categoryslug
  );
  return (
    <Layout>
      <main className="max-w-5xl mx-auto pt-14">
        <div className="text-center py-9">
          <p className="text-xs text-gray-400 uppercase">Browsing Category</p>
          <h1 className="text-4xl text-[#333333] uppercase">
            {filterData[0].category === 'Dgs-journal'
              ? "DG's Journal"
              : filterData[0].category}
          </h1>
        </div>
        <div className="container">
          {filterData.map((blog) => (
            <div
              className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 gap-x-8 border-b-2 px-2 md:px-10 xl:px-0 items-center mx-auto border-gray-300 py-5  my-5"
              key={blog.id}
            >
              <div className="flex-1 aspect-square md:aspect-auto md:w-full md:h-[325px] xl:h-[290px]">
                <Link href={`/${blog.id}`}>
                  <Image
                    src={blog?.image}
                    width={600}
                    height={600}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>

              <div className="flex-1 space-y-3">
                <p className=" uppercase text-xs font-light pb-1 border-b-2 w-fit border-gray-400">
                  {filterData[0].category === 'Dgs-journal'
                    ? "DG's Journal"
                    : filterData[0].category}
                </p>
                <Link href={`/${blog.id}`}>
                  <h3 className=" uppercase text-2xl text-primary font-semibold pb-2">
                    {blog.title}
                  </h3>
                </Link>
                <p className="text-sm text-gray-500 pb-4">
                  {extractTextFromHTML({
                    htmlContent: blog.content,
                    number: 300,
                  })}
                  {/* <ExtractContent htmlContent={blog.content} number={300} /> */}
                </p>
                <Link
                  href={`/${blog.id}`}
                  className="text-sm uppercase font-light"
                >
                  Read More
                </Link>
                <div className="text-xs text-gray-500 flex gap-2">
                  <span>29/01/2025</span> -{' '}
                  <span className=" uppercase">
                    {' '}
                    {filterData[0].category === 'Dgs-journal'
                      ? "DG's Journal"
                      : filterData[0].category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default page;
