import { IconType } from "react-icons";

declare interface MenuItemProps {
  title: string;
  address: string;
  Icon: IconType;
}

declare interface NavbarItemProps {
  title: string;
  param: string;
}

declare interface ResultsProps {
  results: [];
}

declare interface MoviePageProps {
  params: { [key: string]: string };
}

declare interface SearchPageProps {
  params: { [key: string]: string };
}

declare interface ErrorProps {
  error: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reset: any;
}

declare interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined };
}
