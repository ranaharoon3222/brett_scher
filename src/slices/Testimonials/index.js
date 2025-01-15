import BlockTestimonials from '@/app/components/BlockTestimonials';

/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSlice} TestimonialsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSlice>} TestimonialsProps
 * @param {TestimonialsProps}
 */
const Testimonials = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <BlockTestimonials data={slice} />
    </section>
  );
};

export default Testimonials;
