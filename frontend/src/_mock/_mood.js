import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

// Define main icons array
export const mainIcons = [
  {
    id: 'blue',
    icon: <ArrowDropDownCircleIcon sx={{ fontSize: 30, color: '#abdbe3' }} />,
    subIcons: ['Blue1', 'Blue2', 'Blue3', 'Blue4', 'Blue5'],
  },
  {
    id: 'green',
    icon: <ArrowDropDownCircleIcon sx={{ fontSize: 30, color: '#96be25' }} />,
    subIcons: ['Green1', 'Green2', 'Green3', 'Green4', 'Green5'],
  },
  {
    id: 'grey',
    icon: <ArrowDropDownCircleIcon sx={{ fontSize: 30, color: '#888b87' }} />,
    subIcons: ['Grey1', 'Grey2', 'Grey3', 'Grey4', 'Grey5'],
  },
  {
    id: 'pink',
    icon: <ArrowDropDownCircleIcon sx={{ fontSize: 30, color: '#dac9bf' }} />,
    subIcons: ['Pink1', 'Pink2', 'Pink3', 'Pink4', 'Pink5'],
  },
  {
    id: 'yellow',
    icon: <ArrowDropDownCircleIcon sx={{ fontSize: 30, color: '#e0b433' }} />,
    subIcons: ['Yellow1', 'Yellow2', 'Yellow3', 'Yellow4', 'Yellow5'],
  },
];

export const subIcons = {
  Blue1: 'https://github.com/nansvn/Assets/blob/main/mood/blue/blue-1.png?raw=true',
  Blue2: 'https://github.com/nansvn/Assets/blob/main/mood/blue/blue-2.png?raw=true',
  Blue3: 'https://github.com/nansvn/Assets/blob/main/mood/blue/blue-3.png?raw=true',
  Blue4: 'https://github.com/nansvn/Assets/blob/main/mood/blue/blue-4.png?raw=true',
  Blue5: 'https://github.com/nansvn/Assets/blob/main/mood/blue/blue-5.png?raw=true',
  Green1: 'https://github.com/nansvn/Assets/blob/main/mood/green/green-1.png?raw=true',
  Green2: 'https://github.com/nansvn/Assets/blob/main/mood/green/green-2.png?raw=true',
  Green3: 'https://github.com/nansvn/Assets/blob/main/mood/green/green-3.png?raw=true',
  Green4: 'https://github.com/nansvn/Assets/blob/main/mood/green/green-4.png?raw=true',
  Green5: 'https://github.com/nansvn/Assets/blob/main/mood/green/green-5.png?raw=true',
  Grey1: 'https://github.com/nansvn/Assets/blob/main/mood/grey/grey-1.png?raw=true',
  Grey2: 'https://github.com/nansvn/Assets/blob/main/mood/grey/grey-2.png?raw=true',
  Grey3: 'https://github.com/nansvn/Assets/blob/main/mood/grey/grey-3.png?raw=true',
  Grey4: 'https://github.com/nansvn/Assets/blob/main/mood/grey/grey-4.png?raw=true',
  Grey5: 'https://github.com/nansvn/Assets/blob/main/mood/grey/grey-5.png?raw=true',
  Pink1: 'https://github.com/nansvn/Assets/blob/main/mood/pink/pink-1.png?raw=true',
  Pink2: 'https://github.com/nansvn/Assets/blob/main/mood/pink/pink-2.png?raw=true',
  Pink3: 'https://github.com/nansvn/Assets/blob/main/mood/pink/pink-3.png?raw=true',
  Pink4: 'https://github.com/nansvn/Assets/blob/main/mood/pink/pink-4.png?raw=true',
  Pink5: 'https://github.com/nansvn/Assets/blob/main/mood/pink/pink-5.png?raw=true',
  Yellow1: 'https://github.com/nansvn/Assets/blob/main/mood/yellow/yellow-1.png?raw=true',
  Yellow2: 'https://github.com/nansvn/Assets/blob/main/mood/yellow/yellow-2.png?raw=true',
  Yellow3: 'https://github.com/nansvn/Assets/blob/main/mood/yellow/yellow-3.png?raw=true',
  Yellow4: 'https://github.com/nansvn/Assets/blob/main/mood/yellow/yellow-4.png?raw=true',
  Yellow5: 'https://github.com/nansvn/Assets/blob/main/mood/yellow/yellow-5.png?raw=true',
};

export const TAGS = ['Happy', 'Chill', 'Special', 'Teamwork', 'Fight', 'Communication', 'Sad'];

export const Mood_Type = ['Blue', 'Green', 'Pink', 'Yellow', 'Grey'];

export const findIconIds = (subIconName) => {
  const mainIcon = mainIcons.find((icon) => icon.subIcons.includes(subIconName));
  return {
    mainIconId: mainIcon ? mainIcon.id : '',
    subIconId: subIconName,
  };
};
