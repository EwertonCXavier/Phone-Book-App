import { DialogComponent } from "@/components/Dialog";
import { SearchBarComponent } from "@/components/SearchBar";
import { ModalContent } from "@/layouts/DeleteModal";
import contactsServices, { IContactFromAPI } from "@/services/contactsServices";
import { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import { ReactComponent as BookIcon } from "../../assets/icon.svg";
import { ContactItem } from "../../components/ContactItem";
import { CreateContact } from "../Contact/Create";
import { EditContact } from "../Contact/Edit";
import { Card, CardHeader } from "./styled";
export const Home = () => {
  const [contacts, setContacts] = useState<IContactFromAPI[]>([]);
  const [openCreateContactDialog, setOpenCreateContactDialog] =
    useState<boolean>(false);
  const [openEditContactDialog, setOpenEditContactDialog] =
    useState<boolean>(false);
  const [idToBeDeleted, setIdToBeDeleted] = useState<number | string>(-1);
  const [selectedContactListId, setSelectedContactListId] = useState<
    number | string
  >(-1);
  const [openDialogForContactDeletion, setOpenDialogForContactDeletion] =
    useState<boolean>(false);
  const [lastNameFilter, setLastNameFilter] = useState<string>("");

  const retrieveAllContacts = useCallback(async () => {
    const {
      data,
    }: {
      data: IContactFromAPI[];
    } = await contactsServices.retrieveAllContacts({
      filter: lastNameFilter !== "" ? lastNameFilter : undefined,
    });
    console.log(data);
    setContacts(data);
  }, [lastNameFilter]);

  // Create Contact Dialog Close
  const handleDialogClose = useCallback(() => {
    setOpenCreateContactDialog(false);
    setOpenEditContactDialog(false);
    retrieveAllContacts();
  }, [retrieveAllContacts]);
  // Contact Edition
  const handleContactListRowClick = (id: number | string) => {
    setOpenEditContactDialog(true);
    setSelectedContactListId(id);
  };

  // Contact Deletion
  const handleDeleteButtonClick = (id: number | string) => {
    setIdToBeDeleted(id);
    setOpenDialogForContactDeletion(true);
  };

  const handleLastNameChangeFilter = useCallback((value: string) => {
    setLastNameFilter(value);
  }, []);

  const onContactDeletion = async (id: number | string) => {
    try {
      await contactsServices.deleteContactById(id);
      retrieveAllContacts();
      setOpenDialogForContactDeletion(false);
    } catch (e) {
      if (e instanceof AxiosError) {
        console.log(e.message);
      }
    }
  };

  useEffect(() => {
    retrieveAllContacts();
  }, [retrieveAllContacts]);

  return (
    <Card>
      <CardHeader>
        <BookIcon />
        <span>Phone Book App</span>
      </CardHeader>
      <SearchBarComponent
        handleLastNameChangeFilter={handleLastNameChangeFilter}
        lastNameFilter={lastNameFilter}
        setOpenCreateContactDialog={setOpenCreateContactDialog}
      />
      <div className="grid overflow-auto">
        {contacts.map((contact) => (
          <ContactItem
            key={contact.phone_number}
            contact={contact}
            onDeleteButtonClick={handleDeleteButtonClick}
            onRowClick={handleContactListRowClick}
          />
        ))}
      </div>
      {/* Dialog structure */}

      {/* Create contact structure */}
      <DialogComponent
        open={openCreateContactDialog}
        onOpenChange={setOpenCreateContactDialog}
        title="Create Contact"
      >
        <CreateContact setDialogState={handleDialogClose} />
      </DialogComponent>
      {/* Create contact structure */}
      <DialogComponent
        open={openEditContactDialog}
        onOpenChange={setOpenEditContactDialog}
        title={`Edit Contact ${selectedContactListId}`}
      >
        <EditContact
          setDialogState={handleDialogClose}
          id={selectedContactListId}
        />
      </DialogComponent>
      {/* Delete contact structure */}
      <DialogComponent
        open={openDialogForContactDeletion}
        onOpenChange={setOpenDialogForContactDeletion}
        title="Delete Contact"
      >
        <ModalContent
          idToBeDeleted={idToBeDeleted}
          onContactDeletion={onContactDeletion}
          setOpenDialogForContactDeletion={setOpenDialogForContactDeletion}
        />
      </DialogComponent>
    </Card>
  );
};
