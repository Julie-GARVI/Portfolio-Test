import clsx from "clsx";
import { Typography } from "../typographie/typography";

interface Props {
    isLoading: boolean;
    placeholder: string;
    rows?: number;
    register: any;
    errors: any;
    id: string;
    required?: boolean;
    // isAutocompleted?: boolean;
    label?: string;
    pattern?: RegExp;
}
export const Textarea = ({
    isLoading,
    placeholder,
    rows = 5,
    register,
    errors,
    id,
    required = true, 
    // isAutocompleted = false,
    label,
    pattern,
    }: Props) => {
    return(
        <div className="space-y-2">
        {label && (
            <Typography 
            variant="caption"
            component="div"
            theme={errors[id] ? "primary-light" : "gray-600"}
            >
             {label} {" "} {required && <span className="text-primary-light">*</span>} 
            </Typography>
        )}

        <textarea 
            rows={rows}
            placeholder={placeholder}
            className={clsx(
                isLoading 
                    ? "bg-gray-300 focus:ring-gray-300 cursor-not-allowed" 
                    : "bg-white",
                errors[id] 
                    ? "placeholder-primary-light text-gray-500" 
                    : "placeholder-gray-600",
                "w-full p-4 font-light border rounded focus:outline-none focus:ring-1 focus:ring-primary-300 border-gray-300"
            )}
            disabled={isLoading}
            {...register(id, {
                required: {
                    value: required,
                    message: "Ce champ est obligatoire",
                },
                pattern: pattern && {
                    value: pattern,
                    message: "Les caractères particuliers ` ^ # $ ^ * \ { } | < > ~ ne sont pas acceptés",
                },
            })}
            // autoComplete={isAutocompleted ? "on" : "off"}

        />

        {errors[id] && (
                <Typography variant="caption" component="div" theme="primary-light">
                    {errors[id] ?.message}
                </Typography>
            )}  
        </div>
    )
}