import { RecipeVariants } from '@vanilla-extract/recipes';
import { buttonStyle } from './Button.css';

export type ButtonVariants = RecipeVariants<typeof buttonStyle>;

export function Button({
  theme,
  type,
  activiate,
  radius,
  size,
  children,
  onClick,
}: React.PropsWithChildren<ButtonVariants> &
  Partial<
    Pick<
      React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >,
      'onClick'
    >
  >) {
  return (
    <button
      className={buttonStyle({ theme, type, activiate, radius, size })}
      {...({ onClick } ?? {})}
    >
      {children}
    </button>
  );
}

export default Button;
