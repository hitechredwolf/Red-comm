import banner1 from "../components/images/Speaker banner1.jpg";
import banner2 from "../components/images/Speaker Banner 2.jpg";
import banner3 from "../components/images/Speaker banner3.jpg";
import banner4 from "../components/images/ecs.jpg";
import banner5 from "../components/images/LED TV Slider.jpg";
import banner6 from "../components/images/LED TV Slider2.jpg";




import m1 from "../components/images/Classic & Brass.jpg";
import m2 from "../components/images/Harmony X.jpg";
import m3 from "../components/images/Funk.jpg";
import m4 from "../components/images/Sonic 80.jpg";
import m5 from "../components/images/Trance Jr.jpg";
import m6 from "../components/images/Sonic 200.jpg";
import m7 from "../components/images/New Wave 100.jpg";
import m8 from "../components/images/K-POP.jpg";
import m9 from "../components/images/Rock & Roll.jpg";
import m10 from "../components/images/Trance.jpg";
import m11 from "../components/images/New Wave 200.jpg";
import m12 from "../components/images/Pulse Box.jpg";
import m13 from "../components/images/Remot.jpg";
import m14 from "../components/images/feturs.jpg";

import m15 from "../components/images/m15.jpeg";











// television import links
import tcom from "../components/images/tcom.jpg";
import tcom1 from "../components/images/1080(2).jpg";
import tcom2 from "../components/images/1080(3).jpg";
import tcom3 from "../components/images/1080(4).jpg";
import tcom4 from "../components/images/1080(5).jpg";
import tcom5 from "../components/images/1080(6).jpg";
import tcom4k6 from "../components/images/4k(6).jpg";
import tcom4k1 from "../components/images/4k(1).jpg";
import tcom4k2 from "../components/images/4k(2).jpg";
import tcom4k3 from "../components/images/4k(3).jpg";
import tcom4k4 from "../components/images/4k(4).jpg";
import tcom4k5 from "../components/images/4k(5).jpg";
import backled from "../components/images/Backled.jpg";

import detailscom from "../components/images/details e-com.jpg"
import detailscom4k from "../components/images/details 4kcom.jpg"
import remotcom from "../components/images/Remote E-com.jpg"
import viewtv from "../components/images/6.jpg"
import view7tv from "../components/images/7.jpg"
import view8tv from "../components/images/8.jpg"
import view9tv from "../components/images/9.jpg"
import view10tv from "../components/images/10.jpg"
import view13tv from "../components/images/13.jpg"
import view11tv from "../components/images/11.jpg"
import view12tv from "../components/images/12.jpg"


