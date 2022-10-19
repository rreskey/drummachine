import React, {useEffect, useState} from 'react';

function Pad({ clip, volume, setRecording }) {
    const [active, setActive] = React.useState(false);

    React.useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    }, [clip])

    const handleKeyPress = (e) => (e.keyCode === clip.keyCode) ? playSound() : ''
    
    const playSound = () => {
        const audioTag = document.getElementById(clip.keyTrigger);
        setActive(true);
        setTimeout(() => {
            setActive(false)
        }, 200);
        audioTag.volume = volume;
        audioTag.currentTime = 0;
        audioTag.play();
        setRecording(clip.id);
    }

    return (
        <div id={clip.id} onClick={playSound} className={`drum-pad btn btn-outline-secondary p-5 m-3 w-25 ${active && 'btn-outline-warning'}`}>
            <audio className='clip' id={clip.keyTrigger} src={clip.url} />
            <p className="sound">{clip.keyTrigger}</p>
        </div>
    )
}

export default Pad