//HOOKS
import {  SubmitHandler, useForm } from "react-hook-form";
import { useToggle } from "@/hooks/use-toggle";

//TYPE
import { ContactFormFielsType } from "@/types/form";

//VUE
import { ContactView } from "./contact.view"

export const ContactContainer = () => {
    const { value: isLoading, setValue: setIsLoading } = useToggle({ initial: false });

    // Temporary placeholder values and functions
    const register = () => {};
    const handleSubmit = (callback: SubmitHandler<ContactFormFielsType>) => (event: React.FormEvent) => {
  
        const formData: ContactFormFielsType = {
            name: "test",
            firstname: "test",
            email: "test@test.com",
            message: "test message",
        };
        callback(formData);
    };
    const errors = {};
    const setError = () => {};
    const reset = () => {};

    const handleSubmitContactForm = async ({
        name,
        firstname,
        email,
        message
    }: ContactFormFielsType) => {
        // Handle form submission logic here
    };

    const onSubmit: SubmitHandler<ContactFormFielsType> = async (formData) => {
        setIsLoading(false);
        console.log("Form Data:", formData);
        await handleSubmitContactForm(formData);
    };

    return (
        <ContactView
            form={{
                register,
                errors,
                onSubmit,
                handleSubmit: handleSubmit(onSubmit),
                isLoading,
            }}
        />
    );
};