// Banner images array for speaker 
export const banners = [banner1, banner2, banner3];
//LUCKY
// Speaker products array
export const speakers = [

  {
    id: 1,
    name: "Classic & Brass",
    price: 2124,
    off: "₹20 off",
    category: "Portable",
    image: m1,
    image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      Type: "Portable Rechargeable Trolley Sound System",
      SpeakerSize: "4 Inches x 4 Inches",
      OutputSound: "12 Watt",
      Adaptor: "5 Volt (Type-C)",
      Battery: "2600 mAh Li-ion Battery",
      Height: "20 Inches",
      Support: ["USB", "TFLASH", "FM", "AUX", "MIC"],
      AuxConnection: "Yes",
      ProductHeight: "24 Inches",
      Backup: "4+ Hours",
      Warranty: "No Warranty",
      Features: ["Karaoke Support", "Wired Mic and Remote"]
    }
  },
  {
    id: 2,
    name: "Harmony X",
    price: 3965,
    off: "₹25 off",
    category: "Portable",
    image: m2,
    image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      Type: "Class AB Amplifier with High Bass Performance",
      OutputSound: "60 Watt RMS",
      WooferSize: "5.25 Inches",
      SpeakerSize: "3 Inches x 2 Pcs",
      ControlType: "Rotary",
      WireMicSocket: "Available",
      BluetoothConnectivity: "Yes",
      AuxConnection: "Yes",
      ProductHeight: "24 Inches",
      WoodenThickness: "7 MM",
      WoodenType: "MDF",
      WirelessMicAddOn: "Available",
      Warranty: "6 Months Warranty",
      Features: ["Bluetooth 5.0", "FM Support", "Karaoke Support", "Wireless Pairing of Two Sets"]
    }
  },
  {
    id: 3,
    name: "Funk",
    price: 5487,
    off: "₹30 off",
    category: "Home",
    image: m3,
    image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      Type: "Class AB Amplifier with High Bass Performance",
      PowerOutput: "50W RMS",
      SpeakerSize: "3 Inches x 2",
      WooferSize: "5.25 Inches",
      BassControl: "Rotary Type",
      WiredMic: "Included",
      RemoteControl: "Yes",
      ProductHeight: "24 Inches",
      VolumeControl: "Rotary Type",
      Warranty: "6 Months Warranty",
      Features: ["Karaoke Support", "Wired Mic and Remote", "Support: USB, AUX, MIC", "Bluetooth 5.0"]
    }
  },
  {
    id: 4,
    name: "Sonic80",
    price: 7965,
    off: "₹10 off",
    category: "Portable",
    image: m4,
    image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      Type: "Class AB Amplifier with High Bass Performance",
      OutputSound: "60 Watt RMS",
      WooferSize: "5.25 Inches",
      SpeakerSize: "3 Inches x 2 Pcs",
      ControlType: "Rotary",
      WireMicSocket: "Available",
      BluetoothConnectivity: "Yes",
      AuxConnection: "Yes",
      ProductHeight: "24 Inches",
      WoodenThickness: "7 MM",
      WoodenType: "MDF",
      WirelessMicAddOn: "Available",
      Warranty: "6 Months Warranty"
    }
  },
  {
    id: 5,
    name: "Trance Jr",
    price: 10089,
    off: "₹50 off",
    category: "Home",
    image: m5,
    image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      Type: "Class AB Amplifier with High Bass Performance",
      PowerOutput: "90W RMS",
      SpeakerSize: "4 Inches x 2 Pcs",
      WooferSize: "8 Inches x 1 Piece",
      BassControl: "Rotary Type",
      TweeterSize: "4 Inches",
      MultiModeRGBLight: "Yes",
      ProductHeight: "18.5 Inches",
      VolumeControl: "Rotary Type",
      Warranty: "6 Months Warranty",
      Features: ["Bluetooth 5.0", "FM Support", "Karaoke Support", "Wireless Mic", "Support: USB, AUX, MIC"]
    }
  },
  {
    id: 6,
    name: "Sonic 200",
    price: 12213,
    off: "₹40 off",
    category: "Car",
    image: m6,
    image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      Type: "Class AB Amplifier with High Bass Performance",
      PowerOutput: "120W RMS",
      SpeakerSize: "4 Inches x 2 Pcs",
      WooferSize: "8 Inches x 2 Pcs",
      BassControl: "Rotary Type",
      RemoteControl: "Yes",
      ProductHeight: "25 Inches",
      VolumeControl: "Rotary Type",
      Warranty: "6 Months Warranty",
      Features: ["Bluetooth 5.0", "FM Support", "Wireless Mic", "Support: USB, AUX, MIC"]
    }
  },
  {
    id: 7,
    name: "New Wave 100",
    price: 12567,
    off: "₹20 off",
    category: "Home",
    image: m7,
    image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      Type: "Class AB Amplifier Based On IC 7294",
      PowerOutput: "130 Watt RMS",
      WooferSize: "8 Inches x 2 Pcs",
      SpeakerSize: "4 Inches",
      ControlType: "Rotary",
      TweeterSize: "4 Inches",
      ProductHeight: "38 Inches",
      BassControl: "Rotary Type",
      WirelessMicAddOn: "With Remote",
      Warranty: "6 Months Warranty",
      Features: ["Bluetooth 5.0", "Support: USB, FM, AUX, MIC", "Support: Karaoke"]
    }
  },
  {
    id: 8,
    name: "K-POP",
    price: 13334,
    off: "₹35 off",
    category: "Car",
    image: m8,
    image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      Type: "Class AB Amplifier with High Bass Performance",
      OutputSound: "175 Watt RMS",
      WooferSize: "10 Inches",
      SpeakerSize: "4 Inches x 2 Pcs",
      ControlType: "Rotary",
      TweeterSize: "2.5 Inches",
      BluetoothConnectivity: "Yes",
      AuxConnection: "Yes",
      ProductHeight: "36 Inches",
      WoodenThickness: "11 MM",
      WoodenType: "MDF",
      WirelessMicAddOn: "Available",
      Warranty: "6 Months Warranty",
      Features: ["Bluetooth 5.0", "FM Support", "Karaoke Support", "Wireless Pairing of Two Sets"]
    }
  },
  {
    id: 9,
    name: "Rock & Roll",
    price: 15222,
    off: "₹15 off",
    category: "Portable",
    image: m9,
    image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      Type: "Class D Amplifier with High Bass Performance",
      OutputSound: "60 Watt RMS",
      WooferSize: "8 Inches x 2 Pcs",
      Battery: "10400 mAh 10 Amp",
      VolumeControl: "Rotary Type",
      WirelessMic: "Yes",
      Backup: "Up to 5 Hrs",
      SoundEqualizer: "Manual",
      InputPower: "9V DC",
      MicInSlot: "Yes",
      GuitarInSlot: "Yes",
      LedDisplay: "Big Information LED Display",
      RgbLightModes: "8 Modes",
      Warranty: "6 Months Warranty",
      Features: ["Bluetooth 5.0", "Karaoke Support", "Wireless Mic", "Support: USB, AUX, MIC"]
    }
  },
  {
    id: 10,
    name: "Trance",
    price: 17169,
    off: "₹60 off",
    category: "Home",
    image: m10,
    image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      Type: "Class AB Amplifier Based On IC 7294 with High Bass Performance",
      PowerOutput: "150W RMS",
      SpeakerSize: "4 Inches x 2 Pcs",
      WooferSize: "8 Inches x 2 Pcs",
      BassControl: "Rotary Type",
      TweeterSize: "4 Inches x 2 Pcs",
      RgbLight: "Programmed RGB Light",
      ProductHeight: "36 Inches",
      VolumeControl: "Rotary Type",
      Warranty: "6 Months Warranty",
      Features: ["Karaoke Support", "Wireless Mic and Remote", "Support: USB, AUX, MIC", "Bluetooth 5.0"]
    }
  },
  {
    id: 11,
    name: "New Wave 200",
    price: 16107,
    off: "₹45 off",
    category: "Car",
    image: m11,
    image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      Type: "Class AB Amplifier with High Bass Performance",
      PowerOutput: "150 Watt RMS",
      WooferSize: "8 Inches x 2 Bass",
      SpeakerSize: "4 Inches x 4",
      ControlType: "Rotary",
      ProductHeight: "32 Inches",
      VolumeControl: "Rotary Type",
      WirelessMicAddOn: "With Remote",
      RgbLightModes: "Multi Mode",
      Warranty: "6 Months Warranty",
      Features: ["Bluetooth 5.0", "FM Support", "Wireless Mic", "Support: USB, FM, AUX, MIC"]
    }
  },
  {
    id: 12,
    name: "Pulse Box",
    price: 17877,
    off: "₹30 off",
    category: "Home",
    image: m12,
    image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      Type: "Class AB Amplifier with High Bass Performance",
      PowerOutput: "250 Watt RMS",
      WooferSize: "10 Inches x 2 Pcs",
      SpeakerSize: "4 Inches x 2 Pcs",
      ControlType: "Rotary",
      WirelessMic: "Yes",
      BluetoothConnectivity: "Yes",
      AuxConnection: "Yes",
      ProductHeight: "36 Inches",
      WoodenThickness: "11 MM",
      WoodenType: "MDF",
      WirelessMicAddOn: "Available",
      Warranty: "6 Months Warranty",
      Features: ["Bluetooth 5.0", "FM Support", "Karaoke Support", "Wireless Mic", "Wireless Pairing of Two Sets"]
    }
  }
];
















