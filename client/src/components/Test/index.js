import React from "react";
import TextToSpeech from 'text-to-speech-js';

var express = require("express");

function Test () {
    TextToSpeech.talk("Hello Beautiful World!");

    return (
        <div>  </div>
    )
};

export default Test;