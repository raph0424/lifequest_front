import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

type XpCircleProps = {
  size?: number;
  strokeWidth?: number;
  percentage: number; // 0 à 100
};

export default function XpCircle({ size = 120, strokeWidth = 10, percentage }: XpCircleProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - percentage / 100);

  return (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
      <Svg width={size} height={size}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#FFD700" />
            <Stop offset="100%" stopColor="#FF5722" />
          </LinearGradient>
        </Defs>

        <Circle
          stroke="url(#grad)"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          rotation={-90}
          originX={size / 2}
          originY={size / 2}
        />
      </Svg>

      <Text style={styles.percentageText}>{Math.round(percentage)}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  percentageText: {
    position: 'absolute',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
