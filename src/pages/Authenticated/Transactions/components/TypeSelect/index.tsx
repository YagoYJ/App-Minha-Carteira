import React from "react";
import { Platform } from "react-native";
import ModalDropdown, { ModalDropdownProps } from "react-native-modal-dropdown";
import { theme } from "../../../../../theme";

interface TypeSelectProps extends ModalDropdownProps {
  type: string;
}

export default function TypeSelect({ type, ...rest }: TypeSelectProps) {
  return (
    <ModalDropdown
      {...rest}
      options={["Selecione", "Recebido", "Gasto", "Transferência"]}
      style={{
        width: "100%",
        padding: 15,
        borderWidth: 1,
        borderColor: "#d5dce4",
        borderRadius: 8,
        backgroundColor: "#ffffff",
      }}
      dropdownTextHighlightStyle={{
        color: type ? theme.default.colors.primary : theme.default.colors.gray,
      }}
      textStyle={{
        fontSize: 17,
        fontFamily: theme.default.fonts.rubikRegular,
        color: type ? theme.default.colors.primary : theme.default.colors.gray,
      }}
      dropdownStyle={{
        width: "90%",
        borderRadius: 8,
        marginLeft: -15,
        marginTop: Platform.OS === "ios" ? 15 : -15,
      }}
      dropdownTextStyle={{
        fontSize: 17,
        fontFamily: theme.default.fonts.rubikRegular,
      }}
    />
  );
}
