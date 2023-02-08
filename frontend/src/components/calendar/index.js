import React from "react";
import {
  RangeDatePicker,
} from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";

export default function Calendar() {
  return (
    <RangeDatePicker
      startDate={new Date()}
      endDate={new Date()}
    />
  );
}