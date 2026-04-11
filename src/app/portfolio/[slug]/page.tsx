import Image from "next/image";
import { notFound } from "next/navigation";
import { portfolioSectionItems } from "@/src/data/data";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PortfolioDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  const project = portfolioSectionItems.find((item) => item.slug === slug);

  if (!project) return notFound();

  return (
    <section className="text-white py-16 mt-20">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-serif mb-4">
          {project.title}
        </h1>

        {/* Category */}
        <p className="text-center text-sm text-white-500 mb-2">
          {project.category}
        </p>

        {/* Location */}
        {project.location && (
          <p className="text-center text-white mb-6">{project.location}</p>
        )}

        {/* Description */}
        <p className="text-center max-w-3xl mx-auto text-white-700 mb-12 leading-relaxed">
          {project.description}
        </p>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {project.gallery.map((img, index) => (
              <div
                key={index}
                className="break-inside-avoid overflow-hidden rounded-xl shadow-md bg-white"
              >
                <Image
                  src={img}
                  alt={`${project.title} ${index + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
