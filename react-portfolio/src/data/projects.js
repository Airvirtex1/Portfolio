import meteoImg from "../assets/station_meteo.png";
import opencvImg from "../assets/opencv.png";
import asservissementImg from "../assets/asservissement.png";
import amplificationImg from "../assets/amplification_filtrage.png";
import aqmImg from "../assets/aqm.png";
import crabeImg from "../assets/crabe.png";
import decorsImg from "../assets/decors1.png";

export const projects = [
  {
    id: "portfolio",
    titleKey: "project.portfolio.title",
    descKey: "project.portfolio.intro",
    image: meteoImg,
    tags: ["React", "Tailwind", "i18next"],
  },
  {
    id: "meteo",
    titleKey: "project.meteo.title",
    descKey: "project.meteo.intro",
    image: meteoImg,
    tags: ["ESP32", "MQTT", "Sensors"],
  },
  {
    id: "tourrelle",
    titleKey: "project.tourelle.title",
    descKey: "project.tourelle.intro",
    image: opencvImg,
    tags: ["OpenCV", "Python", "Servo"],
  },
  {
    id: "asservissement",
    titleKey: "project.asservissement.title",
    descKey: "project.asservissement.intro",
    image: asservissementImg,
    tags: ["STM32", "PID", "C"],
  },
  {
    id: "amplification",
    titleKey: "project.amplification.title",
    descKey: "project.amplification.intro",
    image: amplificationImg,
    tags: ["Analog", "KiCad", "LTspice"],
  },
  {
    id: "boitier-aqm",
    titleKey: "project.aqm.title",
    descKey: "project.aqm.intro",
    image: aqmImg,
    tags: ["ESP32", "IoT", "Sensors"],
  },
  {
    id: "crabe",
    titleKey: "project.crabe.title",
    descKey: "project.crabe.intro",
    image: crabeImg,
    tags: ["Raspberry Pi", "Python", "Robotics"],
  },
  {
    id: "argentique",
    titleKey: "project.argentique.title",
    descKey: "project.argentique.intro",
    image: "/assets/argentique.png",
    tags: ["STM32", "Firmware", "C"],
  },
  {
    id: "decors",
    titleKey: "project.decors.title",
    descKey: "project.decors.intro",
    image: decorsImg,
    tags: ["3D Design", "Arduino"],
  },
];
