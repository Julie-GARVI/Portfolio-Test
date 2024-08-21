import clsx from "clsx";
interface Props {
    variant?: 
        | "heading1"       
        | "heading2"   
        | "heading3" 
        | "subtitle"       
        | "caption"        
        | "body-base"
        | "body-sm"; 
    component?: 
        "h1" 
        | "h2" 
        | "h3" 
        | "h4" 
        | "div" 
        | "p" 
        | "span" 
        | "ul" 
    theme?: 
        "black" 
        | "gray-700" 
        | "white" 
        | "primary-light" 
        | "primary-dark" 
        | "danger" 

    weight?: "regular" | "medium" | "semiBold";
    shadow?: "none" | "shadow"; 
    className?: string,
    children: React.ReactNode;
}

export const Typography = ({
    variant = "heading2", 
    component: Component = "h2",
    theme = "black",
    weight = "regular",
    className,
    shadow = "none",
    children
}:Props) => {

    let variantStyles: string = "", colorStyles: string = "",  weightStyles: string = "",  shadowStyles: string = "";

    switch(variant) {
        case "heading1":
            variantStyles = "text-5xl md:text-6xl"
            break;
        case "heading2"://Default
            variantStyles = "text-4xl md:text-5xl"
            break;
        case "heading3":
            variantStyles = "text-3xl md:text-4xl"
            break;
        case "subtitle":
            variantStyles = "text-2xl md:text-3xl"
            break;
        case "caption":
            variantStyles = "text-base md:text-lg"
            break;
        case "body-base":
            variantStyles = "text-sm md:text-base"
            break;
        case "body-sm":
            variantStyles = "text-sm md:sm"
            break;
        }

        switch(theme) {
            case "black": // Default
                colorStyles = "text-black";
                break;
            case "gray-700":
                colorStyles = "text-gray-700";
                break;
            case "white":
                colorStyles = "text-white";
                break;
            case "primary-light":
                colorStyles = "text-primary-light";
                break;
            case "primary-dark":
                colorStyles = "text-primary-dark";
                break;
            case "danger":
                colorStyles="text-alert-danger";
                break;
        }

    switch(weight) {
        case "semiBold":
            weightStyles = "font-semiBold";
            break;
        case "medium":
            weightStyles = "font-medium";
            break;
        case "regular": // Default
            weightStyles = "font-normal";
            break;
    }

    switch(shadow) {
        case "shadow":
            shadowStyles = "text-shadow-md";
            break;
        case "none":
            shadowStyles = "text-shadow-none";
            break;
    }
    
    return(
        <Component className={clsx(
            variantStyles,
            colorStyles, 
            weightStyles,
            shadowStyles,
            className, 
        )}>
            {children}
        </Component>
    )
}
