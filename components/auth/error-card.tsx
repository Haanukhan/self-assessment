import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CardWrapper } from "@/components/auth/card-wrapper";
export const ErrorCard = () => {
  return (
    <CardWrapper
      backButtonHref="/auth/login"
      headerLabel="Oops! Something went wrong!"
      backButtonLabel="Back to Login"
    >
      <div className="w-full items-center flex justify-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};
