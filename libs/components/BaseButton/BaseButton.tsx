import { BaseButtonProps } from "./BaseButton.static";

const BaseButton: React.FC<BaseButtonProps> = ({ children, ...props }) => {
  return (
    <View>
      <Text>BaseButton</Text>
    </View>
  );
};

export default BaseButton;
