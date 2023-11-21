import { Button } from "@/components/ui/button";

interface IModalContent {
  onContactDeletion: (id: number | string) => void;
  setOpenDialogForContactDeletion: (value: boolean) => void;
  idToBeDeleted: number | string;
}

export const ModalContent = ({
  onContactDeletion,
  setOpenDialogForContactDeletion,
  idToBeDeleted,
}: IModalContent) => {
  return (
    <>
      <span>
        Do you really want to delete the contact &apos;{idToBeDeleted}
        &apos;? This action is permanent
      </span>
      <div className="flex justify-end gap-2">
        <Button
          variant="ghost"
          className="text-blue-600 hover:text-gray-700"
          onClick={() => setOpenDialogForContactDeletion(false)}
        >
          Cancel
        </Button>
        <Button
          className="bg-red-600 hover:bg-red-800"
          onClick={() => onContactDeletion(idToBeDeleted)}
        >
          Delete
        </Button>
      </div>
    </>
  );
};
