import BlockAbout from '@/app/components/BlockAbout';

/**
 * @typedef {import("@prismicio/client").Content.CertifiedDistributionSlice} CertifiedDistributionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CertifiedDistributionSlice>} CertifiedDistributionProps
 * @param {CertifiedDistributionProps}
 */
const CertifiedDistribution = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <BlockAbout />
    </section>
  );
};

export default CertifiedDistribution;
