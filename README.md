# Expo-React-Native-Barcode-Scanner
Welcome to the Expo-React-Native-Barcode-Scanner-Component wiki!

# Installations
Add these libraries to your project

expo install expo-barcode-scanner<br>
expo install expo-camera

Drag and drop all directories and files into your Expo components directory

# Usage

import BarcodeScanner from '../components/BarcodeScanner'; //top of your code page, you can edit where your file is
<br><br>
const GetBarcode=(data:any)=>{
   console.log(data)
}
<BarcodeScanner onBarCodeScanned={(data:any)=>{GetBarcode(data)}} title="Open Barcode Scanner" /> //add this code, where you want to use
