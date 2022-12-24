export const charSprite = {
  default: "src/assets/sprites/Sebastian.png",
  happy: "src/assets/sprites/Sebastian_Happy.png",
  sad: "src/assets/sprites/Sebastian_Concerned.png",
};

export interface DialogueCardProps {
  name?: string;
  userName?: string;
  message?: string[];
  characterSprite?: keyof typeof charSprite;
  goBack?: () => void;
  goFoward?: () => void;
  children?: React.ReactNode;
}
