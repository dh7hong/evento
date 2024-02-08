export type EventoEvent = {
  id: number;
  name: string;
  slug: string;
  city: string;
  location: string;
  date: Date;
  organizerName: string;
  imageUrl: string;
  description: string;
};

// now we are going to import the type from prisma 
// prisma automatically when I ran the command
// npx prisma db push, will actualy create a type
// out of this as well that we can use