import Image from "next/image"
import Link from "next/link"
import { SignIn, SignUp, SignUpButton } from "@clerk/nextjs"

import { cn } from "@/lib/utils"
// import { auth } from "@clerk/nextjs/server"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Header } from "@/components/header"

export default async function Home() {
  // const { sessionClaims } = await auth()

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-between pb-5">
      <Header />
      <Card className="bg-slate-800 text-white shadow-2xl">
        <CardHeader className="flex flex-col items-center justify-center gap-16 ">
          <Image src="/logo.png" alt="logo" width={300} height={500} />
          <CardTitle className="flex flex-col items-start justify-center p-0">
            <h1 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight text-white first:mt-0 ">
              Bottomline IT - Web Portal
            </h1>
            <p className="text-xl text-muted-foreground">
              Access your employee data
            </p>
          </CardTitle>
        </CardHeader>

        <CardFooter>
          {/* <Link
            href={"/sign-up"}
            className={cn(buttonVariants({ className: "w-full " }))}
          >
            Log in
          </Link> */}

          <SignUpButton fallbackRedirectUrl="http://bottomlineit.co.za/" >
            <Button className="w-full"  >Login in</Button>
          </SignUpButton>
        </CardFooter>
      </Card>

      <div className="mt-8 text-center">
        <div className="space-x-4 text-xs text-gray-500">
          <Link href="#" className="hover:text-gray-700">
            Terms of use
          </Link>
          <Link href="#" className="hover:text-gray-700">
            Privacy & cookies
          </Link>
          <span>...</span>
        </div>
      </div>
    </section>
  )
}