export const banner = [banner4, banner5, banner6];







// export const televisions = [
//   {
//     id: 1,
//     name: "Red Wolf Normal LED TV(24 Inch)",
//     oldPrice: 15999,
//     newPrice: 10140,
//     discount: "22%",
//     size: "24 Inch",
//     type: "LED",
//     height: "35 cm",
//     outputSound: "20W",
//     aux: "Yes",
//     img: tcom,
//     images: [tcom, detailscom, remotcom, viewtv],
//     category: "webOS LED TV",
//     display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
//   },
//   {
//     id: 2,
//     name: "Red Wolf Smart LED TV(24 Inch)",
//     oldPrice: 21999,
//     newPrice: 11700,
//     discount: "27%",
//     size: "24 Inch",
//     type: "LED",
//     height: "35 cm",
//     outputSound: "20W",
//     aux: "Yes",
//     img: tcom1,
//     images: [
//       tcom1,
//       detailscom,
//       remotcom,
//       viewtv,
//       backled,
//     ],
//     category: "Smart LED TV",
//     display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
//   },
//   {
//     id: 4,
//     name: "Red Wolf Smart LED TV(32 Inch)",
//     oldPrice: 29999,
//     newPrice: 16120,
//     discount: "26%",
//     size: "32 Inch",
//     type: "LED",
//     height: "35 cm",
//     outputSound: "20W",
//     aux: "Yes",
//     img: tcom2,
//     images: [
//       tcom2,
//       detailscom,
//       remotcom,
//       view7tv,
//       backled,


