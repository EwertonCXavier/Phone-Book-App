import { UncontrolledInput } from "@/components/Input/Uncontrolled";
import { Button } from "@/components/ui/button";
import contactsServices from "@/services/contactsServices";
import { IContactForm, contactFormValidation } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { ButtonContainer, FormContainer } from "../styled";

interface IDialogContact {
  setDialogState: (value: boolean) => void;
}

export const CreateContact = ({ setDialogState }: IDialogContact) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>({
    resolver: zodResolver(contactFormValidation),
  });
  const onSubmit = async (data: IContactForm) => {
    try {
      console.log(data);
      await contactsServices.createContact(data);
      setDialogState(false);
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        console.log(e.message);
      }
    }
  };
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
            Register
          </Button>
        </ButtonContainer>
      </FormContainer>
    </form>
  );
};
