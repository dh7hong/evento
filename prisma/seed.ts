import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const events = [
  {
    id: 1,
    name: "DJ Practice Session",
    slug: "dj-practice-session",
    city: "Austin",
    location: "Austin Music Hall",
    date: "2030-10-12T00:00:00.000Z",
    organizerName: "DJ Inc.",
    imageUrl:
      "https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
    description:
      "Join us for an immersive DJ practice session at the DJ Beats Workshop! Whether you're a beginner aspiring to spin the decks or an experienced DJ looking to refine your skills, this event is tailored just for you. Dive into the world of beats, mixes, and electronic rhythms under the guidance of seasoned DJs and music producers. Showcase your skills during our open decks session. Share your favorite tracks, experiment with live remixing, and receive applause and feedback from a supportive audience.",
  },
  {
    id: 2,
    name: "Harmony Festival",
    slug: "harmony-festival",
    city: "Austin",
    location: "Austin Convention Center",
    date: "2030-11-15T00:00:00.000Z",
    organizerName: "Music Enthusiasts LLC",
    imageUrl:
      "https://images.unsplash.com/photo-1707147671059-94dd36708ca7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Harmony Festival is a celebration of all music genres, bringing together musicians, artists, and music enthusiasts from around the world. Experience a day filled with live performances, interactive workshops, and a vibrant atmosphere of creativity and harmony. Join us for an unforgettable musical journey!",
  },
  {
    id: 3,
    name: "3D Animation Workshop",
    slug: "3d-animation-workshop",
    city: "Austin",
    location: "Austin Convention Center",
    date: "2030-12-08T00:00:00.000Z",
    organizerName: "3D Animators Inc.",
    imageUrl:
      "https://images.unsplash.com/photo-1706969049924-25a377c2ea9d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Dive into the captivating world of 3D animation at our exclusive 3D Animation Masterclass! Whether you're an aspiring animator, a student studying animation, or a professional looking to enhance your skills, this workshop offers a unique opportunity to learn from industry experts and elevate your animation prowess.",
  },
  {
    id: 4,
    name: "Rock the City Concert",
    slug: "rock-the-city-concert",
    city: "Austin",
    location: "Austin Music Hall",
    date: "2030-11-18T00:00:00.000Z",
    organizerName: "Rock On Productions",
    imageUrl:
      "https://images.unsplash.com/photo-1549451371-64aa98a6f660?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Get ready to rock out at Rock the City Concert! Experience electrifying performances by top rock bands, enjoy high-energy music, and immerse yourself in an unforgettable night of pure rock and roll.",
  },
  {
    id: 5,
    name: "Artisan Craft Fair",
    slug: "artisan-craft-fair",
    city: "Seattle",
    location: "Seattle Exhibition Center",
    date: "2030-12-01T00:00:00.000Z",
    organizerName: "Craftsmanship Guild",
    imageUrl:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Discover unique handmade crafts and artworks at the Artisan Craft Fair. Meet talented artisans, shop for one-of-a-kind items, and support local craftsmanship. Join us for a day of creativity and craftsmanship.",
  },
  {
    id: 6,
    name: "Jazz Fusion Night",
    slug: "jazz-fusion-night",
    city: "Austin",
    location: "Austin Jazz Lounge",
    date: "2030-11-29T00:00:00.000Z",
    organizerName: "Groove Masters Productions",
    imageUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Indulge in the smooth melodies and rhythmic beats of jazz fusion at Jazz Fusion Night. Experience world-class jazz performances, savor delicious cocktails, and immerse yourself in the soulful ambiance of live jazz music.",
  },
  {
    id: 7,
    name: "Indie Music Showcase",
    slug: "indie-music-showcase",
    city: "Austin",
    location: "Austin Indie Spot",
    date: "2030-11-25T00:00:00.000Z",
    organizerName: "Indie Vibes Records",
    imageUrl:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Discover the next big indie artists at the Indie Music Showcase. Experience live performances by emerging talents, support independent music, and be part of a vibrant community of music enthusiasts and artists.",
  },
  {
    id: 8,
    name: "Global Food Festival",
    slug: "global-food-festival",
    city: "Seattle",
    location: "Seattle Waterfront Park",
    date: "2030-10-30T00:00:00.000Z",
    organizerName: "Foodie Ventures Inc.",
    imageUrl:
      "https://images.unsplash.com/photo-1587407627257-27b7127c868c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Embark on a culinary journey around the world at the Global Food Festival. Delight your taste buds with international cuisines, cooking demonstrations, and food tastings. Experience the flavors of different cultures in one delicious event.",
  },
  {
    id: 9,
    name: "Tech Innovators Summit",
    slug: "tech-innovators-summit",
    city: "Seattle",
    location: "Seattle Convention Center",
    date: "2030-11-15T00:00:00.000Z",
    organizerName: "InnovateTech Inc.",
    imageUrl:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The Tech Innovators Summit is where visionaries, entrepreneurs, and tech enthusiasts converge. Explore the latest technological advancements, attend insightful keynotes from industry leaders, and participate in hands-on workshops. Connect with innovators, pitch your ideas, and be a part of shaping the future of technology.",
  },
  {
    id: 10,
    name: "Enchanted Garden Gala",
    slug: "enchanted-garden-gala",
    city: "Austin",
    location: "Austin Museum of Art",
    date: "2030-12-02T00:00:00.000Z",
    organizerName: "Cultural Garden Society",
    imageUrl:
      "https://images.unsplash.com/photo-1643759543584-fb6f448d42d4?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Step into a world of wonder at the Enchanted Garden Gala, a magical evening of art, music, and fantasy. Explore enchanting garden installations, experience live performances by world-class musicians and dancers, and indulge in gourmet delicacies. Dress in your most glamorous attire and immerse yourself in a night of elegance and enchantment.",
  },
  {
    id: 11,
    name: "Comedy Extravaganza",
    slug: "comedy-extravaganza",
    city: "Austin",
    location: "Austin Laugh Factory",
    date: "2030-11-06T00:00:00.000Z",
    organizerName: "Laugh Productions",
    imageUrl:
      "https://images.unsplash.com/photo-1601601392622-5d18104a78fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Prepare for a night of laughter with top comedians from around the world. Enjoy stand-up, improv, and sketches that will have you in stitches!",
  },
  {
    id: 12,
    name: "Science and Space Expo",
    slug: "science-space-expo",
    city: "Seattle",
    location: "Seattle Science Center",
    date: "2030-10-29T00:00:00.000Z",
    organizerName: "Cosmic Explorers Society",
    imageUrl:
      "https://images.unsplash.com/photo-1639323252613-00dd92e6c7d5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Explore the wonders of science and space at this interactive expo. Engage in hands-on experiments, meet scientists, and learn about the mysteries of the universe.",
  },
  {
    id: 13,
    name: "Fashion Runway",
    slug: "fashion-runway",
    city: "Austin",
    location: "Austin Fashion Week Venue",
    date: "2030-11-12T00:00:00.000Z",
    organizerName: "Chic Trends Agency",
    imageUrl:
      "https://images.unsplash.com/photo-1637351608361-5922d2c35117?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Witness the latest trends on the runway. Top designers will showcase their collections, setting the stage for the future of fashion.",
  },
  {
    id: 14,
    name: "Culinary Masterclass",
    slug: "culinary-masterclass",
    city: "Seattle",
    location: "Seattle Epicurean Institute",
    date: "2030-12-02T00:00:00.000Z",
    organizerName: "Gourmet Chefs Society",
    imageUrl:
      "https://images.unsplash.com/photo-1505714628981-7273be3e2bd7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Join renowned chefs for a culinary journey. Learn cooking techniques, taste exquisite dishes, and elevate your skills in the art of gastronomy.",
  },
  {
    id: 15,
    name: "Film Buffs Symposium",
    slug: "film-buffs-symposium",
    city: "Austin",
    location: "Austin Film Institute",
    date: "2030-11-08T00:00:00.000Z",
    organizerName: "Cinema Society",
    imageUrl:
      "https://images.unsplash.com/photo-1599641349225-b13923ac43a1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A gathering for film enthusiasts! Screen classic movies, engage in discussions with filmmakers, and gain insights into the world of cinema.",
  },
  {
    id: 16,
    name: "Literary Salon",
    slug: "literary-salon",
    city: "Seattle",
    location: "Seattle & Co. Bookstore",
    date: "2030-12-15T00:00:00.000Z",
    organizerName: "Words Society",
    imageUrl:
      "https://images.unsplash.com/photo-1625062084544-a0f93d639b93?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Celebrate the written word at this literary gathering. Listen to readings by acclaimed authors, participate in book discussions, and embrace the magic of storytelling.",
  },
  {
    id: 17,
    name: "Wellness Expo",
    slug: "wellness-expo",
    city: "Austin",
    location: "Austin Convention Center",
    date: "2030-11-30T00:00:00.000Z",
    organizerName: "Wellness Warriors Inc.",
    imageUrl:
      "https://images.unsplash.com/photo-1642784352859-fcae4af12c8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Immerse yourself in the world of fitness and well-being. Attend fitness classes, learn about nutrition, and explore holistic approaches to health.",
  },
  {
    id: 18,
    name: "Digital Art Symposium",
    slug: "digital-art-symposium",
    city: "Seattle",
    location: "Seattle Art Gallery",
    date: "2030-11-01T00:00:00.000Z",
    organizerName: "Tech Creatives Collective",
    imageUrl:
      "https://images.unsplash.com/photo-1642784353292-23a78b518be8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Discover the intersection of technology and art. Experience digital art installations, attend VR workshops, and meet digital artists pushing creative boundaries.",
  },
  {
    id: 19,
    name: "Dance Fusion Festival",
    slug: "dance-fusion-festival",
    city: "Austin",
    location: "Austin Street Dance Studio",
    date: "2030-11-28T00:00:00.000Z",
    organizerName: "Rhythm Revolution",
    imageUrl:
      "https://images.unsplash.com/photo-1510821733966-497ef399cacd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Experience a blend of dance styles from around the world. Participate in dance workshops, watch electrifying performances, and dance the night away.",
  },
];

async function main() {
  console.log(`Start seeding ...`);

  for (const event of events) {
    const result = await prisma.eventoEvent.upsert({
      where: { id: event.id },
      update: {},
      create: event,
    });
    console.log(`Created event with id: ${result.id}`);
  }

  console.log(`Seeding finished.`);
}

async function updateImgUrlForComedyExtravaganza() {
  const newImageUrl = "https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // replace with your new image URL
  try {
    const event = await prisma.eventoEvent.findUnique({
      where: { slug: "comedy-extravaganza" },
    });

    if (event) {
      await prisma.eventoEvent.update({
        where: { slug: "comedy-extravaganza" },
        data: { imageUrl: newImageUrl },
      });
      console.log(`Updated image URL for Comedy Extravaganza`);
    } else {
      console.log("Event not found");
    }
  } catch (error) {
    console.error("Error updating event:", error);
  }
}

main()
  .then(async () => {
    await updateImgUrlForComedyExtravaganza();
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });