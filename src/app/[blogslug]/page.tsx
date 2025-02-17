import { blogsData } from '@/app/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import { fetchCategoriesSSR } from '../_queryCall/ssr';
import Layout from '@/components/layout/Layout';
import { notFound } from 'next/navigation';
import ExtractContent from '@/components/ExtractContent';
export async function generateMetadata({ params }) {
  const { blogslug } = await params;
  const post = blogsData.filter((blog) => blog.id === blogslug);
  if (!post) return notFound(); // 404 if post not found

  return {
    title: post[0].title,
    description: post[0].shortDescription,
    openGraph: {
      title: post[0].title,
      description: post[0].shortDescription,
      url: `${post[0].id}`,
      images: [
        {
          url: `${post[0].image}`,
          width: 800,
          height: 600,
          alt: post[0].title,
        },
      ],
    },
  };
}

const page = async ({ params }) => {
  const { blogslug } = await params;
  const filterData = blogsData.filter((blog) => blog.id === blogslug);
  // const category = await fetchCategoriesSSR();
  // console.log(category);

  return (
    <Layout>
      <section>
        <div className="hidden md:inline md:fixed top-1/2 tracking-wide group">
          <p className="-rotate-90 bg-white px-3 py-1 -translate-x-8 flex z-10">
            PREV POST
          </p>
          <div className="absolute top-0 -left-6 transform  -translate-y-16 -translate-x-10 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300 ease-in-out -z-10  bg-white">
            <div className="w-[280px] h-[188px] flex justify-start flex-col items-end border-2 p-5 pl-28 space-y-3 ">
              <div className="w-[165px] h-[100px] ">
                <Image
                  src={'/New-Indian-Express.png'}
                  alt="Image"
                  width={1800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-base w-[165px]">{filterData[0].title}</p>
            </div>
          </div>
        </div>

        <div className="hidden md:inline fixed top-1/2 right-0 tracking-wide group">
          <p className="rotate-90 translate-x-8 bg-white px-3 py-1">
            NEXT POST
          </p>
          <div className="absolute top-0 -right-6 transform  -translate-y-16 translate-x-10 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300 ease-in-out -z-10  bg-white">
            <div className="w-[280px] h-[188px] flex justify-end flex-col items-start border-2 p-5 pr-28 space-y-3 ">
              <div className="w-[165px] h-[100px] ">
                <Image
                  src={'/New-Indian-Express.png'}
                  alt="Image"
                  width={1800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-base w-[165px]">
                {filterData[0].title.substring(0, 20)}
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-14 ">
          <div className="text-center py-9 flex justify-center flex-col items-center space-y-5 px-2 md:px-5 xl:px-0">
            <p className="text-xs border-b-2 border-gray-500 pb-1 w-fit uppercase">
              {filterData[0].category}
            </p>
            <h1 className="text-primary font-bold text-2xl pb-5">
              {filterData[0].title}
            </h1>
            {filterData[0].image && (
              <div className="w-full h-full">
                <Image
                  src={filterData[0].image}
                  alt="Image"
                  width={1800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 justify-between gap-x-5">
              <div
                className="flex-1 text-start w-[900px] dangerouslySetInnerHTMLStyle "
                dangerouslySetInnerHTML={{ __html: filterData[0].content }}
              />
              <div className="md:w-[300px] px-5 md:px-0">
                <h4 className="text-xl pb-10">Latest Post</h4>
                <div className="md:w-[300px] ">
                  {blogsData.slice(0, 4).map((trends) => (
                    <div
                      className="flex flex-col border-2 mb-5"
                      key={trends.id}
                    >
                      <Link href={`/${trends.id}`}>
                        <div className="  md:w-[300px] h-[150px]">
                          <Image
                            src={trends.image}
                            alt="Image"
                            width={1800}
                            height={500}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </Link>
                      <div className="text-start p-4 space-y-1">
                        <p className="font-bold text-base text-primary">
                          {trends.title}
                        </p>
                        <p className="text-sm">
                          <ExtractContent
                            htmlContent={trends.content}
                            number={100}
                          />
                        </p>
                        <Link
                          href={`/${trends.id}`}
                          className="text-xs text-primary"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500 text-center flex gap-x-3 justify-center items-center pb-5 ">
            <span>22/01/2025</span>-{' '}
            <span className=" uppercase">DG&apos;S JOURNAL</span>
          </div>
          <div className="md:hidden flex justify-between text-sm mx-2 py-8 border-t-2 ">
            <button>PREV POST</button>
            <button>NEXT POST</button>
          </div>
          <div className="text-center my-10 flex flex-col justify-center items-center px-2 md:px-5">
            <p className=" uppercase text-lg">Related Posts</p>
            <div className="w-[50px] p-[0.5px] text-center bg-gray-600 my-2"></div>
            <div className="grid md:grid-cols-3  gap-10 pt-5">
              {blogsData.slice(0, 3).map((blog, index) => (
                <div
                  className=' className="flex flex-col gap-3 px-1'
                  key={index}
                >
                  <Link href={`/${blog.id}`}>
                    <div className="w-full h-[150px]">
                      <Image
                        src={blog.image}
                        alt="image"
                        width={240}
                        height={140}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="space-y-2  text-primary text-center md:block flex justify-center items-center flex-col md:text-start">
                    <p className=" text-lg md:text-xs xl:text-sm font-semibold text-wrap">
                      {blog.title}
                    </p>
                    <p className=" text-[12px]">{blog.date}</p>
                    <Link href={`/${blog.id}`}>
                      <p className=" text-[12px]  w-fit border-b-[1px] border-primary ">
                        Read More
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default page;
