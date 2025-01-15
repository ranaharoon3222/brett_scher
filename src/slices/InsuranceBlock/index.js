import BlockRealEstate from '@/app/components/BlockRealEstate';

/**
 * @typedef {import("@prismicio/client").Content.InsuranceBlockSlice} InsuranceBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InsuranceBlockSlice>} InsuranceBlockProps
 * @param {InsuranceBlockProps}
 */
const InsuranceBlock = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <BlockRealEstate data={slice} />
    </section>
  );
};

export default InsuranceBlock;
