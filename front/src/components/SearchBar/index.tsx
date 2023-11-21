import { Plus, Search } from "lucide-react";
import { InputComponent } from "../Input";
import { LabelComponent } from "../Label";
import { Button } from "../ui/button";
import { SearchBar, SearchBarTitleRow } from "./styled";

interface ISearchBarComponent {
  lastNameFilter: string;
  setOpenCreateContactDialog: (
    value: boolean | ((value: boolean) => boolean),
  ) => void;
  handleLastNameChangeFilter: (value: string) => void;
}

export const SearchBarComponent = ({
  lastNameFilter,
  setOpenCreateContactDialog,
  handleLastNameChangeFilter,
}: ISearchBarComponent) => {
  return (
    <SearchBar>
      <SearchBarTitleRow>
        <LabelComponent description="Contacts" />
        <Button
          className="flex gap-2 bg-blue-500 hover:bg-blue-700"
          onClick={() => setOpenCreateContactDialog((prevState) => !prevState)}
        >
          <Plus fill={"bg-white"} />
          Add contact
        </Button>
      </SearchBarTitleRow>
      <InputComponent
        type="text"
        placeholder="Search for contact by last name"
        icon={<Search color="#bdbdbd" />}
        value={lastNameFilter}
        onChange={(event) => handleLastNameChangeFilter(event.target.value)}
      />
    </SearchBar>
  );
};
