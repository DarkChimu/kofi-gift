export const charSprite = {
  default: "/assets/sprites/Sebastian.png",
  happy: "/assets/sprites/Sebastian_Happy.png",
  sad: "/assets/sprites/Sebastian_Concerned.png",
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
