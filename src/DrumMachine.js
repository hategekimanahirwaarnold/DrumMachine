import { useState } from "react";
const DrumMachine = () => {
    let audios = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    let drumLink = [
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    ];
    let drumId =
        [
            'Heater 1',
            'Heater 2',
            'Heater 3',
            'Heater 4',
            'Clap',
            'Open-HH',
            'Kick-n-Hat',
            'Kick',
            'Closed-HH'
        ];
    let buttons = []
    for (let i = 0; i < audios.length; i++) {
        let madeB = <button className="drum-pad" id={drumId[i]}
            onClick={
                () => {
                    //  document.querySelectorAll('audio').forEach(el => el.pause());
                    setDrum(drumId[i]);
                    let music = document.getElementById(audios[i]);
                    music.currentTime = 0;
                    music.play();
                }
            }
        >
            <audio id={audios[i]} className="clip"
                src={drumLink[i]}>
                Your browser does not support the audio element.
            </audio>{audios[i]}
        </button>;
        buttons.push(madeB);
    };
    const [drum, setDrum] = useState('');
    return (
        <div id="drum-machine">
            <h2>Drum Machine</h2>
            <div className="bf-drums">
                <div className="drums">
                    {buttons}
                </div>
                <div id="display">
                    <p>{drum}</p>
                </div>
            </div>
        </div>
    );
}

export default DrumMachine;