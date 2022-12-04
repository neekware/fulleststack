// import { Dashboard } from './dashboard/index';

import Link from "next/link";
import { Hero } from "../components/hero";
import { Navbar, Footer } from "@avidtrader/shared-components";

export function Index() {
  return (
    <>
      <Navbar />
      <div className="flex-initial">
        <Hero title="Avitrader" description="This is Avidtrader"
          button={
            <Link href="/dashboard">
              <a>
                <button className="inline-block rounded-md text-center text-lg font-semibold py-2 px-4">
                  Go to Dashboard
                </button>
              </a>
            </Link>
          }
        />
      </div>
      <Footer />
    </>
  );
}

export default Index;