import BlockEngageWithMe from '@/app/components/BlockEngageWithMe';

/**
 * @typedef {import("@prismicio/client").Content.EngageWIthMeSlice} EngageWIthMeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EngageWIthMeSlice>} EngageWIthMeProps
 * @param {EngageWIthMeProps}
 */
const EngageWIthMe = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <BlockEngageWithMe data={slice} />
    </section>
  );
};

export default EngageWIthMe;
