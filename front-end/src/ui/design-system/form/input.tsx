import clsx from "clsx";
import { Typography } from "../typographie/typography";

interface Props {
    isLoading: boolean;
    placeholder: string;
    type?: "text" | "email";
    register: any;
    errors: any;
    errorMsg?: string;
    id: string;
    required?: boolean;
    label?: string;
}

export const Input = ({
    isLoading = false,
    placeholder,
    type = "text",
    register,
    errors,
    errorMsg = "Ce champ est obligatoire",
    id,
    required = true,
    label,
}: Props) => {

    return (
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

            <div className="flex items-center">
                <input
                    type={type}
                    placeholder={placeholder}
                    className={clsx(
                        "rounded",
                        isLoading
                            ? "bg-gray-300 focus:ring-gray-300 cursor-not-allowed"
                            : "bg-white",
                        errors[id]
                            ? "placeholder-primary-light text-primary-light"
                            : "placeholder-gray-500",
                        "w-full p-3 font-light border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary-300"
                    )}
                    disabled={isLoading}
                    {...register(id, {
                        required: {
                            value: required,
                            message: errorMsg,
                        },
                    })}
                />
            </div>

            {errors[id] && (
                <Typography
                    variant="caption"
                    component="div"
                    theme="primary-light"
                >
                    {errors[id]?.message}
                </Typography>
            )}
        </div>
    );
};