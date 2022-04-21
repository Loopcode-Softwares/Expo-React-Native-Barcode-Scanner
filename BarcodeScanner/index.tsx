import React, { useEffect, useRef, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BlueButton } from '../Buttons';
import { StyleSheet, View, Text} from 'react-native';
import styles from './styles';
export default function BarcodeScanner(props:any){
    const {title,onBarCodeScanned}=props;
    const [hasCameraPermission, setHasCameraPermission] = useState<Boolean | null>(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const cam = useRef<Camera | null>();
    const [showCameraStatus, setShowCameraStatus] = useState(false);
    const [barcode, setBarcode] = useState("");
    const [scanned, setScanned] = useState(false);
    const [scannerVisible, setScannerVisible] = useState(false);
    const [hasPermission, setHasPermission] = useState(false);
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(status === 'granted');
        })();
        permissionCameraFunction();
    }, []);
    const showCamera = () => {
        showCameraStatus ? setShowCameraStatus(false) : setShowCameraStatus(true);       
    }
    const permissionCameraFunction = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    };
    const toggleScanner = () => {
        scannerVisible ? setScannerVisible(false) : setScannerVisible(true);
    }
    const handleBarCodeScanned = ({ type, data }: any) => {
        setScanned(true);
        setScannerVisible(false);
        setBarcode(data);
        onBarCodeScanned(data);
        //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
    
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return(
        <View style={styles.container}>
            <View style={styles.directionBtns}>
                    <BlueButton onPress={() => { toggleScanner(); setScanned(false); }} title={[<MaterialCommunityIcons name="barcode-scan" size={24} color="white" />, ...title?title:""]} style={{ marginTop: 0 }} />
                </View>
                <View style={[scannerVisible ? { width: 300, height: 300 } : { display: "none" } ]}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={StyleSheet.absoluteFillObject}
                    />
                </View>
        </View>
    );
}