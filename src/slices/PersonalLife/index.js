import BlockPersonalLife from '@/app/components/PersonalLife';

/**
 * @typedef {import("@prismicio/client").Content.PersonalLifeSlice} PersonalLifeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PersonalLifeSlice>} PersonalLifeProps
 * @param {PersonalLifeProps}
 */
const PersonalLife = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <BlockPersonalLife data={slice} />
    </section>
  );
};

export default PersonalLife;
