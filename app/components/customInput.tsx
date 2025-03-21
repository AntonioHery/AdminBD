import { TextInput, PasswordInput, TextInputProps } from "@mantine/core";

export const CustomTextInput: React.FC<TextInputProps> = ({ ...props }) => {
  return (
    <TextInput
      classNames={{
        input: " focus:border-[#8931b2] focus:border-2 outline-none",
        root: "w-full",
      }}
      {...props}
    />
  );
};

export const CustomPasswordInput  = ({ ...props }) => {
  return (
    <PasswordInput
      classNames={{
        input: "focus-within:border-[#8931b2] focus-within:border-2 outline-none",
        root: "w-full",
        label: "",
      }}
      {...props}
    />
  );
};
