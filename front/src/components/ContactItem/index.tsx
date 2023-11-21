import { IContactFromAPI } from "@/services/contactsServices";
import { Phone, Trash2 } from "lucide-react";
import { LabelComponent } from "../Label";
import { Button } from "../ui/button";

interface IContactItem {
  contact: IContactFromAPI;
  onDeleteButtonClick: (id: number | string) => void;
  onRowClick: (id: number | string) => void;
}

export const ContactItem = ({
  contact,
  onDeleteButtonClick,
  onRowClick,
}: IContactItem) => {
  return (
    <div
      className="
      grid
      grid-cols-[1fr_auto]
      gap-2
      cursor-pointer
      bg-white p-4 border-b border-slate-200 justify-center items-center"
      onClick={() => onRowClick(contact.id)}
    >
      <div className="grid grid-col-1 gap-1">
        <LabelComponent
          description={`${contact.first_name} ${contact.last_name}`}
        />
        <div className="grid gap-1 grid-cols-[auto_1fr] items-center">
          <Phone fill="#A7A7A6" stroke="none" size="16px" />
          <LabelComponent
            description={contact.phone_number}
            variant="small"
            color="grey"
          />
        </div>
      </div>
      <Button
        className="bg-red-500 hover:bg-red-700 px-3 py-2 z-10 "
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          event.stopPropagation();
          onDeleteButtonClick(contact.id);
        }}
      >
        <Trash2 size={16} />
      </Button>
    </div>
  );
};