//     ],
//     category: "Smart LED TV",
//     display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
//   },
//   {
//     id: 5,
//     name: "Red Wolf BTR LED TV(32 Inch)",
//     oldPrice: 34999,
//     newPrice: 17680,
//     discount: "25%",
//     size: "32 Inch",
//     type: "LED",
//     height: "35 cm",
//     outputSound: "20W",
//     aux: "Yes",
//     img: tcom3,
//     images: [
//       tcom3,
//       detailscom,
//       remotcom,
//       view7tv,
//       backled,
//     ],
//     category: "BTR LED TV",
//     display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
//   },
//   {
//     id: 6,
//     name: "Red Wolf Smart LED TV(43 Inch)",
//     oldPrice: 39999,
//     newPrice: 27040,
//     discount: "25%",
//     size: "43 Inch",
//     type: "LED",
//     height: "35 cm",
//     outputSound: "20W",
//     aux: "Yes",
//     img: tcom4,
//     images: [
//       tcom4,
//       detailscom,
//       remotcom,
//       view8tv,
//       backled,
//     ],
//     category: "Smart LED TV",
//     display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
//   },
//   {
//     id: 7,
//     name: "Red Wolf BTR LED TV(43 Inch)",
//     oldPrice: 44999,
//     newPrice: 28340,
//     discount: "24%",
//     size: "43 Inch",
//     type: "LED",
//     height: "35 cm",
//     outputSound: "20W",
//     aux: "Yes",
//     img: tcom5,
//     images: [
//       tcom5,
//       detailscom,
//       remotcom,
//       view8tv,
//       backled,
//     ],
//     category: "BTR LED TV",
//     display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
//   },
//   {
//     id: 3,
//     name: "Red Wolf Android LED TV(55 Inch)",
//     oldPrice: 24999,
//     newPrice: 58500,
//     discount: "28%",
//     size: "55 Inch",
//     type: "LED",
//     height: "35 cm",
//     outputSound: "20W",
//     aux: "Yes",
//     img: tcom4k6,
//     images: [
//       tcom4k6,
//       detailscom4k,
//       remotcom,
//       view9tv,
//       backled,
//     ],
//     category: "Android LED TV",
//     display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
//   },
//   {
//     id: 8,
//     name: "Red Wolf webOS LED TV(55 Inch)",
//     oldPrice: 49999,
//     newPrice: 65000,
//     discount: "24%",
//     size: "55 Inch",
//     type: "LED",
//     height: "35 cm",
//     outputSound: "20W",
//     aux: "Yes",
//     img: tcom4k1,
//     images: [
//       tcom4k1,
//       detailscom4k,
//       remotcom,
//       view9tv,
//       backled,
//     ],
//     category: "webOS LED TV",
//     display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
//   },
//   {
//     id: 9,
//     name: "Red Wolf webOS LED TV(65 Inch)",
//     oldPrice: 54999,
//     newPrice: 70200,
//     discount: "25%",
//     size: "65 Inch",
//     type: "LED",
//     height: "35 cm",
//     outputSound: "20W",
//     aux: "Yes",
//     img: tcom4k2,
//     images: [
//       tcom4k2,
//       detailscom4k,
//       remotcom,
//       view10tv,
//       backled,
//     ],
//     category: "webOS LED TV",
//     display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
//   },
//   {
//     id: 10,
//     name: "Red Wolf webOS LED TV(75 Inch)",
//     oldPrice: 59999,
//     newPrice: 101400,
//     discount: "25%",
//     size: "75 Inch",
//     type: "LED",
//     height: "35 cm",
//     outputSound: "20W",
//     aux: "Yes",
//     img: tcom4k3,
//     images: [
//       tcom4k3,
//       detailscom4k,
//       remotcom,
//       view11tv,
//       backled,
//     ],
//     category: "webOS LED TV",
//     display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
//   },
//   {
//     id: 11,
//     name: "Red Wolf webOS LED TV(85 Inch)",
//     oldPrice: 15999,
//     newPrice: 179400,
//     discount: "25%",
//     size: "85 Inch",
//     type: "LED",
//     height: "35 cm",
//     outputSound: "20W",
//     aux: "Yes",
//     img: tcom4k4,
//     images: [
//       tcom4k4,
//       detailscom4k,
//       remotcom,
//       view12tv,
//       backled,
//     ],
//     category: "webOS LED TV",
//     display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
//   },
//   {
//     id: 12,
//     name: "Red Wolf webOS LED TV(98 Inch)",
//     oldPrice: 21999,
//     newPrice: 370500,
//     discount: "27%",
//     size: "98 Inch",
//     type: "LED",
//     height: "35 cm",
//     outputSound: "20W",
//     aux: "Yes",
//     img: tcom4k5,
//     images: [
//       tcom4k5,
//       detailscom4k,
//       remotcom,
//       view13tv,
//       backled,
//     ],
//     category: "webOS LED TV",
//     display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
//   },
// ];








