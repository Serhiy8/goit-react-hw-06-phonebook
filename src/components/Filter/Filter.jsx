import { Label, Input } from 'components/App.styled';

const FilterByName = ({ onChange }) => {
  return (
    <>
      <Label>
        Find contact by name
        <Input type="text" onChange={onChange} />
      </Label>
    </>
  );
};

export default FilterByName;
