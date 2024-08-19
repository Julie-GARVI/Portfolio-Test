//Type
import { FormType } from "@/types/form";

//Vues
import { BackgroundView } from "./components/background/background.view"
import { FormContactView } from "./components/contact-form/form-contact";

interface Props {
    form: FormType;
}

export const ContactView = ({form}:Props) => {
    return (
        <>
            <BackgroundView />
            <FormContactView form={form}/>
        </>
    )
}