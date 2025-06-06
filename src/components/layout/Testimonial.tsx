import { TestimonialCarousel } from "./CareQualityCardMobile";

const Testimonial = () => {
  //  testimonial data for mobile
  const testimonials = [
    {
      title: "Top Quality",
      description:
        "Everyone, and I mean everyone; from the managers, to the worker and non-staff were very professional. The house is so gorgeous my wife can’t stop gushing over it. Quality is out of this world. Top job!..",
      name: "Efisah. J",
    },
    {
      title: "Top Quality",
      description:
        "Everyone, and I mean everyone; from the managers, to the worker and non-staff were very professional. The house is so gorgeous my wife can’t stop gushing over it. Quality is out of this world. Top job!..",
      name: "Efisah. J",
    },
    {
      title: "Top Quality",
      description:
        "Everyone, and I mean everyone; from the managers, to the worker and non-staff were very professional. The house is so gorgeous my wife can’t stop gushing over it. Quality is out of this world. Top job!.",
      name: "Efisah. J",
    },
    {
      title: "Top Quality",
      description:
        "Everyone, and I mean everyone; from the managers, to the worker and non-staff were very professional. The house is so gorgeous my wife can’t stop gushing over it. Quality is out of this world. Top job!.",
      name: "Efisah. J",
    },

    {
      title: "Top Quality",
      description:
        "Everyone, and I mean everyone; from the managers, to the worker and non-staff were very professional. The house is so gorgeous my wife can’t stop gushing over it. Quality is out of this world. Top job!.",
      name: "Efisah. J",
    },
  ];

  return (
    <div className="p-12">
      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
};

export default Testimonial;