export const televisions = [
  {
    id: 1,
    name: "Red Wolf Normal LED TV(24 Inch)",
    oldPrice: 15999,
    newPrice: 10140,
    discount: "22%",
    size: "24 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom,
    images: [tcom, detailscom, remotcom, viewtv],
    category: "webOS LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
    specifications: {
      DisplayType: "LED",
      ScreenSize: "24 Inches",
      Resolution: "1280x960",
      DisplayFeatures: "Full HD Features",
      BuiltInWoofer: "Yes, powerful bass with slim design",
      ClearResolutionEnhancer: "Detailed TV pictures",
      PowerSupply: "50-60Hz, AC 100-240V",
      Connectivity: "2x HDMI, 2x USB, 1x Earphone, 1x VGA",
      SelectableSoundModes: "5",
      AudioOutput: "10 Watts",
      FeaturesFunctionality: "Gaming TV Units",
      Color: "Black",
      Warranty: "1 Year"
    }
  },
  {
    id: 2,
    name: "Red Wolf Smart LED TV(24 Inch)",
    oldPrice: 21999,
    newPrice: 11700,
    discount: "27%",
    size: "24 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom1,
    images: [tcom1, detailscom, remotcom, viewtv, backled],
    category: "Smart LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
    specifications: {
      DisplayType: "LED",
      ScreenSize: "24 Inches",
      Resolution: "1280x960",
      DisplayFeatures: "Full HD Features",
      BuiltInWoofer: "Yes, powerful bass with slim design",
      ClearResolutionEnhancer: "Detailed TV pictures",
      PowerSupply: "50-60Hz, AC 100-240V",
      Connectivity: "2x HDMI, 2x USB, 1x Earphone, 1x VGA",
      SelectableSoundModes: "5",
      AudioOutput: "10 Watts",
      RAM: "512 MB",
      InternalMemory: "4 GB",
      FeaturesFunctionality: "Smart TV Units",
      Color: "Black",
      Warranty: "1 Year"
    }
  },
  {
    id: 3,
    name: "Red Wolf Android LED TV(55 Inch)",
    oldPrice: 24999,
    newPrice: 58500,
    discount: "28%",
    size: "55 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom4k6,
    images: [tcom4k6, detailscom4k, remotcom, view9tv, backled],
    category: "Android LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
    specifications: {
      DisplayType: "LED",
      ScreenSize: "55 Inches",
      Resolution: "1920x1080 (4K Ultra HD)",
      DisplayFeatures: "Ultra HD Features",
      Processor: "Quad Core",
      OperatingSystem: "Android 6.0",
      PowerSupply: "50-60Hz, AC 100-240V",
      Connectivity: "3x HDMI, 3x USB, 1x Earphone, 3x VGA",
      SelectableSoundModes: "5",
      AudioOutput: "12 Watts",
      RAM: "2 GB",
      InternalMemory: "16 GB",
      FeaturesFunctionality: "Android Smart TV Units",
      Color: "Black",
      Warranty: "1 Year"
    }
  },
  {
    id: 4,
    name: "Red Wolf Smart LED TV(32 Inch)",
    oldPrice: 29999,
    newPrice: 16120,
    discount: "26%",
    size: "32 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom2,
    images: [tcom2, detailscom, remotcom, view7tv, backled],
    category: "Smart LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
    specifications: {
      DisplayType: "LED",
      ScreenSize: "32 Inches",
      Resolution: "1280x960",
      DisplayFeatures: "Full HD Features",
      BuiltInWoofer: "Yes, powerful bass with slim design",
      ClearResolutionEnhancer: "Detailed TV pictures",
      PowerSupply: "50-60Hz, AC 100-240V",
      Connectivity: "2x HDMI, 2x USB, 1x Earphone, 1x VGA",
      SelectableSoundModes: "5",
      AudioOutput: "10 Watts",
      RAM: "512 MB",
      InternalMemory: "4 GB",
      FeaturesFunctionality: "Smart TV Units",
      Color: "Black",
      Warranty: "1 Year"
    }
  },
  {
    id: 5,
    name: "Red Wolf BTR LED TV(32 Inch)",
    oldPrice: 34999,
    newPrice: 17680,
    discount: "25%",
    size: "32 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom3,
    images: [tcom3, detailscom, remotcom, view7tv, backled],
    category: "BTR LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
    specifications: {
      DisplayType: "LED",
      ScreenSize: "32 Inches",
      Resolution: "HD",
      Design: "Frameless Smart LED TV",
      Connectivity: "2x HDMI, 2x USB, Built-in Chromecast",
      ViewingAngle: "Wide Viewing Angle",
      SmartFeatures: "Google Assistant, Play Store, Voice Remote",
      RAM: "1 GB",
      InternalMemory: "8 GB",
      AudioOutput: "20 Watts",
      FeaturesFunctionality: "Smart Entertainment & Voice Control",
      Color: "Black",
      Warranty: "1 Year"
    }
  },
  {
    id: 6,
    name: "Red Wolf Smart LED TV(43 Inch)",
    oldPrice: 39999,
    newPrice: 27040,
    discount: "25%",
    size: "43 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom4,
    images: [tcom4, detailscom, remotcom, view8tv, backled],
    category: "Smart LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
    specifications: {
      DisplayType: "LED",
      ScreenSize: "43 Inches",
      Resolution: "Full HD",
      Design: "Frameless Smart LED TV",
      Connectivity: "2x HDMI, 2x USB",
      SmartFeatures: "Play Store, Google Assistant",
      RAM: "512 MB",
      InternalMemory: "4 GB",
      AudioOutput: "20 Watts",
      FeaturesFunctionality: "Smart TV with voice control support",
      Color: "Black",
      Warranty: "1 Year"
    }
  },
  {
    id: 7,
    name: "Red Wolf BTR LED TV(43 Inch)",
    oldPrice: 44999,
    newPrice: 28340,
    discount: "24%",
    size: "43 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom5,
    images: [tcom5, detailscom, remotcom, view8tv, backled],
    category: "BTR LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
    specifications: {
      DisplayType: "LED",
      ScreenSize: "43 Inches",
      Resolution: "4K Ultra HD",
      Design: "Frameless Smart LED TV",
      AudioTechnology: "Dolby Audio",
      Connectivity: "3x HDMI, 2x USB, Dual Band Wi-Fi (5GHz/2.4GHz)",
      SmartFeatures: "Google Assistant, Voice Remote",
      RAM: "1 GB",
      InternalMemory: "8 GB",
      AudioOutput: "20 Watts",
      FeaturesFunctionality: "Smart 4K Entertainment with Voice Control",
      Color: "Black",
      Warranty: "1 Year"
    }
  },
  {
    id: 8,
    name: "Red Wolf webOS LED TV(55 Inch)",
    oldPrice: 49999,
    newPrice: 65000,
    discount: "24%",
    size: "55 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom4k1,
    images: [tcom4k1, detailscom4k, remotcom, view9tv, backled],
    category: "webOS LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
    specifications: {
      DisplayType: "LED",
      ScreenSize: "55 Inches",
      Resolution: "4K Ultra HD",
      Design: "Frameless 4K Ultra HD Display",
      AudioTechnology: "Dolby Audio",
      Connectivity: "3x HDMI, 2x USB, Dual Band Wi-Fi (5GHz/2.4GHz)",
      SmartFeatures: "Google Assistant, Voice Remote, webOS Platform",
      RAM: "2 GB",
      InternalMemory: "16 GB",
      AudioOutput: "20 Watts",
      FeaturesFunctionality: "Smart 4K Entertainment with webOS and Voice Control",
      Color: "Black",
      Warranty: "1 Year"
    }
  },
  {
    id: 9,
    name: "Red Wolf webOS LED TV(65 Inch)",
    oldPrice: 54999,
    newPrice: 70200,
    discount: "25%",
    size: "65 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom4k2,
    images: [tcom4k2, detailscom4k, remotcom, view10tv, backled],
    category: "webOS LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
    specifications: {
      DisplayType: "LED",
      ScreenSize: "65 Inches",
      Resolution: "4K Ultra HD",
      Design: "Frameless 4K Ultra HD Display",
      AudioTechnology: "Dolby Audio",
      Connectivity: "3x HDMI, 2x USB, Dual Band Wi-Fi (5GHz/2.4GHz)",
      SmartFeatures: "Google Assistant, Voice Remote, webOS Platform",
      RAM: "2 GB",
      InternalMemory: "16 GB",
      AudioOutput: "20 Watts",
      FeaturesFunctionality: "Smart 4K Entertainment with webOS and Voice Control",
      Color: "Black",
      Warranty: "1 Year"
    }
  },
  {
    id: 10,
    name: "Red Wolf webOS LED TV(75 Inch)",
    oldPrice: 59999,
    newPrice: 101400,
    discount: "25%",
    size: "75 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom4k3,
    images: [tcom4k3, detailscom4k, remotcom, view11tv, backled],
    category: "webOS LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
    specifications: {
      DisplayType: "LED",
      ScreenSize: "75 Inches",
      Resolution: "4K Ultra HD",
      Design: "Frameless 4K Ultra HD Display",
      AudioTechnology: "Dolby Audio",
      Connectivity: "3x HDMI, 2x USB, Dual Band Wi-Fi (5GHz/2.4GHz)",
      SmartFeatures: "Google Assistant, Voice Remote, webOS Platform",
      RAM: "2 GB",
      InternalMemory: "16 GB",
      AudioOutput: "20 Watts",
      FeaturesFunctionality: "Smart 4K Entertainment with webOS and Voice Control",
      Color: "Black",
      Warranty: "1 Year"
    }
  },
  {
    id: 11,
    name: "Red Wolf webOS LED TV(85 Inch)",
    oldPrice: 15999,
    newPrice: 179400,
    discount: "25%",
    size: "85 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom4k4,
    images: [tcom4k4, detailscom4k, remotcom, view12tv, backled],
    category: "webOS LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
    specifications: {
      DisplayType: "LED",
      ScreenSize: "85 Inches",
      Resolution: "4K Ultra HD",
      Design: "Frameless 4K Ultra HD Display",
      AudioTechnology: "Dolby Audio",
      Connectivity: "3x HDMI, 2x USB, Dual Band Wi-Fi (5GHz/2.4GHz)",
      SmartFeatures: "Google Assistant, Voice Remote, webOS Platform",
      RAM: "2 GB",
      InternalMemory: "16 GB",
      AudioOutput: "20 Watts",
      FeaturesFunctionality: "Smart 4K Entertainment with webOS and Voice Control",
      Color: "Black",
      Warranty: "1 Year"
    }
  },
  {
    id: 12,
    name: "Red Wolf webOS LED TV(98 Inch)",
    oldPrice: 21999,
    newPrice: 370500,
    discount: "27%",
    size: "98 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom4k5,
    images: [tcom4k5, detailscom4k, remotcom, view13tv, backled],
    category: "webOS LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
    specifications: {
      DisplayType: "LED",
      ScreenSize: "98 Inches",
      Resolution: "4K Ultra HD",
      Design: "Frameless 4K Ultra HD Display",
      AudioTechnology: "Dolby Audio",
      Connectivity: "3x HDMI, 2x USB, Dual Band Wi-Fi (5GHz/2.4GHz)",
      SmartFeatures: "Google Assistant, Voice Remote, webOS Platform",
      RAM: "2 GB",
      InternalMemory: "16 GB",
      AudioOutput: "20 Watts",
      FeaturesFunctionality: "Smart 4K Entertainment with webOS and Voice Control",
      Color: "Black",
      Warranty: "1 Year"
    }
  },
];




































