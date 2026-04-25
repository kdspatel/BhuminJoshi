import { freelanceSectionItems } from "@/src/data/data";
import FreelancerCard from "@/src/components/FreelancerCard";

const WorkPage = () => {
  return (
    <section className="container py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {freelanceSectionItems.map((item) => (
        <FreelancerCard
          key={item.id}
          imgUrl={item.imgUrl}
          title={item.title}
          date={item.date}
          slug={item.slug}
        />
      ))}
    </section>
  );
};

export default WorkPage;