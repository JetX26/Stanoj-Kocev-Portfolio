'use client'

import Navbar from "./components/Navbarhero"
import Aboutme from "./components/Aboutme"
import { useZustandStore } from "./helper/store"
import Stack from "./components/Stack"
import Contact from "./components/Contact"
import Myprojects from "./components/Myprojects"
import Footer from "./components/Footer"

export default function Home(): any {

  const { aboutMeToggle, setAboutMeToggle } = useZustandStore()


  return (
    <main>
      <Navbar></Navbar>
      {aboutMeToggle && <Aboutme></Aboutme>}
      <Stack></Stack>
      <Myprojects></Myprojects>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  )
}
