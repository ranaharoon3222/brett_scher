import BlockAboutPage from '@/app/components/BlockAboutPage';

/**
 * @typedef {import("@prismicio/client").Content.AboutBlockSlice} AboutBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutBlockSlice>} AboutBlockProps
 * @param {AboutBlockProps}
 */
const AboutBlock = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <BlockAboutPage data={slice} />
    </section>
  );
};

export default AboutBlock;
