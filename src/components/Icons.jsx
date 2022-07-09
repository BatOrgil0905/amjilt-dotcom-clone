import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChartSimple,
    faHouse,
    faClipboardList,
    faClipboardCheck,
    faFileLines,
    faNewspaper,
    faDesktop,
    faMessage,
    faAddressCard,
    faImage,
    faGlobe,
    faEnvelope,
    faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

export const ChartIcon = () => {
  return (
    <FontAwesomeIcon icon={faChartSimple} className="text-white text-4xl" />
  );
};

export const HouseIcon = () => {
  return (
    <FontAwesomeIcon icon={faHouse} className="text-white text-4xl" />
  );
};

export const ClipListIcon = () => {
  return (
    <FontAwesomeIcon icon={faClipboardList} className="text-white text-4xl" />
  );
};

export const ClipCheckIcon = () => {
  return (
    <FontAwesomeIcon icon={faClipboardCheck} className="text-white text-4xl" />
  );
};

export const FileIcon = () => {
  return (
    <FontAwesomeIcon icon={faFileLines} className="text-white text-4xl" />
  );
};

export const NewspaperIcon = () => {
  return (
    <FontAwesomeIcon icon={faNewspaper} className="text-white text-4xl" />
  );
};

export const DesktopIcon = () => {
  return (
    <FontAwesomeIcon icon={faDesktop} className="text-white text-4xl" />
  );
};

export const MessageIcon = () => {
  return (
    <FontAwesomeIcon icon={faMessage} className="text-white text-4xl" />
  );
};

export const AddressIcon = () => {
  return (
    <FontAwesomeIcon icon={faAddressCard} className="text-white text-4xl" />
  );
};

export const ImageIcon = () => {
  return (
    <FontAwesomeIcon icon={faImage} className="text-white text-4xl" />
  );
};

export const BrowseIcon = () => {
    return (
      <FontAwesomeIcon icon={faGlobe} className="text-white text-3xl p-2.5" />
    );
}

export const EnvelopeIcon = () => {
  return (
    <FontAwesomeIcon icon={faEnvelope} className="text-white text-3xl p-2.5" />
  );
};

export const MobileIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faMobileScreenButton}
      className="text-white text-3xl py-2.5 px-2.5 lg:pl-3.5"
    />
  );
};