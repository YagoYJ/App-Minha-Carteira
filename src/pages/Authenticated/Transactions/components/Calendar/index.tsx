import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import CalendarPicker, {
  CalendarPickerProps,
} from "react-native-calendar-picker";
import { theme } from "../../../../../theme";

export default function Calendar({ ...rest }: CalendarPickerProps) {
  return (
    <CalendarPicker
      {...rest}
      headerWrapperStyle={{
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
      dayLabelsWrapper={{ justifyContent: "space-between" }}

      selectedDayColor={theme.default.colors.lightPrimary}
      selectedDayTextColor={theme.default.colors.white}
      weekdays={["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]}
      selectMonthTitle="Selecione o mês de "
      monthTitleStyle={{
        color: theme.default.colors.primary,
      }}
      months={[
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ]}
      selectYearTitle="Selecione o ano"
      yearTitleStyle={{
        color: theme.default.colors.primary,
      }}
      maxDate={new Date(Date.now())}
      nextComponent={
        <MaterialIcons
          name="keyboard-arrow-right"
          size={30}
          color={theme.default.colors.primary}
        />
      }
      previousComponent={
        <MaterialIcons
          name="keyboard-arrow-left"
          size={30}
          color={theme.default.colors.primary}
        />
      }
    />
  );
}
