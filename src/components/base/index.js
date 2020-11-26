import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import Icon from '../icon';
import { icons } from '../../assets';
import styles, { HEIGHT } from './styles';

const BaseToast = (props) => {
  const { color, icon, text1, text2, onClose, onPress } = props;

  const baseStyle = [
    styles.base,
    styles.borderLeft,
    { borderLeftColor: color }
  ];

  return (
    <TouchableOpacity style={baseStyle} activeOpacity={1} onPress={onPress}>
      <View style={styles.iconContainer}>
        {icon ? (
          <Icon style={styles.icon} source={icon} />
        ) : (
          <View style={styles.icon} />
        )}
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.body}>
          {text1 !== undefined && (
            <View>
              <Text style={styles.text1} numberOfLines={1}>
                {text1}
              </Text>
            </View>
          )}
          {text2 !== undefined && (
            <View>
              <Text style={styles.text2} numberOfLines={2}>
                {text2}
              </Text>
            </View>
          )}
        </View>
      </View>

      <TouchableOpacity style={styles.closeButtonContainer} onPress={onClose}>
        <Icon style={styles.closeIcon} source={icons.close} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

BaseToast.HEIGHT = HEIGHT;

export default BaseToast;
