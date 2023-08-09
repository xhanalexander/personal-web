import * as React from "react"
import Layout from "../components/layout"
import Spline from "@splinetool/react-spline"
import { useLottie } from "lottie-react"
import animationData from "../images/404.json"

export default function NotFound() {
  const options = {
    animationData,
    loop: true,
    autoplay: true,
  }
  const { View } = useLottie(options)
  return (
    <Layout>
      <main className="hidden md:flex min-h-max">
        {/* <Spline className="hidden md:flex" scene="https://prod.spline.design/ECguRpRIEub0F7-w/scene.splinecode" /> */}
      </main>
      <main className="flex flex-col items-center justify-center min-h-max">
        { View }
        <h1 className="text-4xl font-bold text-center">404 Page Not Found</h1>
      </main>
    </Layout>
  )
}

export const Head = () =>  <title>404 Page Not Found</title>
