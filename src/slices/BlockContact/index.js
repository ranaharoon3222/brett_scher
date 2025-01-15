import Contact from '@/app/components/Contact';

/**
 * @typedef {import("@prismicio/client").Content.BlockContactSlice} BlockContactSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlockContactSlice>} BlockContactProps
 * @param {BlockContactProps}
 */
const BlockContact = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Contact data={slice} />
    </section>
  );
};

export default BlockContact;
