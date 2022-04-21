import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from "./styles";
const RedButton = (props: any) => {
    const { onPress, title, style, size, disable, activityIndicator, isSquare, textCenter } = props;
    return (
        <TouchableOpacity style={[styles.redBtn, { ...isSquare ? { width: 120, height: 120 } : null }, { ...style ? style : null }, disable ? { backgroundColor: "lightgrey" } : null]} disabled={disable ? disable : false} onPress={onPress}>
            <Text style={[styles.redBtnText, { ...size == "small" ? { fontSize: 10 } : null }, { ...textCenter  ? { textAlign: "center" } : null }]}>{activityIndicator ? <ActivityIndicator size="large" color="#ffffff" /> : title}</Text>
        </TouchableOpacity>
    );
}
const GreenButton = (props: any) => {
    const { onPress, title, style, size, disable, activityIndicator, isSquare, textCenter } = props;
    return (
        <TouchableOpacity style={[styles.greenBtn, { ...isSquare ? { width: 120, height: 120 } : null }, { ...style ? style : null }, disable ? { backgroundColor: "lightgrey" } : null]} disabled={disable ? disable : false} onPress={onPress}>
            <Text style={[styles.greenBtnText, { ...size == "small" ? { fontSize: 10 } : null }, { ...textCenter  ? { textAlign: "center" } : null }]}>{activityIndicator ? <ActivityIndicator size="large" color="#ffffff" /> : title}</Text>
        </TouchableOpacity>
    );
}
const WhiteButton = (props: any) => {
    const { onPress, title, style, size, disable, activityIndicator, isSquare, textCenter } = props;
    return (
        <TouchableOpacity style={[styles.whiteBtn, { ...isSquare ? { width: 120, height: 120 } : null }, { ...style ? style : null }, disable ? { backgroundColor: "lightgrey" } : null]} disabled={disable ? disable : false} onPress={onPress}>
            <Text style={[styles.whiteBtnText, { ...size == "small" ? { fontSize: 10 } : null }, { ...textCenter  ? { textAlign: "center" } : null }]}>{activityIndicator ? <ActivityIndicator size="large" color="#ff0000" /> : title}</Text>
        </TouchableOpacity>
    );
}
const BlueButton = (props: any) => {
    const { onPress, title, style, size, disable, activityIndicator, isSquare, textCenter } = props;
    return (
        <TouchableOpacity style={[styles.blueBtn, { ...isSquare ? { width: 120, height: 120 } : null }, { ...style ? style : null }, disable ? { backgroundColor: "#597aa4" } : null]} disabled={disable ? disable : false} onPress={onPress}>
            <Text style={[styles.blueBtnText, { ...size == "small" ? { fontSize: 10 } : null }, { ...textCenter  ? { textAlign: "center" } : null }]}>{activityIndicator ? <ActivityIndicator size="large" color="#002c66" /> : title}</Text>
        </TouchableOpacity>
    );
}
export { RedButton, GreenButton, WhiteButton, BlueButton };