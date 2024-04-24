import Image from "next/image";

import { Button } from "@ui/components/button";
import {
  ArrowRightIcon,
  CloudIcon,
  MousePointerIcon,
  PaperclipIcon,
  PhoneIcon,
  StarIcon,
  UploadIcon,
} from "lucide-react";
import heroDarkImage from "../../../../public/images/hero-dark.svg";
import heroImage from "../../../../public/images/hero.svg";

export function Features() {
  return (
    <section className="bg-card py-24 text-card-foreground">
      <div className="container">
        {/* Section header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold lg:text-5xl">
            Features your clients will love
          </h1>
          <p className="mt-3 text-lg opacity-70">
            In this section you can showcase the features of your SaaS.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16">
          {/* Feature 1 */}
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="rounded-2xl bg-primary/10 p-12">
              <Image
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                src={heroImage}
                className="block dark:hidden"
                alt="Feature 1"
              />
              <Image
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                src={heroDarkImage}
                className="hidden dark:block"
                alt="Feature 1"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold">Feature A</h3>
              <p className="mt-2 leading-normal opacity-70">
                This is a brilliant feature. And below you can see some reasons
                why. This is basically just a dummy text.
              </p>
              <Button variant="link" size="sm" className="mt-4 px-0">
                Learn more
                <ArrowRightIcon className="ml-2 size-4" />
              </Button>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border  bg-card p-4 text-card-foreground">
                  <StarIcon className="size-6 text-3xl text-primary" />
                  <strong className="mt-2 block">Benefit 1</strong>
                  <p className="opacity-70">This is a brilliant benefit.</p>
                </div>
                <div className="rounded-xl border  bg-card p-4 text-card-foreground">
                  <MousePointerIcon className="size-6 text-3xl text-primary" />
                  <strong className="mt-2 block">Benefit 2</strong>
                  <p className="opacity-70">This is a brilliant benefit.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="rounded-2xl bg-primary/10 p-12 lg:order-2">
              <Image
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                src={heroImage}
                className="block dark:hidden"
                alt="Feature 2"
              />
              <Image
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                src={heroDarkImage}
                className="hidden dark:block"
                alt="Feature 2"
              />
            </div>

            <div className="lg:order-1">
              <h3 className="text-3xl font-bold">Feature B</h3>
              <p className="mt-2 leading-normal opacity-70">
                This is a brilliant feature. And below you can see some reasons
                why. This is basically just a dummy text.
              </p>
              <Button variant="link" size="sm" className="mt-4 px-0">
                Learn more
                <ArrowRightIcon className="ml-2 size-4" />
              </Button>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border  bg-card p-4 text-card-foreground">
                  <UploadIcon className="size-6 text-3xl text-primary" />
                  <strong className="mt-2 block">Benefit 1</strong>
                  <p className="opacity-70">This is a brilliant benefit.</p>
                </div>
                <div className="rounded-xl border  bg-card p-4 text-card-foreground">
                  <CloudIcon className="size-6 text-3xl text-primary" />
                  <strong className="mt-2 block">Benefit 2</strong>
                  <p className="opacity-70">This is a brilliant benefit.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="rounded-2xl bg-primary/10 p-12 ">
              <Image
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                src={heroImage}
                className="block dark:hidden"
                alt="Feature 3"
              />
              <Image
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                src={heroDarkImage}
                className="hidden dark:block"
                alt="Feature 3"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold">Feature C</h3>
              <p className="mt-2 leading-normal opacity-70">
                This is a brilliant feature. And below you can see some reasons
                why. This is basically just a dummy text.
              </p>
              <Button variant="link" size="sm" className="mt-4 px-0">
                Learn more
                <ArrowRightIcon className="ml-2 size-4" />
              </Button>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border  bg-card p-4 text-card-foreground">
                  <PhoneIcon className="size-6 text-3xl text-primary" />
                  <strong className="mt-2 block">Benefit 1</strong>
                  <p className="opacity-70">This is a brilliant benefit.</p>
                </div>
                <div className="rounded-xl border  bg-card p-4 text-card-foreground">
                  <PaperclipIcon className="size-6 text-3xl text-primary" />
                  <strong className="mt-2 block">Benefit 2</strong>
                  <p className="opacity-70">This is a brilliant benefit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
