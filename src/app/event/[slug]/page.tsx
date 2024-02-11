import H1 from "@/components/h1";
import { getEvent } from "@/lib/server-utils";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const slug = params.slug;

  const event = await getEvent(slug);

  if (!event) {
    // Handle the case when event is null, e.g., render a fallback UI
    return {
      title: "Event Not Found",
      description: "No event found for the given slug.",
    };
  }
  return {
    title: event.name,
  };
}

export async function generateStaticParams() {
  // top 100 most popular events
  return [
    {
      slug: "comedy-extravaganza",
    },
    {
      slug: "dj-practice-session",
    },
  ];
}

export default async function EventPage({ params }: Props) {
  const slug = params.slug;
  const event = await getEvent(slug);

  if (!event) {
    // Handle the case when event is null, e.g., render a fallback UI
    return {
      id: null,
      name: "Event Not Found",
      slug: "event-not-found",
      city: "Unknown",
      location: "Unknown",
      date: new Date(),
      organizerName: "Unknown",
      imageUrl: "No Image Found",
      description: "No event found for the given slug.",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  return (
    <main>
      <section
        className="relative overflow-hidden flex justify-center 
      items-center py-14 md:py-20"
      >
        <div className="flex flex-col items-center">
          <Image
            src={event.imageUrl}
            className="object-cover z-0 blur-2xl"
            alt="Event background image"
            fill // This makes the image absolutely positioned
            quality={100}
            sizes="(max-width: 1280px) 100vw 1280px"
            priority
          />

          <div className="z-1 flex flex-col lg:flex-row gap-6 lg:gap-16 relative"
          >
            <Image
              src={event.imageUrl}
              alt={event.name}
              width={300}
              height={201}
              className="h-[201px] rounded-xl self-center border-2 border-white/50 object-cover"
            />
            <div className="flex flex-col">
              <p className="text-center text-white/75">
                {new Date(event.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <H1 className=" text-center mb-2 mt-2 lg:text-5xl break-words">
                {event.name}
              </H1>
              <p className="text-center break-words text-xl text-white/75">
                Organized by
              </p>
              <div className="text-xl text-white/75 text-center italic">
                {" "}
                {event.organizerName}
              </div>
              <button
                className="bg-white/20 text-lg capitalize bg-blur mt-5 lg:mt-auto 
              w-[90vw] self-center rounded-md border-white/10 border-2 sm:w-full 
               py-2 state-effects"
              >
                Get tickets
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>

        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-3">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-3xl mx-auto text-lg leading-8 text-white/75">
      {children}
    </p>
  );
  {
    /* leading is space between the lines */
  }
}
