import { clsx } from 'clsx';
import styles from './Typography.module.css';
import { TextColorType, FontVariant } from 'types/styleTypes';

type TypographyProps = {
  color?: TextColorType;
  variant?: FontVariant;
  className?: string;
  text: string;
};
export const Typography = ({
  color = 'white',
  variant = 'font14-normal',
  className,
  text,
}: TypographyProps) => {
  return <span className={clsx(styles[`text-${color}`], variant, className)}>{text}</span>;
};
