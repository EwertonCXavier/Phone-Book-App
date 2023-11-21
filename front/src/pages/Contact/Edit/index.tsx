import { UncontrolledInput } from "@/components/Input/Uncontrolled";
import { Button } from "@/components/ui/button";
import contactsServices from "@/services/contactsServices";
import { IContactForm, contactFormValidation } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ButtonContainer, FormContainer } from "../styled";

interface IEditDialogContact {
  setDialogState: (value: boolean) => void;
  id: number | string;
}

export const EditContact = ({ setDialogState, id }: IEditDialogContact) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IContactForm>({
    resolver: zodResolver(contactFormValidation),
  });

  // Retrieves the contact
  const retrieveContactById = useCallback(async () => {
    const { data } = await contactsServices.retrieveContactById(id);
    setValue("firstName", data.first_name);
    setValue("lastName", data.last_name);
    setValue("phoneNumber", data.phone_number);
  }, [id, setValue]);

  useEffect(() => {
    retrieveContactById();
  }, [retrieveContactById]);
  const onSubmit = useCallback(
    async (data: IContactForm) => {
      try {
        console.log(data);
        await contactsServices.updateContactById(id, data);
        setDialogState(false);
      } catch (e: unknown) {
        if (e instanceof AxiosError) {
          console.log(e.message);
        }
      }
    },
    [id, setDialogState],
  );
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <UncontrolledInput
          name="firstName"
          register={register}
          label="First Name"
          errors={errors["firstName"]}
        />
        <UncontrolledInput
          name="lastName"
          register={register}
          label="Last Name"
          errors={errors["lastName"]}
        />
        <UncontrolledInput
          type="number"
          name="phoneNumber"
          register={register}
          label="Phone Number"
          errors={errors["phoneNumber"]}
        />
        <ButtonContainer>
          <Button type="submit" className="bg-blue-500 hover:bg-blue-700">
            Update Contact
          </Button>
        </ButtonContainer>
      </FormContainer>
    </form>
  );
};
