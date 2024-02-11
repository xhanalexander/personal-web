import * as React from "react"
import Layout from "../components/layout"
import { useLottie } from "lottie-react"
import animationData from "../images/404.json"
import Seo from "../components/seo"

export default function NotFound() {
  const options = {
    animationData,
    loop: true,
    autoplay: true,
  }
  const { View } = useLottie(options)
  return (
    <Layout>
      <Seo title="404 Page Not Found" />
      <main className="hidden md:flex min-h-max">
      </main>
      <main className="flex flex-col items-center justify-center min-h-max">
        { View }
        <h1 className="text-4xl mt-6 font-bold text-center">Ooops 404 Page Not Found</h1>
      </main>
    </Layout>
  )
}
