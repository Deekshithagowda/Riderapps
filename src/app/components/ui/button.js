import { useState } from "react";
import { Button as ButtonMB } from "react-native-paper";
import { color } from "../../utils/styles/colors";
import { Text } from "react-native";

export const Button = ({
  title,
  buttonColor = color.primary,
  onPress,
  loading,
  disabled,
  ...props
}) => {
  const [loader, setLoader] = useState(false);
  const onPressHandler = async () => {
    loading && setLoader(true);
    onPress && (await onPress());
    setLoader(false);
  };

  return (
    <ButtonMB
      {...props}
      buttonColor={buttonColor}
      loading={loader}
      style={{ ...props, justifyContent: 'center', alignItems: 'center' }}
      disabled={disabled || loader}
      onPress={onPressHandler}
    >
      <Text style={props}>
        {title}

      </Text>
    </ButtonMB>
  );
};
