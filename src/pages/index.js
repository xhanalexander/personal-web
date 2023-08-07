import * as React from "react"
import Layout from "../components/Layout"
import { gifImages } from "../data/datagif"

export default function index() {

  const sortedGifImages = gifImages.sort((a, b) => b.id - a.id);
  
  return (
    <Layout>
      <main className="grid grid-cols-4 gap-2">
        {sortedGifImages.map((data) => (
          <figure
            key={data.id}
            className="grid row-span-1 col-span-4 m-2 md:m-4 bg-green-400 rounded-2xl"
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