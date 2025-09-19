import banner1 from "../components/images/Speaker banner1.jpg";
import banner2 from "../components/images/Speaker Banner 2.jpg";
import banner3 from "../components/images/Speaker banner3.jpg";
import banner4 from "../components/images/Festival Electronics Banner.jpg";
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

import m15 from "../components/images/m15.jpg";











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
    price: 120,
    off: "₹20 off",
    category: "Portable",
    image: m1,
    image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      type: "Portable Rechargeable Trolley Sound System",
      speakerSize: "4 inches x 4 inches",
      outputSound: "12 Watt",
      adaptor: "5 Volt (Type-C)",
      battery: "2600 mAh Li-ion Battery",
      height: "20 Inches",
      support: ["USB", "TFLASH", "FM", "AUX", "MIC"],
      auxConnection: "Yes",
      productHeight: "24 Inches",
      backup: "4+ Hours",
      warranty: "No Warranty",
      features: ["Karaoke Support", "Wired Mic and Remote"]
    }
  },
  {
    id: 2,
    name: "Harmony X",
    price: 150,
    off: "₹25 off",
    category: "Portable",
    image: m2,
   image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      type: "Class AB Amplifier with High Bass Performance",
      outputSound: "60 Watt RMS",
      wooferSize: "5.25 Inches",
      speakerSize: "3 inches x 2 Pcs",
      controlType: "Rotary",
      wireMicSocket: "Available",
      bluetoothConnectivity: "Yes",
      auxConnection: "Yes",
      productHeight: "24 Inches",
      woodenThickness: "7 MM",
      woodenType: "MDF",
      wirelessMicAddOn: "Available",
      warranty: "6 Months Warranty",
      features: ["Bluetooth 5.0", "FM Support", "Karaoke Support", "Wireless Pairing of Two Sets"]
    }
  },
  {
    id: 3,
    name: "Funk",
    price: 200,
    off: "₹30 off",
    category: "Home",
    image: m3,
     image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      type: "Class AB Amplifier with High Bass Performance",
      powerOutput: "50W RMS",
      speakerSize: "3 inches x 2",
      wooferSize: "5.25 Inches",
      bassControl: "Rotary Type",
      wiredMic: "Included",
      remoteControl: "Yes",
      productHeight: "24 Inches",
      volumeControl: "Rotary Type",
      warranty: "6 Months Warranty",
      features: ["Karaoke Support", "Wired Mic and Remote", "Support: USB, AUX, MIC", "Bluetooth 5.0"]
    }
  },
  {
    id: 4,
    name: "Sonic80",
    price: 90,
    off: "₹10 off",
    category: "Portable",
    image: m4,
     image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      type: "Class AB Amplifier with High Bass Performance",
      outputSound: "60 Watt RMS",
      wooferSize: "5.25 Inches",
      speakerSize: "3 inches x 2 Pcs",
      controlType: "Rotary",
      wireMicSocket: "Available",
      bluetoothConnectivity: "Yes",
      auxConnection: "Yes",
      productHeight: "24 Inches",
      woodenThickness: "7 MM",
      woodenType: "MDF",
      wirelessMicAddOn: "Available",
      warranty: "6 Months Warranty"
    }
  },
  {
    id: 5,
    name: "Trance Jr",
    price: 300,
    off: "₹50 off",
    category: "Home",
    image: m5,
     image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      type: "Class AB Amplifier with High Bass Performance",
      powerOutput: "90W RMS",
      speakerSize: "4 inches x 2 Pcs",
      wooferSize: "8 Inches x 1 Piece",
      bassControl: "Rotary Type",
      tweeterSize: "4 Inches",
      multiModeRGBLight: "Yes",
      productHeight: "18.5 Inches",
      volumeControl: "Rotary Type",
      warranty: "6 Months Warranty",
      features: ["Bluetooth 5.0", "FM Support", "Karaoke Support", "Wireless Mic", "Support: USB, AUX, MIC"]
    }
  },
  {
    id: 6,
    name: "Sonic 200",
    price: 250,
    off: "₹40 off",
    category: "Car",
    image: m6,
   image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      type: "Class AB Amplifier with High Bass Performance",
      powerOutput: "120W RMS",
      speakerSize: "4 inches x 2 Pcs",
      wooferSize: "8 Inches x 2 Pcs",
      bassControl: "Rotary Type",
      remoteControl: "Yes",
      productHeight: "25 Inches",
      volumeControl: "Rotary Type",
      warranty: "6 Months Warranty",
      features: ["Bluetooth 5.0", "FM Support", "Wireless Mic", "Support: USB, AUX, MIC"]
    }
  },
  {
    id: 7,
    name: "New Wave 100",
    price: 180,
    off: "₹20 off",
    category: "Home",
    image: m7,
    image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      type: "Class AB Amplifier Based On IC 7294",
      powerOutput: "130 Watt RMS",
      wooferSize: "8 Inches x 2 Pcs",
      speakerSize: "4 Inches",
      controlType: "Rotary",
      tweeterSize: "4 Inches",
      productHeight: "38 Inches",
      bassControl: "Rotary Type",
      wirelessMicAddOn: "With Remote",
      warranty: "6 Months Warranty",
      features: ["Bluetooth 5.0", "Support: USB, FM, AUX, MIC", "Support: Karaoke"]
    }
  },
  {
    id: 8,
    name: "K-POP",
    price: 220,
    off: "₹35 off",
    category: "Car",
    image: m8,
    image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      type: "Class AB Amplifier with High Bass Performance",
      outputSound: "175 Watt RMS",
      wooferSize: "10 Inches",
      speakerSize: "4 Inches x 2 Pcs",
      controlType: "Rotary",
      tweeterSize: "2.5 Inches",
      bluetoothConnectivity: "Yes",
      auxConnection: "Yes",
      productHeight: "36 Inches",
      woodenThickness: "11 MM",
      woodenType: "MDF",
      wirelessMicAddOn: "Available",
      warranty: "6 Months Warranty",
      features: ["Bluetooth 5.0", "FM Support", "Karaoke Support", "Wireless Pairing of Two Sets"]
    }
  },
  {
    id: 9,
    name: "Rock & Roll",
    price: 130,
    off: "₹15 off",
    category: "Portable",
    image: m9,
     image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      type: "Class D Amplifier with High Bass Performance",
      outputSound: "60 Watt RMS",
      wooferSize: "8 Inches x 2 Pcs",
      battery: "10400 mAh 10 Amp",
      volumeControl: "Rotary Type",
      wirelessMic: "Yes",
      backup: "Up to 5 Hrs",
      soundEqualizer: "Manual",
      inputPower: "9V DC",
      micInSlot: "Yes",
      guitarInSlot: "Yes",
      ledDisplay: "Big Information LED Display",
      rgbLightModes: "8 Modes",
      warranty: "6 Months Warranty",
      features: ["Bluetooth 5.0", "Karaoke Support", "Wireless Mic", "Support: USB, AUX, MIC"]
    }
  },
  {
    id: 10,
    name: "Trance",
    price: 400,
    off: "₹60 off",
    category: "Home",
    image: m10,
    image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      type: "Class AB Amplifier Based On IC 7294 with High Bass Performance",
      powerOutput: "150W RMS",
      speakerSize: "4 inches x 2 Pcs",
      wooferSize: "8 Inches x 2 Pcs",
      bassControl: "Rotary Type",
      tweeterSize: "4 Inches x 2 Pcs",
      rgbLight: "Programmed RGB Light",
      productHeight: "36 Inches",
      volumeControl: "Rotary Type",
      warranty: "6 Months Warranty",
      features: ["Karaoke Support", "Wireless Mic and Remote", "Support: USB, AUX, MIC", "Bluetooth 5.0"]
    }
  },
  {
    id: 11,
    name: "New Wave 200",
    price: 350,
    off: "₹45 off",
    category: "Car",
    image: m11,
     image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      type: "Class AB Amplifier with High Bass Performance",
      powerOutput: "150 Watt RMS",
      wooferSize: "8 Inches x 2 Bass",
      speakerSize: "4 Inches x 4",
      controlType: "Rotary",
      productHeight: "32 Inches",
      volumeControl: "Rotary Type",
      wirelessMicAddOn: "With Remote",
      rgbLightModes: "Multi Mode",
      warranty: "6 Months Warranty",
      features: ["Bluetooth 5.0", "FM Support", "Wireless Mic", "Support: USB, FM, AUX, MIC"]
    }
  },
  {
    id: 12,
    name: "Pulse Box",
    price: 275,
    off: "₹30 off",
    category: "Home",
    image: m12,
     image1: m15,
    image2: m13,
    image3: m14,
    specifications: {
      type: "Class AB Amplifier with High Bass Performance",
      powerOutput: "250 Watt RMS",
      wooferSize: "10 Inches x 2 Pcs",
      speakerSize: "4 inches x 2 Pcs",
      controlType: "Rotary",
      wirelessMic: "Yes",
      bluetoothConnectivity: "Yes",
      auxConnection: "Yes",
      productHeight: "36 Inches",
      woodenThickness: "11 MM",
      woodenType: "MDF",
      wirelessMicAddOn: "Available",
      warranty: "6 Months Warranty",
      features: ["Bluetooth 5.0", "FM Support", "Karaoke Support", "Wireless Mic", "Wireless Pairing of Two Sets"]
    }
  }
















  // {
  //   id: 1,
  //   name: "Classic & Brass",
  //   price: 120,
  //   off: "₹20 off",
  //   category: "Portable",
  //   image: m1,
  //   image1: m2,
  //   image2: m13,
  //   image3: m14,
  //   specifications: {
  //     type: "Portable Rechargeable Trolley Sound System",
  //     outputSound: "12 Watt",
  //     speakerSize: "4 inches x 4 inches",
  //     adaptor: "5 Volt (Type-C)",
  //     battery: "2600 mAh Li-ion Battery",
  //     height: "20 Inches",
  //     support: ["USB", "TFLASH", "FM", "AUX", "MIC"],
  //     auxConnection: "Yes",
  //     productHeight: "24 Inches",
  //     backup: "4+ Hours",
  //     warranty: "No Warranty"
  //   }
  // },
  // {
  //   id: 2,
  //   name: "Harmony X",
  //   price: 150,
  //   off: "₹25 off",
  //   category: "Portable",
  //   image: m2,
  //   image1: m2,
  //   image2: m13,
  //   image3: m14,
  //   specifications: {
  //     type: "Class AB Amplifier with High Bass Performance",
  //     outputSound: "60 Watt RMS",
  //     wooferSize: "5.25 Inches",
  //     speakerSize: "3 inches x 2 Pcs",
  //     controlType: "Rotary",
  //     wireMicSocket: "Available",
  //     bluetoothConnectivity: "Yes",
  //     auxConnection: "Yes",
  //     productHeight: "24 Inches",
  //     woodenThickness: "7 MM",
  //     woodenType: "MDF",
  //     wirelessMicAddOn: "Available",
  //     warranty: "6 Months Warranty"
  //   }
  // },
  // {
  //   id: 3,
  //   name: "Funk",
  //   price: 200,
  //   off: "₹30 off",
  //   category: "Home",
  //   image: m3,
  //   image1: m2,
  //   image2: m13,
  //   image3: m14,
  //   specifications: {
  //     type: "Class AB Amplifier with High Bass Performance",
  //     powerOutput: "50W RMS",
  //     speakerSize: "3 inches x 2",
  //     wooferSize: "5.25 Inches",
  //     bassControl: "Rotary Type",
  //     wiredMic: "Included",
  //     remoteControl: "Yes",
  //     productHeight: "24 Inches",
  //     volumeControl: "Rotary Type",
  //     warranty: "6 Months Warranty"
  //   }
  // },
  // {
  //   id: 4,
  //   name: "Sonic80",
  //   price: 90,
  //   off: "₹10 off",
  //   category: "Portable",
  //   image: m4,
  //   image1: m2,
  //   image2: m13,
  //   image3: m14,
  //   specifications: {
  //     type: "Class AB Amplifier with High Bass Performance",
  //     outputSound: "60 Watt RMS",
  //     wooferSize: "5.25 Inches",
  //     speakerSize: "3 inches x 2 Pcs",
  //     controlType: "Rotary",
  //     wireMicSocket: "Available",
  //     bluetoothConnectivity: "Yes",
  //     auxConnection: "Yes",
  //     productHeight: "24 Inches",
  //     woodenThickness: "7 MM",
  //     woodenType: "MDF",
  //     wirelessMicAddOn: "Available",
  //     warranty: "6 Months Warranty"
  //   }
  // },
  // {
  //   id: 5,
  //   name: "Trance Jr",
  //   price: 300,
  //   off: "₹50 off",
  //   category: "Home",
  //   image: m5,
  //   image1: m2,
  //   image2: m13,
  //   image3: m14,
  //   specifications: {
  //     type: "Class AB Amplifier with High Bass Performance",
  //     powerOutput: "90W RMS",
  //     speakerSize: "4 inches x 2 Pcs",
  //     wooferSize: "8 Inches x 1 Piece",
  //     bassControl: "Rotary Type",
  //     tweeterSize: "4 Inches",
  //     multiModeRGBLight: "Yes",
  //     productHeight: "18.5 Inches",
  //     volumeControl: "Rotary Type",
  //     warranty: "6 Months Warranty"
  //   }
  // },
  // {
  //   id: 6,
  //   name: "Sonic 200",
  //   price: 250,
  //   off: "₹40 off",
  //   category: "Car",
  //   image: m6,
  //   image1: m2,
  //   image2: m13,
  //   image3: m14,
  //   specifications: {
  //     type: "Class AB Amplifier with High Bass Performance",
  //     powerOutput: "120W RMS",
  //     speakerSize: "4 inches x 2 Pcs",
  //     wooferSize: "8 Inches x 2 Pcs",
  //     bassControl: "Rotary Type",
  //     remoteControl: "Yes",
  //     productHeight: "25 Inches",
  //     volumeControl: "Rotary Type",
  //     warranty: "6 Months Warranty"
  //   }
  // },
  // {
  //   id: 7,
  //   name: "New Wave 100",
  //   price: 180,
  //   off: "₹20 off",
  //   category: "Home",
  //   image: m7,
  //   image1: m2,
  //   image2: m13,
  //   image3: m14,
  //   specifications: {
  //     type: "Class AB Amplifier Based On IC 7294",
  //     powerOutput: "130 Watt RMS",
  //     wooferSize: "8 Inches x 2 Pcs",
  //     speakerSize: "4 Inches",
  //     controlType: "Rotary",
  //     tweeterSize: "4 Inches",
  //     productHeight: "38 Inches",
  //     bassControl: "Rotary Type",
  //     wirelessMicAddOn: "With Remote",
  //     warranty: "6 Months Warranty"
  //   }
  // },
  // {
  //   id: 8,
  //   name: "K-POP",
  //   price: 220,
  //   off: "₹35 off",
  //   category: "Car",
  //   image: m8,
  //   image1: m2,
  //   image2: m13,
  //   image3: m14,
  //   specifications: {
  //     type: "Class AB Amplifier with High Bass Performance",
  //     outputSound: "175 Watt RMS",
  //     wooferSize: "10 Inches",
  //     speakerSize: "4 Inches x 2 Pcs",
  //     controlType: "Rotary",
  //     tweeterSize: "2.5 Inches",
  //     bluetoothConnectivity: "Yes",
  //     auxConnection: "Yes",
  //     productHeight: "36 Inches",
  //     woodenThickness: "11 MM",
  //     woodenType: "MDF",
  //     wirelessMicAddOn: "Available",
  //     warranty: "6 Months Warranty"
  //   }
  // },
  // {
  //   id: 9,
  //   name: "Rock & Roll",
  //   price: 130,
  //   off: "₹15 off",
  //   category: "Portable",
  //   image: m9,
  //   image1: m2,
  //   image2: m13,
  //   image3: m14,
  //   specifications: {
  //     type: "Class D Amplifier with High Bass Performance",
  //     outputSound: "60 Watt RMS",
  //     wooferSize: "8 Inches x 2 Pcs",
  //     battery: "10400 mAh 10 Amp",
  //     volumeControl: "Rotary Type",
  //     wirelessMic: "Yes",
  //     backup: "Up to 5 Hrs",
  //     soundEqualizer: "Manual",
  //     inputPower: "9V DC",
  //     micInSlot: "Yes",
  //     guitarInSlot: "Yes",
  //     ledDisplay: "Big Information LED Display",
  //     rgbLightModes: "8 Modes",
  //     warranty: "6 Months Warranty"
  //   }
  // },
  // {
  //   id: 10,
  //   name: "Trance",
  //   price: 400,
  //   off: "₹60 off",
  //   category: "Home",
  //   image: m10,
  //   image1: m2,
  //   image2: m13,
  //   image3: m14,
  //   specifications: {
  //     type: "Class AB Amplifier Based On IC 7294 with High Bass Performance",
  //     powerOutput: "150W RMS",
  //     speakerSize: "4 inches x 2 Pcs",
  //     wooferSize: "8 Inches x 2 Pcs",
  //     bassControl: "Rotary Type",
  //     tweeterSize: "4 Inches x 2 Pcs",
  //     rgbLight: "Programmed RGB Light",
  //     productHeight: "36 Inches",
  //     volumeControl: "Rotary Type",
  //     warranty: "6 Months Warranty"
  //   }
  // },
  // {
  //   id: 11,
  //   name: "New Wave 200",
  //   price: 350,
  //   off: "₹45 off",
  //   category: "Car",
  //   image: m11,
  //   image1: m2,
  //   image2: m13,
  //   image3: m14,
  //   specifications: {
  //     type: "Class AB Amplifier with High Bass Performance",
  //     powerOutput: "150 Watt RMS",
  //     wooferSize: "8 Inches x 2 Bass",
  //     speakerSize: "4 Inches x 4",
  //     controlType: "Rotary",
  //     productHeight: "32 Inches",
  //     volumeControl: "Rotary Type",
  //     wirelessMicAddOn: "With Remote",
  //     rgbLightModes: "Multi Mode",
  //     warranty: "6 Months Warranty"
  //   }
  // },
  // {
  //   id: 12,
  //   name: "Pulse Box",
  //   price: 275,
  //   off: "₹30 off",
  //   category: "Home",
  //   image: m12,
  //   image1: m2,
  //   image2: m13,
  //   image3: m14,
  //   specifications: {
  //     type: "Class AB Amplifier with High Bass Performance",
  //     powerOutput: "250 Watt RMS",
  //     wooferSize: "10 Inches x 2 Pcs",
  //     speakerSize: "4 inches x 2 Pcs",
  //     controlType: "Rotary",
  //     wirelessMic: true,
  //     bluetoothConnectivity: true,
  //     auxConnection: true,
  //     productHeight: "36 Inches",
  //     woodenThickness: "11 MM",
  //     woodenType: "MDF",
  //     wirelessMicAddOn: true,
  //     warranty: "6 Months Warranty"
  //   }
  // }
];








