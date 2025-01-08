import * as THREE from 'three';

const SoundEffects = () => {
  const listener = useRef(new THREE.AudioListener());
  const sound = useRef(new THREE.Audio(listener.current));
  const audioLoader = useRef(new THREE.AudioLoader());

  useEffect(() => {
    // Load ambient sound
    audioLoader.current.load('/sounds/ambient.mp3', (buffer) => {
      sound.current.setBuffer(buffer);
      sound.current.setLoop(true);
      sound.current.setVolume(0.5);
    });

    return () => {
      sound.current.stop();
    };
  }, []);

  const playSound = () => {
    if (!sound.current.isPlaying) {
      sound.current.play();
    }
  };

  return null; // This component doesn't render anything
};

export default SoundEffects;