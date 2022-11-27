"use strict";

function thereminOn(oscillator) {
    oscillator.play();

}

function thereminControl(e, oscillator, theremin, urlParams) {
    let x = e.offsetX;
    let y = e.offsetY;
    console.log("x:", x, "y:", y);

    let minFrequency = 220.0;
    let maxFrequency = 880.0;

    if (urlParams.has('minfr')) {
        minFrequency = parseFloat(urlParams.get('minfr'));
    }

    if (urlParams.has('maxfr')) {
        maxFrequency = parseFloat(urlParams.get('maxfr'));
    }

    let note1 = document.getElementById('note1');
    let freq1 = document.getElementById('frequency1')
    let osc1 = document.getElementById('osc1')

    let freqRange = maxFrequency - minFrequency;
    let thereminFreq = minFrequency + ((x / theremin.clientWidth) * freqRange);
    let thereminVolume = 1.0 - (y / theremin.clientHeight);

    let noteMode = 'any';
    if (urlParams.has('notemode')) {
        noteMode = urlParams.get('notemode');
    }

    if (noteMode == 'fixed') {
        console.log(midiFromFrequency(thereminFreq)[0])
        oscillator.frequency = midiToFrequency(midiFromFrequency(thereminFreq)[0])
        freq1.innerHTML = "Oscillator 1 Frequency: " + midiToFrequency(midiFromFrequency(oscillator.frequency)[0]).toFixed(2) + ' Hz \n';

    } else {
        oscillator.frequency = thereminFreq;
        freq1.innerHTML = "Oscillator 1 Frequency: " + oscillator.frequency.toFixed(2) + ' Hz \n';
    }

    note1.innerHTML = "Oscillator 1 Note: " + noteFromFrequency(oscillator.frequency) + '\n';

    oscillator.volume = thereminVolume;


    console.log("Frequency (OSC1): ", thereminFreq);
    console.log("Volume (OSC1): ", thereminVolume);


}

function thereminOff(oscillator) {
    oscillator.stop();
}

function runAfterLoadingPage() {

    let oscillatorType = "sine";
    let urlParams = (new URL(document.location)).searchParams;

    if (urlParams.has('osctype')) {
        oscillatorType = urlParams.get('osctype')
    }

    const oscillator = new Pizzicato.Sound({
        source: 'wave',
        options: {
            type: oscillatorType,
            frequency: 220
        }
    });


    const theremin = document.getElementById("thereminZone");
    let playbackType = "glide";

    if (urlParams.has('playbacktype')) {
        playbackType = urlParams.get('playbacktype');
    }

    if (playbackType == "glide") {
        theremin.addEventListener("mouseenter", function () {thereminOn(oscillator);
        });
        theremin.addEventListener("mousemove", function (e) {thereminControl(e, oscillator, theremin, urlParams);
        });
        theremin.addEventListener("mouseleave", function () {thereminOff(oscillator);
        });
      }

    else                         {
        theremin.addEventListener("click", function (e) {thereminOn(oscillator);thereminControl(e, oscillator, theremin, urlParams);
        });
        theremin.addEventListener("mouseleave", function () {thereminOff(oscillator);
        });
    }

}

window.onload = runAfterLoadingPage;