export const banner = [banner4, banner5, banner6];







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
  },
  {
    id: 2,
    name: "Red Wolf Smart LED TV(24 Inch)",
    oldPrice: 21999,
    newPrice: 15999,
    discount: "27%",
    size: "24 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom1,
    images: [
      tcom1,
      detailscom,
      remotcom,
      viewtv,
      backled,
    ],
    category: "Smart LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
  },
  {
    id: 4,
    name: "Red Wolf Smart LED TV(32 Inch)",
    oldPrice: 29999,
    newPrice: 21990,
    discount: "26%",
    size: "32 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom2,
    images: [
      tcom2,
      detailscom,
      remotcom,
      view7tv,
      backled,


    ],
    category: "Smart LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
  },
  {
    id: 5,
    name: "Red Wolf BTR LED TV(32 Inch)",
    oldPrice: 34999,
    newPrice: 25999,
    discount: "25%",
    size: "32 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom3,
    images: [
      tcom3,
      detailscom,
      remotcom,
      view7tv,
      backled,
    ],
    category: "BTR LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
  },
  {
    id: 6,
    name: "Red Wolf Smart LED TV(43 Inch)",
    oldPrice: 39999,
    newPrice: 29990,
    discount: "25%",
    size: "43 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom4,
    images: [
      tcom4,
      detailscom,
      remotcom,
      view8tv,
      backled,
    ],
    category: "Smart LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
  },
  {
    id: 7,
    name: "Red Wolf BTR LED TV(43 Inch)",
    oldPrice: 44999,
    newPrice: 33990,
    discount: "24%",
    size: "43 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom5,
    images: [
      tcom5,
      detailscom,
      remotcom,
      view8tv,
      backled,
    ],
    category: "BTR LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
  },
  {
    id: 3,
    name: "Red Wolf Android LED TV(55 Inch)",
    oldPrice: 24999,
    newPrice: 17990,
    discount: "28%",
    size: "55 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom4k6,
    images: [
      tcom4k6,
      detailscom4k,
      remotcom,
      view9tv,
      backled,
    ],
    category: "Android LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
  },
  {
    id: 8,
    name: "Red Wolf webOS LED TV(55 Inch)",
    oldPrice: 49999,
    newPrice: 37999,
    discount: "24%",
    size: "55 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom4k1,
    images: [
      tcom4k1,
      detailscom4k,
      remotcom,
      view9tv,
      backled,
    ],
    category: "webOS LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
  },
  {
    id: 9,
    name: "Red Wolf webOS LED TV(65 Inch)",
    oldPrice: 54999,
    newPrice: 40999,
    discount: "25%",
    size: "65 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom4k2,
    images: [
      tcom4k2,
      detailscom4k,
      remotcom,
      view10tv,
      backled,
    ],
    category: "webOS LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
  },
  {
    id: 10,
    name: "Red Wolf webOS LED TV(75 Inch)",
    oldPrice: 59999,
    newPrice: 44999,
    discount: "25%",
    size: "75 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom4k3,
    images: [
      tcom4k3,
      detailscom4k,
      remotcom,
      view11tv,
      backled,
    ],
    category: "webOS LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
  },
  {
    id: 11,
    name: "Red Wolf webOS LED TV(85 Inch)",
    oldPrice: 15999,
    newPrice: 11999,
    discount: "25%",
    size: "85 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom4k4,
    images: [
      tcom4k4,
      detailscom4k,
      remotcom,
      view12tv,
      backled,
    ],
    category: "webOS LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
  },
  {
    id: 12,
    name: "Red Wolf webOS LED TV(98 Inch)",
    oldPrice: 21999,
    newPrice: 15999,
    discount: "27%",
    size: "98 Inch",
    type: "LED",
    height: "35 cm",
    outputSound: "20W",
    aux: "Yes",
    img: tcom4k5,
    images: [
      tcom4k5,
      detailscom4k,
      remotcom,
      view13tv,
      backled,
    ],
    category: "webOS LED TV",
    display: "LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
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








