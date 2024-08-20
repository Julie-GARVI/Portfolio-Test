export interface FormType {
    control?: any;
    onSubmit: any;
    errors: any;
    isLoading: boolean;
    register: any;
    handleSubmit: any;
}

export interface ContactFormFielsType {
    lastname: string;
    firstname: string;
    email: string;
    content: string;
}