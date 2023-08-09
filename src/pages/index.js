import * as React from "react"
import Layout from "../components/Layout"
import { gifImages } from "../data/datagif"
import Seo from "../components/seo";

export default function index({ data }) {
  const sortedGifImages = gifImages.sort((a, b) => b.id - a.id);

  return (
    <Layout>
      <Seo
        description="This is the home page"
        lang="en"
        meta={[
          {
            name: "robots",
            content: "noindex, nofollow",
          },
        ]}
      />
      <main className="grid grid-cols-4 gap-6">
        {sortedGifImages.map((data) => (
          <figure
            key={data.id}
            className="grid row-span-1 col-span-4 bg-green-400 rounded-2xl"
          >
            <a href={data.href} className="a-footer">
              <img
                src={data.src}
                alt={data.alt}
                title={data.alt}
                className="rounded-xl object-cover max-w-3xl w-full max-h-96 transform transition duration-200 hover:-translate-y-2 hover:-translate-x-2"
              />
            </a>
          </figure>
        ))}
      </main>
    </Layout>
  )
}