// Banner images array
// export const banners = [banner1, banner2, banner3];

// Speaker products array
// export const speakers = [
//   {
//     id: 1,
//     name: "Classic & Brass",
//     price: 120,
//     category: "Portable",
//     image: m1,
//     image1: m2,
//     image2: m3,
//     image3: m4,
//     specifications: {
//       type: "Portable Rechargeable Trolley Sound System",
//       outputSound: "12 Watt",
//       speakerSize: "4 inches x 4 inches",
//       adaptor: "5 Volt (Type-C)",
//       battery: "2600 mAh Li-ion Battery",
//       height: "20 Inches",
//       support: ["USB", "TFLASH", "FM", "AUX", "MIC"],
//       auxConnection: true,
//       productHeight: "24 Inches",
//       backup: "4+ Hours"
//     }
//   },
//   {
//     id: 2,
//     name: "Harmony X",
//     price: 150,
//     category: "Portable",
//     image: m2,
//     image1: m2,
//     image2: m3,
//     image3: m4,
//     specifications: {
//       type: "Portable Rechargeable Trolley Sound System",
//       outputSound: "12 Watt",
//       speakerSize: "4 inches x 4 inches",
//       adaptor: "5 Volt (Type-C)",
//       battery: "2600 mAh Li-ion Battery",
//       height: "20 Inches",
//       support: ["USB", "TFLASH", "FM", "AUX", "MIC"],
//       auxConnection: true,
//       productHeight: "24 Inches",
//       backup: "4+ Hours"
//     }
//   },
//   {
//     id: 3,
//     name: "Funk",
//     price: 200,
//     category: "Home",
//     image: m3,
//     image1: m2,
//     image2: m3,
//     image3: m4,
//     specifications: {
//       type: "Portable Rechargeable Trolley Sound System",
//       outputSound: "12 Watt",
//       speakerSize: "4 inches x 4 inches",
//       adaptor: "5 Volt (Type-C)",
//       battery: "2600 mAh Li-ion Battery",
//       height: "20 Inches",
//       support: ["USB", "TFLASH", "FM", "AUX", "MIC"],
//       auxConnection: true,
//       productHeight: "24 Inches",
//       backup: "4+ Hours"
//     }
//   },
//   {
//     id: 4,
//     name: "Sonic80",
//     price: 90,
//     category: "Portable",
//     image: m4,
//     image1: m2,
//     image2: m3,
//     image3: m4,
//     specifications: {
//       type: "Portable Rechargeable Trolley Sound System",
//       outputSound: "12 Watt",
//       speakerSize: "4 inches x 4 inches",
//       adaptor: "5 Volt (Type-C)",
//       battery: "2600 mAh Li-ion Battery",
//       height: "20 Inches",
//       support: ["USB", "TFLASH", "FM", "AUX", "MIC"],
//       auxConnection: true,
//       productHeight: "24 Inches",
//       backup: "4+ Hours"
//     }
//   },
//   {
//     id: 5,
//     name: "Trance Jr",
//     price: 300,
//     category: "Home",
//     image: m5,
//     image1: m2,
//     image2: m3,
//     image3: m4,
//     specifications: {
//       type: "Portable Rechargeable Trolley Sound System",
//       outputSound: "12 Watt",
//       speakerSize: "4 inches x 4 inches",
//       adaptor: "5 Volt (Type-C)",
//       battery: "2600 mAh Li-ion Battery",
//       height: "20 Inches",
//       support: ["USB", "TFLASH", "FM", "AUX", "MIC"],
//       auxConnection: true,
//       productHeight: "24 Inches",
//       backup: "4+ Hours"
//     }
//   },
//   {
//     id: 6,
//     name: "Sonic 200",
//     price: 250,
//     category: "Car",
//     image: m6,
//     image1: m2,
//     image2: m3,
//     image3: m4,
//     specifications: {
//       type: "Portable Rechargeable Trolley Sound System",
//       outputSound: "12 Watt",
//       speakerSize: "4 inches x 4 inches",
//       adaptor: "5 Volt (Type-C)",
//       battery: "2600 mAh Li-ion Battery",
//       height: "20 Inches",
//       support: ["USB", "TFLASH", "FM", "AUX", "MIC"],
//       auxConnection: true,
//       productHeight: "24 Inches",
//       backup: "4+ Hours"
//     }
//   },
//   {
//     id: 7,
//     name: "New Wave 100",
//     price: 180,
//     category: "Home",
//     image: m7,
//     image1: m2,
//     image2: m3,
//     image3: m4,
//     specifications: {
//       type: "Portable Rechargeable Trolley Sound System",
//       outputSound: "12 Watt",
//       speakerSize: "4 inches x 4 inches",
//       adaptor: "5 Volt (Type-C)",
//       battery: "2600 mAh Li-ion Battery",
//       height: "20 Inches",
//       support: ["USB", "TFLASH", "FM", "AUX", "MIC"],
//       auxConnection: true,
//       productHeight: "24 Inches",
//       backup: "4+ Hours"
//     }
//   },
//   {
//     id: 8,
//     name: "K-POP",
//     price: 220,
//     category: "Car",
//     image: m8,
//     image1: m2,
//     image2: m3,
//     image3: m4,
//     specifications: {
//       type: "Portable Rechargeable Trolley Sound System",
//       outputSound: "12 Watt",
//       speakerSize: "4 inches x 4 inches",
//       adaptor: "5 Volt (Type-C)",
//       battery: "2600 mAh Li-ion Battery",
//       height: "20 Inches",
//       support: ["USB", "TFLASH", "FM", "AUX", "MIC"],
//       auxConnection: true,
//       productHeight: "24 Inches",
//       backup: "4+ Hours"
//     }
//   },
//   {
//     id: 9,
//     name: "Rock & Roll",
//     price: 130,
//     category: "Portable",
//     image: m9,
//     image1: m2,
//     image2: m3,
//     image3: m4,
//     specifications: {
//       type: "Portable Rechargeable Trolley Sound System",
//       outputSound: "12 Watt",
//       speakerSize: "4 inches x 4 inches",
//       adaptor: "5 Volt (Type-C)",
//       battery: "2600 mAh Li-ion Battery",
//       height: "20 Inches",
//       support: ["USB", "TFLASH", "FM", "AUX", "MIC"],
//       auxConnection: true,
//       productHeight: "24 Inches",
//       backup: "4+ Hours"
//     }
//   },
//   {
//     id: 10,
//     name: "Trance",
//     price: 400,
//     category: "Home",
//     image: m10,
//     image1: m2,
//     image2: m3,
//     image3: m4,
//     specifications: {
//       type: "Portable Rechargeable Trolley Sound System",
//       outputSound: "12 Watt",
//       speakerSize: "4 inches x 4 inches",
//       adaptor: "5 Volt (Type-C)",
//       battery: "2600 mAh Li-ion Battery",
//       height: "20 Inches",
//       support: ["USB", "TFLASH", "FM", "AUX", "MIC"],
//       auxConnection: true,
//       productHeight: "24 Inches",
//       backup: "4+ Hours"
//     }
//   },
//   {
//     id: 11,
//     name: "New Wave 200",
//     price: 350,
//     category: "Car",
//     image: m11,
//     image1: m2,
//     image2: m3,
//     image3: m4,
//     specifications: {
//       type: "Portable Rechargeable Trolley Sound System",
//       outputSound: "12 Watt",
//       speakerSize: "4 inches x 4 inches",
//       adaptor: "5 Volt (Type-C)",
//       battery: "2600 mAh Li-ion Battery",
//       height: "20 Inches",
//       support: ["USB", "TFLASH", "FM", "AUX", "MIC"],
//       auxConnection: true,
//       productHeight: "24 Inches",
//       backup: "4+ Hours"
//     }
//   },
//   {
//     id: 12,
//     name: "Pulse Box",
//     price: 275,
//     category: "Home",
//     image: m12,
//     image1: m2,
//     image2: m3,
//     image3: m4,
//     specifications: {
//       type: "Portable Rechargeable Trolley Sound System",
//       outputSound: "12 Watt",
//       speakerSize: "4 inches x 4 inches",
//       adaptor: "5 Volt (Type-C)",
//       battery: "2600 mAh Li-ion Battery",
//       height: "20 Inches",
//       support: ["USB", "TFLASH", "FM", "AUX", "MIC"],
//       auxConnection: true,
//       productHeight: "24 Inches",
//       backup: "4+ Hours"
//     }
//   }
// ];