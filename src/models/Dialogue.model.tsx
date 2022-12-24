export const charSprite = {
  default: "/sprites/Sebastian.png",
  happy: "/sprites/Sebastian_Happy.png",
  sad: "/sprites/Sebastian_Concerned.png",
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
