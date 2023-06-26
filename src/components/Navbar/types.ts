type NavbarItemImgProps = {
  width?: string;
  height?: string;
};

type NavbarItemProps = {
  top?: string;
  bot?: string;
  width: string;
  height: string;
  radius?: string;
  bgcolor?: string;
  border?: string;
  onClick?: React.MouseEventHandler<HTMLLIElement> | undefined;
};

export type { NavbarItemImgProps, NavbarItemProps };
