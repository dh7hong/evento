import "server-only";
import prisma from "./db";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";
import { capitalize } from "./utils";

export const getEvents = unstable_cache(
  async (city: string, page = 1) => {
    // const response = await fetch(
    //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
    // );
    // const events: EventoEvent[] = await response.json();

    const events = await prisma.eventoEvent.findMany({
      where: {
        city: city === "all" ? undefined : capitalize(city),
      },
      orderBy: {
        date: "asc",
      },
      take: 6,
      skip: (page - 1) * 6,
    });

    const totalCount = await prisma.eventoEvent.count({
      where: {
        city: city === "all" ? undefined : capitalize(city),
      },
    });
    return { events, totalCount };
  }
);

export const getEvent = unstable_cache(async (slug: string) => {
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  // );
  // const event: EventoEvent = await response.json();
  // return event;
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }
  return event;
});
