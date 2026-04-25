import { freelanceSectionItems } from "@/src/data/data";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function FreelancerDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ FIX: await params
  const { slug } = await params;

  const work = freelanceSectionItems.find(
    (item) => item.slug === slug
  );

  if (!work) return notFound();

  return (
    <section className="container py-20 mt-10">
      <h1 className="text-3xl text-white mb-4">{work.title}</h1>

      <p className="text-neutral-400 mb-10">{work.description}</p>

      <div className="grid md:grid-cols-2 gap-6">
        {work.gallery.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={work.title}
            width={600}
            height={400}
            className="w-full object-cover rounded-xl"
          />
        ))}
      </div>
    </section>
  );
}