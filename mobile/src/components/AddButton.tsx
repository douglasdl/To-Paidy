import { Text, TouchableOpacity } from "react-native";

interface IAddButton {
  onAdd?: () => void;
}

export function AddButton({ onAdd }: IAddButton) {
  return (
    <TouchableOpacity
      className="flex items-center justify-center w-12 h-12 bg-paidy-logo rounded-xl"
      onPress={onAdd}
    >
      <Text className="text-paidy-header font-extrabold text-2xl">
        ＋
      </Text>
    </TouchableOpacity>
  );
}